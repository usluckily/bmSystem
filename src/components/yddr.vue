<template>
  <transition name="page">
    <div class="all" style="z-index:4;">
      <!--<my_nav :parentData="nav"></my_nav>-->

      <div class="banner">
        <img src="../assets/img/yddr_banner.png"/>
      </div>

      <div class="content">
        <person_list :parentData="listData"></person_list>
      </div>

    </div>
  </transition>
</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import personlist from '@/components/littlecomp/personlist'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'yddr',//阅读达人
    data () {
      return {
        nav:{
         list:[
           {title:'全校',hash:'/yddr/school?cur=0'},
           {title:'班级',hash:'/yddr/class?cur=1'},
         ]
        },
        listData:{
          my:{},
          list:[

          ]
        }
      }
    },
    components:{
      my_nav:nav,
      person_list:personlist
    },
    methods:{
      getData (type) {
        let _this = this , BP = _this.$store.state.BP;
        switch(type){
          case 'school':
            BS.getData(IF.getReadTalentFromSchool,'GET',{schoolId:BP.schoolId,userId:BP.userId},true,null,function(d){
              _this.listData.my = d.data.my;
              _this.listData.list = d.data.list

              _this.listData.my.ranking = parseInt(_this.listData.my.ranking)
              for(var i in _this.listData.list){
                _this.listData.list[i].ranking = parseInt(_this.listData.list[i].ranking)
              }
              //返回的ranking变成了1.0,2.0之类的，暂时先这么处理下
            });
            break;
          case 'class':
            BS.getData(IF.getReadTalentFromClass,'GET',{schoolId:BP.schoolId,userId:BP.userId},true,null,function(d){
              _this.listData.my = d.data.my;
              _this.listData.list = d.data.list

              _this.listData.my.ranking = parseInt(_this.listData.my.ranking)
              for(var i in _this.listData.list){
                _this.listData.list[i].ranking = parseInt(_this.listData.list[i].ranking)
              }
              //返回的ranking变成了1.0,2.0之类的，暂时先这么处理下
            });
            break;
          default:
            break;
        }
      }
    },
    created () {
      let type = this.$route.params.name;
      this.getData(type)
    },
    watch:{
      '$route' :function(to, from){
        let type = this.$route.params.name;
        console.log(type)
        this.getData(type)
      }
    }
  }
</script>
