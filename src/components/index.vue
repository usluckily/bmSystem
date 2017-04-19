<template>
  <div class="all">
    <!--parent:{{ page.pageOne }}-->
    <ghost_bg :parentModal="modal"></ghost_bg>
    <my_modal :parentModal="modal" ></my_modal><!--向该子组件传递modal对象-->

    <!--<page_one :show="page.pageOne" :parentModal="modal"></page_one>-->

    <!--<page_two :show="page.pageTwo"></page_two>-->

    <!--<page_three :show="page.pageThree"></page_three>-->

    <router-view :parentModal="modal"></router-view>

    <my_foot :parentPage="page"></my_foot>
  </div>
</template>
<script>
  import pageone from '@/components/pageone'
  import pagetwo from '@/components/pagetwo'
  import pagethree from '@/components/pagethree'
  import foot from '@/components/littlecomp/footer'
  import ghostBg from '@/components/littlecomp/ghostbg'
  import modal from '@/components/littlecomp/modal'

  export default{
    name:'index',
    data () {
      return{
        page:{
          pageOne:true,
          pageTwo:false,
          pageThree:false,
        },
        modal:{
          show:false,
          content:'',
          bookId:'',
          ctrState:'0',
          bookObj:'',
          callback () {
            let i = this.bookObj;
            let _this = this;
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
        }
      }
    },
    components:{
      page_one:pageone,
      page_two:pagetwo,
      page_three:pagethree,
      my_foot:foot,
      my_modal:modal,
      ghost_bg:ghostBg
    },
    watch:{
      '$route' :function(to, from){
        JSON.strign
        switch(to.path){
          case '/page/1':
            this.page.pageOne = true;
            this.page.pageTwo = this.page.pageThree = false;
            break;
          case '/page/2':
            this.page.pageTwo = true;
            this.page.pageOne = this.page.pageThree = false;
            break;
          case '/page/3':
            this.page.pageThree = true;
            this.page.pageOne = this.page.pageTwo = false;
            break;
        }
        console.log('%cTo', 'color:white; background-color:#0055CC',to);
        console.log('%cFrom', 'color:white; background-color:#0055CC',from);
      }
    },
    created () {
      console.log('created');
      let hash = location.hash;
      hash = hash.split('#')[1];
      switch(hash){
        case '/page/1':
          this.page.pageOne = true;
          this.page.pageTwo = this.page.pageThree = false;
          break;
        case '/page/2':
          this.page.pageTwo = true;
          this.page.pageOne = this.page.pageThree = false;
          break;
        case '/page/3':
          this.page.pageThree = true;
          this.page.pageOne = this.page.pageTwo = false;
          break;
      }

      //Android
      if(window.GreenSchool){
        GreenSchool.showLeftBtn(false);
      }
    }
  }
</script>
