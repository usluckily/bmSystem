/**
 * Created by Administrator on 2017/3/28.
 */
import $ from 'jquery'
import T from '@/assets/js/transcoding'

let date = new Date();
let years = date.getFullYear();
let month = (parseInt(date.getMonth())+1)<10 ? "0"+(parseInt(date.getMonth())+1) : (parseInt(date.getMonth())+1);
let day = date.getDate()<10 ? "0" + date.getDate() : date.getDate();

function Ajax(url,type,data,async,callback){
   // alert(JSON.stringify(data));
//    alert(url);
  $.ajax({
    url:url,
    type:type ? type : 'GET',
    data:data,
    // dataType:'jsonp',
    async:async,
    timeout:10000,
    beforeSend:function(){
      // $('.layout').css({'display':'block'});
    },
    success:function(d){
      // alert(JSON.stringify(d));
      if(callback) callback(d);

      setTimeout(function(){
        // $('.layout').css({'display':'none'});
      },500)
    },
    error: function(e){
      // alert('err'+JSON.stringify(e));
      if(callback) callback(e);
    }
  });
}

function transDataFunc(Info,transData){
  if(transData){//transData用数组传进来
    for(var i in transData){
      var Str = T.toUtf16( Info[ transData[i] ] );
      Info[ transData[i] ] = Str;
    }
    return Info;
  }
}//transData
function replaceData(newData,oldData){

  if(newData.constructor == Array){
    oldData.data = newData;
  }else{
    for(var i in newData){
      oldData[i] = newData[i];
    }
  }
  console.log(JSON.stringify(newData))

}

let baseFunc = {
  getData:function(url,ajaxType,ajaxdata,anync,transData,CB){//transData参数为数组，传放需要解码base64的属性名，replace为需要改变属性值的对象
    var callback = function(Info){
      if(typeof Info == "string"){
        try{
          // Info = eval('('+Info+')');
          Info = JSON.parse(Info);
        }catch(e){throw e;}
      }

      if(transData){
        for(var i in Info){
          if(Info[i] instanceof Array){
            for(var j in Info[i]){
              Info[i][j] = transDataFunc(Info[i][j],transData);
            }
          }
        }
      }

      if(CB)CB(Info);

      // replaceData(Info,replace);
    };

    Ajax(url,ajaxType,ajaxdata,anync,callback);
  },
  date:{
    years:years,
    month:month,
    days:day
  },
  setBeforeDay (x) {
    let cha = 24*3600*1000 * x;
    let d = new Date();
    let now = d.getTime();
    let before = new Date(now - cha);
    let years = before.getFullYear() ,
    month = (parseInt(before.getMonth())+1)<10 ? "0"+(parseInt(before.getMonth())+1) : (parseInt(before.getMonth())+1) ,
    days = before.getDate()<10 ? "0" + before.getDate() : before.getDate();
    return years + '-' + month + '-' + days;
}
}

export {baseFunc as BS}
