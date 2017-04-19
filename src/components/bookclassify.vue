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
  import $ from 'jquery'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'bookclassify',
    data () {
      return {
        state:{
          type:'A'
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
        modal:{
          show:false,
          that:this,
          content:'',
          bookId:'',
          ctrState:'0',
          bookObj:'',
          callback () {
            let i = this.bookObj;
            let _this = this , that = _this.that , BP = that.$store.state.BP;
            //收藏
            if(i.isCollect == 0){
              BS.getData(IF.addFavorite,'GET',{userId:1,book_id:i.id},true,null,function(d){
                switch(d.status){
                  case 404:
                    alert('404');
                    break;
                }
                _this.show = false
              });
            }else{
              BS.getData(IF.addFavorite,'GET',{userId:BP.userId,book_Id:i.book_id || i.id },true,null,function(d){
                switch(d.status){
                  case 404:
                    alert('404');
                    break;
                }
                _this.content = d.error;
                setTimeout(function(){
                  _this.show = false
                },1000);
              });
            }

          }
        }
      }
    },
    created () {
      let _this = this , BP = _this.$store.state.BP , kind = this.$route.params.id;
//      setTimeout(function(){
//        _this.listData.list = [
//          {"id":"10","book_Name":"上下五百年","book_ISBN":"7414","first_Author":"gdag","book_Kind_Name":"政治、法律","introduce":"dsga","book_Price":"23.0","likes":"9","image":"dga"},
//          {"id":"5","book_Name":"达芬奇密码","book_ISBN":"5454","first_Author":"hh","book_Kind_Name":"政治、法律","introduce":"ff" ,"book_Price":"555.0","likes":"5","image":"asga"}
//        ]
//      },5000);
      BS.getData(IF.getKindList,'GET',{kind:$.trim(kind),userId:BP.userId,school_Id:BP.schoolId},true,null,function(d){
        _this.listData.list = d.data;
      });
    },
    components:{
      books_list:bookslist,
      my_modal:modal,
      ghost_bg:ghostBg
    }
  }
</script>
