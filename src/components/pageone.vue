<template>
  <transition name="page">
    <div id="page1" ><!--outlink为暂时使用-->

      <my_nav :parentData="nav" ></my_nav>

      <my_banner v-show="!outlink.show"></my_banner>

      <my_tab v-show="!outlink.show" :parentData="tab" ></my_tab>

      <div class="content" v-show="!outlink.show">
        <books_list :listState="state" :parentModal="this.parentModal" :listData="listData"></books_list>
        <!--<router-view :parentModal="this.parentModal"></router-view>-->
      </div>

      <out_link v-if="outlink.show"></out_link>

    </div>
  </transition>

</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import banner from '@/components/littlecomp/sliderbanner'
  import bookslist from '@/components/littlecomp/bookslist'
  import tab from '@/components/littlecomp/tab'
  import cardOne from '@/components/littlecomp/cardone'
  import outlinks from '@/components/test/outlinks'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'pageone',
    props:['show','parentModal'],
    data () {
      return {
        nav:{
          list:[
            {title:'图书馆',hash:'/page/1'},
            {title:'电子图书',hash:'/outlinks/'}
          ]
        },
        listData:{
          msg:'msg',
          list:[
            {title:'愿你慢慢长大',author:'理想国度',type:'文学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/1',id:'1',ranking:'1',isCollect:0},
            {title:'你的坚持，终将美好',author:'阿笨',type:'设计',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/2',id:'2',ranking:'2',isCollect:1},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/3',id:'3',ranking:'3',isCollect:1},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/4',id:'4',ranking:'4',isCollect:1}
          ]
        },
        state:{
          type:'A'
        },
        tab:this.$store.state.tab || {list:[]},
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
      books_list:bookslist,
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
    created () {
      let _this = this , BP = _this.$store.state.BP;

      //get tab
      if(this.$store.state.tab.list == ''){
        BS.getData(IF.getBookKind,'GET',{},true,null,function(d){
          _this.tab.list = d.data;
          _this.$store.state.tab.list = d.data;
        });
      }

      //get book list in home page
      BS.getData(IF.getHomeBookList,'GET',{school_Id:BP.schoolId},true,null,function(d){
        _this.listData.list = d.data;
      });
    },
    mounted () {
      let _this = this
      //pageOne 需要处理下ios传参延迟的问题
    }
  }
</script>
<style scoped>
  body{overflow:hidden;}
  .all{position:absolute;max-width:100%;}
</style>
