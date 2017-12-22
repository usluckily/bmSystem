<template>
  <transition name="page">
    <div class="all">
      <div class="content">
        <books_list :listState="state" :listData="listData"></books_list>
      </div>
    </div>
  </transition>
</template>
<script>
  import bookslist from '@/components/littlecomp/bookslist'
  import ghostBg from '@/components/littlecomp/ghostbg'
  import modal from '@/components/littlecomp/modal'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'myborrow',
    data () {
      return {
        state:{
          type:'C'
        },
        listData:{
          msg:'msg',
          list:[

          ]
        }
      }
    },
    components:{
      books_list:bookslist,
      my_modal:modal,
      ghost_bg:ghostBg
    },
    methods:{
      getData () {
        let _this = this , BP = _this.$store.state.BP;
        BS.getData(IF.getBorrowDetails,'GET',{schoolId:BP.schoolId,userId:BP.userId},true,null,function(d){
          _this.listData.list = d.data
        });
      }
    },
    created () {
      this.getData()
    }
  }
</script>
