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


let basicParams = {jjUserId:'',userId:'2',schoolId:'1',classId:'1'};
if(window.GreenSchool){
  basicParams.jjUserId = GreenSchool.getUserID();
  GreenSchool.showLeftBtn(false)
  BS.getData(IF.getUserBasic,'GET',{userId:1},false,null,function(d){

  });
}else{
  // basicParams = iosParams;
  // alert(JSON.stringify(basicParams))
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
  components: { App }
})
