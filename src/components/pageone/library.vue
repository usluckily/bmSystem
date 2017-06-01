<template>
  <div>
    <my_banner ></my_banner>

    <my_tab  :parentData="tab" ></my_tab>

    <div class="content" >
      <books_list :listState="state" :parentModal="this.parentModal" :listData="listData"></books_list>

    </div>
  </div>
</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import banner from '@/components/littlecomp/sliderbanner'
  import bookslist from '@/components/littlecomp/bookslist'
  import tab from '@/components/littlecomp/tab'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default({
    name:"library",
    props:['show','parentModal'],
    data(){
      return {
        listData:{
          msg:'msg',
          list:[

          ]
        },
        state:{
          type:'A'
        },
        tab:this.$store.state.tab || {list:[]},
      }
    },
    created () {
      let _this = this , BP = _this.$store.state.BP;
      //get tab
      if(this.$store.state.tab.list == ''){
        BS.getData(IF.getBookKind,'GET',{userId:BP.userId},true,null,function(d){
          _this.tab.list = d.data;
          _this.$store.state.tab.list = d.data;
        });
      }

      //get book list in home page
      BS.getData(IF.getHomeBookList,'GET',{school_Id:BP.schoolId,userId:BP.userId},true,null,function(d){
        _this.listData.list = d.data;
      });
    },
    components:{
      my_nav:nav,
      my_banner:banner,
      my_tab:tab,
      books_list:bookslist
    },
  })
</script>
