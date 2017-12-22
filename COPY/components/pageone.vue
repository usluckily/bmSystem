<template>
  <transition name="page">
    <div id="page1" ><!--outlink为暂时使用-->

      <my_nav :parentData="nav" ></my_nav>

      <!--<my_banner v-show="!outlink.show"></my_banner>-->

      <!--<my_tab v-show="!outlink.show" :parentData="tab" ></my_tab>-->

      <!--<router-view :parentModal="this.parentModal"></router-view>-->

      <!--<div class="content" v-show="!outlink.show">-->
        <!--<books_list :listState="state" :parentModal="this.parentModal" :listData="listData"></books_list>-->

      <!--</div>-->

      <!--<out_link v-if="outlink.show"></out_link>-->

      <!--↑old-->

      <router-view :parentModal="this.parentModal"></router-view>

    </div>
  </transition>

</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'


  export default{
    name:'pageone',
    props:['show','parentModal'],
    data () {
      return {
        nav:{
          list:[
            {title:'图书馆',hash:'/page/1/library'},
            {title:'电子图书',hash:'/ebook'}///page/1/ebook
          ]
        },
      }
    },
    components:{
      my_nav:nav,
    },
    watch:{
      '$route' :function(to, from){
        console.log('%cTo', 'color:white; background-color:#0055CC',to);
        console.log('%cFrom', 'color:white; background-color:#0055CC',from);
      }
    },
    created () {

    },
    mounted () {

    }
  }
</script>
<style scoped>
  body{overflow:hidden;}
  .all{position:absolute;max-width:100%;}
</style>
