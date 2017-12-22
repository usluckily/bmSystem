<template>
  <transition name="page">
    <div class="all">
      <div class="content">
        <books_list :listState="state" :listData="listData" ></books_list>
      </div>
    </div>
  </transition>
</template>
<script>
  import bookslist from '@/components/littlecomp/bookslist'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'favorite',
    data () {
      return {
        listData:{
          msg:'msg',
          list:[

          ]
        },
        state:{
          type:'C',
          rankIcon:false
        },
      }
    },
    components:{
      books_list:bookslist
//      test:test
    },
    methods:{
      getData () {
        let _this = this , BP = _this.$store.state.BP;
        BS.getData(IF.getTheBookYouWouldLike,'GET',{schoolId:BP.schoolId,userId:BP.userId},true,null,function(d){
          _this.listData.list = d.data
        });
      }
    },
    created () {
      this.getData()

      if(window.GreenSchool){
        GreenSchool.showTitleText('猜你喜欢')
      }

    }
  }
</script>
