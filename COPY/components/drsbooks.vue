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
    name:'drsbooks',
    data () {
      return {
        nav:{
          list:[
            {title:'全校',hash:'/drsbooks/'+this.$route.params.id+'?cur=0&state=class'},
            {title:'班级',hash:'/drsbooks/'+this.$route.params.id+'?cur=1&state=school'}
          ]
        },
        listData:{
          msg:'msg',
          list:[
//            {book_Name:'愿你慢慢长大',first_Author:'理想国度',type:'文学',introduce:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',image:require('../assets/img/banner.png'),hash:'/article/1',id:'1',ranking:'1',isCollect:0},
//            {book_Name:'你的坚持，终将美好',first_Author:'阿笨',type:'设计',introduce:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',image:require('../assets/img/banner.png'),hash:'/article/2',id:'2',ranking:'2',isCollect:1},
//            {book_Name:'孙小渡',first_Author:'阿笨',type:'人文科学',introduce:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',image:require('../assets/img/banner.png'),hash:'/article/3',id:'3',ranking:'3',isCollect:1},
//            {book_Name:'孙小渡',first_Author:'阿笨',type:'人文科学',introduce:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',image:require('../assets/img/banner.png'),hash:'/article/4',id:'4',ranking:'4',isCollect:1}
          ]
        },
        state:{
          type:'D',
          rankIcon:false
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
            BS.getData(IF.addFavorite,'GET',{userId:BP.userId,book_Id:i.book_id},true,null,function(d){
              switch(d.status){
                case 404:
                  alert('404');
                  break;
              }
              _this.show = false
            });
          }else{
//            alert('本书已在收藏夹');
            BS.getData(IF.addFavorite,'GET',{userId:BP.userId,book_Id:i.book_id},true,null,function(d){
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
      },
      }
    },
    methods:{
      getData (type) {
        let _this = this;
        BS.getData(IF.getFavorite,'GET',{userId:this.$route.params.id},true,null,function(d){
          _this.listData.list = d.data
        });
      }
    },
    created () {
      let type = this.$route.query.state;
      this.getData(type)
    },
    components:{
      books_list:bookslist,
      my_modal:modal,
      ghost_bg:ghostBg
    },
    watch:{


    }
  }
</script>
