<template>
  <transition name="page">
    <div class="all" style="z-index:4;">
      <my_nav slot="nav" :parentData="nav"></my_nav>

      <div class="content">
        <books_list :listState="state" :listData="listData" ></books_list>
      </div>
    </div>
  </transition>
</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import bookslist from '@/components/littlecomp/bookslist'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'statistics',
    data () {
      return {
        nav:{
          list:[
            {title:'全校',hash:'/statistics/school?cur=0'},
            {title:'班级',hash:'/statistics/class?cur=1'}
          ]
        },
        listData:{
          msg:'msg',
          list:[
            {title:'愿你慢慢长大',author:'理想国度',type:'文学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/1',id:'1',ranking:'1'},
            {title:'你的坚持，终将美好',author:'阿笨',type:'设计',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/2',id:'2',ranking:'2'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/3',id:'3',ranking:'3'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/4',id:'4',ranking:'4'}
          ]
        },
        state:{
          type:'C',
          rankIcon:true
        },
      }
    },
    methods:{
      getData (type) {
        let _this = this , BP = _this.$store.state.BP;
        switch(type){
          case 'school':
            BS.getData(IF.getStatistics,'GET',{schoolId:BP.schoolId,userId:BP.userId},true,null,function(d){
              _this.listData.list = d.data
            });
            break;
          case 'class':
            BS.getData(IF.getStatistics,'GET',{classId:BP.classId,userId:BP.userId},true,null,function(d){
              _this.listData.list = d.data
            });
            break;
          default:
            break;
        }
      }
    },
    created () {
      let type = this.$route.params.type;
      this.getData(type)
    },
    components:{
      my_nav:nav,
      books_list:bookslist
//      test:test
    },
    watch:{
      '$route' :function(to, from){
        let type = this.$route.params.type;
        console.log(type)
        this.getData(type)
      }
    }
  }
</script>
