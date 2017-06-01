<template>
  <div class="all">

    <div class="centered-box" v-if="show">
      <l_bar :progress="loadingStatus" :start="loading.start" :end="loading.end"></l_bar>
    </div>

    <div id="magazine" class="flipbook">
      <div  v-for="i in list" class="page"><!--:style="{background:'url('+i.pic+') no-repeat',backgroundSize:'100%'}"-->
        <img :src="i.pic" class="pageimg"/>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import 'turn.js'
  import loadingbar from '@/components/littlecomp/loadingbar'
  import jsonp from '@/assets/js/jsonp'
  import IF from '@/assets/js/interface'

  export default({
    name:'pageturn',
    data(){
      return{
        list:[
          {pic:require('../../assets/img/2.jpg')},
          {pic:require('../../assets/img/1.png')},
          {pic:require('../../assets/img/2.jpg')},
          {pic:require('../../assets/img/1.png')}
        ],
        w:$(window).width(),
        h:$(window).height(),
        loadingStatus:0,
        show:true,
        loading:{
          start:false,
          end:false
        }
      }
    },
    methods:{

    },
    created(){
      let vm =this
      vm.loading.start = true
      jsonp.get(IF.getEbook,vm.$route.params.id,function(d){
        console.log(d);
        setTimeout(function(){
          vm.loading.end = true
          setTimeout(function(){
            vm.show = false
          },1000)
        },100)
      })
    },
    mounted(){
      $('#magazine').turn({
        width: this.w,
        height: this.h,
        elevation: 50,
        display: 'single',
        // Enable gradients
        gradients: true,
        // Auto center this flipbook
        autoCenter: true
      });
    },
    components:{
      l_bar:loadingbar
    }
  })
</script>
<style>
  #magazine{
    width: 800px;
    height: 400px;
    left:0;
  }

  .flipbook > div{}
  .page{display:flex;width:100%;height:100%;justify-items:center;align-items:center;}
  .pageimg{width:100%;}

  #magazine .turn-page{
    background-color:#fff;
  }
  .centered-box{
    z-index:100;
    background:#fff;
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
  }
</style>

