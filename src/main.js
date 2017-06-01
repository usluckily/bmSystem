// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from'vuex'

import IF from '@/assets/js/interface'
import {BS} from '@/assets/js/base'

Vue.config.productionTip = false

Vue.use(Vuex)


let basicParams = {jjUserId:'',userId:'2',schoolId:'1',classId:'1',Real_Name:'',likes:'',image:'',borrow_Number:'',Ic_Number:'',sex:'',className:''};
if(window.GreenSchool){
  basicParams.jjUserId = GreenSchool.getUserID();
  GreenSchool.showLeftBtn(false);
  BS.getData(IF.getUserBasic,'GET',{jjUserId:basicParams.jjUserId},false,null,function(d){
    for(var i in d.data){
      basicParams[i] = d.data[i]
    }
  })
}else{
  //轮询检测ios端参数是否传到
  let SI = setInterval(function(){
    basicParams.jjUserId = window.iosParams.userId;
    if(window.iosParams.userId != ''){

      BS.getData(IF.getUserBasic,'GET',{jjUserId:basicParams.jjUserId},false,null,function(d){
        for(var i in d.data){
          basicParams[i] = d.data[i]
        }
      })
      clearInterval(SI)
    }
  },50)

}



const store = new Vuex.Store({
  state: {
    page: {
      pageOne:true,
      pageTwo:false,
      pageThree:false
    },
    iosParams:iosParams,//该绑定为ios的getUserInfo方法的会有延时传递的参数,通过绑定一个全局params，在getUseInfo中修改该对象属性
    BP:basicParams,
    tab:{ list:[] }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App },
  data: {
    eventHub: new Vue()
  }
})
