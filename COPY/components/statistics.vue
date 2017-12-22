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
