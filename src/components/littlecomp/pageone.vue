<template>
  <transition name="page">
    <div id="page1" ><!--outlink为暂时使用-->

      <my_nav :parentData="nav" ></my_nav>

      <my_banner v-show="!outlink.show"></my_banner>

      <my_tab v-show="!outlink.show"></my_tab>

      <div class="content" v-show="!outlink.show">
        <my_cardOne :parentModal="this.parentModal"></my_cardOne>
        <!--<router-view :parentModal="this.parentModal"></router-view>-->
      </div>

      <out_link v-if="outlink.show"></out_link>

    </div>
  </transition>

</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import banner from '@/components/littlecomp/sliderbanner'
  import tab from '@/components/littlecomp/tab'
  import cardOne from '@/components/littlecomp/cardone'
  import outlinks from '@/components/test/outlinks'

  export default{
    name:'pageone',
    props:['show','parentModal'],
    data () {
      return {
        nav:{
          list:[
            {title:'图书馆',hash:'/page/1'},
//            {title:'电子图书',hash:'/outlinks/'},
            {title:'电子图书',hash:'http://xld.xiaobenxiong.net/XBXWeiXinBookVideo/index.html'},
          ]
        },
        outlink:{
          show:false
        },
//        test:this.$store.state.count
      }
    },
    components:{
      my_nav:nav,
      my_banner:banner,
      my_tab:tab,
      my_cardOne:cardOne,
      out_link:outlinks
    },
    watch:{
      '$route' :function(to, from){
        console.log(to.path);
        switch(to.path){
          case '/outlinks/':
            this.outlink.show = true;
            break;
          default:
            this.outlink.show = false;
            break;
        }
        console.log('%cTo', 'color:white; background-color:#0055CC',to);
        console.log('%cFrom', 'color:white; background-color:#0055CC',from);
      }
    },
  }
</script>
<style scoped>
  body{overflow:hidden;}
  .all{position:absolute;max-width:100%;}
</style>
