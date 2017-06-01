/**
 * Created by Administrator on 2017/6/1.
 */
import $ from 'jquery'

export default{
  get(url,data,cb){
    $.ajax({
      type:"get",
      url:url,
      data:data,
      dataType:'jsonp',
      success(d){
        if(cb){
          cb(d)
        }
      }
    })
  }
}
