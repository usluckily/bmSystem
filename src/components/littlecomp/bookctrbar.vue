<template>
  <div class="book_ctr_bar clearfix">
    <div class="l">
      <span>
        <!--123-->
      </span>
      <span>
        <!--321-->
      </span>
    </div>

    <div class="r">
      <span style="color:#999;">{{ likes }}喜欢</span>
      <span class="c_yellow" @click="modalShow(modal.bookId,'确认将此书加入书架？','0')">加入书架</span>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default{
    name:'ctrbar',
    props:['likes','parentModal'],
    data () {
      return {
        modal:this.parentModal
      }
    },
    methods:{
      addBook () {
        this.parentModal.show = true;
      },
      modalShow (id,text,state) {
        this.parentModal.bookId = id;
        this.parentModal.show = true;
        this.parentModal.content = text;
        this.parentModal.state = state;
      },
    }
  }
</script>
<style>
  .book_ctr_bar{position:fixed;bottom:0;left:0;width:100%;padding:1rem;z-index:5;box-shadow:0 0 3px #999;font-size:0.8rem;background:#fff;}
  .book_ctr_bar>div{float:left;width:50%;}
  .book_ctr_bar>div.l{text-align:left;}
  .book_ctr_bar>div.r{text-align:right;}
  .book_ctr_bar>div>span{margin:0 0.5rem;}
</style>
