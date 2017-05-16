<template>
  <transition name="page">
    <div class="all">
      <ghost_bg :parentModal="modal"></ghost_bg>
      <my_modal :parentModal="modal"></my_modal>

      <div class="content">
        <books_list :listState="state" :listData="listData" :parentModal="modal"></books_list>
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
    name:'borrowdetails',
    data () {
      return {
        state:{
          type:'B'
        },
        listData:{
          msg:'msg',
          list:[

          ]
        },
        modal:{
          that:this,//指向本组件Vue
          show:false,
          content:'',
          bookId:'',
          ctrState:'0',
          bookObj:'',
          callback () {
            let _this = this , that = _this.that , BP = that.$store.state.BP;
            let i = _this.bookObj;
            BS.getData(IF.delFavorite,'GET',{userId:BP.userId,book_Id:i.book_id},true,null,function(d){
              switch(d.error){
                case 404:
                  alert('404');
                  break;
                case 'success':
                  BS.getData(IF.getFavorite,'GET',{userId:BP.userId},true,null,function(d){
                    that.listData.list = d.data
                  });
                  break;
              }
              _this.show = false
            });
          }
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
        let _this = this , BP = this.$store.state.BP;
        BS.getData(IF.getFavorite,'GET',{userId:BP.userId},true,null,function(d){
          _this.listData.list = d.data

        });
      }
    },
    created () {
      this.getData()
    }
  }
</script>
