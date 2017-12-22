<template>
  <transition name="page">
    <div class="all">
      <ghost_bg :parentModal="modal"></ghost_bg>
      <my_modal :parentModal="modal" ></my_modal><!--向该子组件传递modal对象-->
      <div style="position:relative;width:100%;height:100%;background:#f0f0f0;z-index:4;">
        <div class="article_head">
          <h4>{{ title }}</h4>
          <span class="short_black_bar"></span>

          <p><span>{{ type }}</span> / <span>{{ author }} 著</span></p>
        </div>

        <div class="article" v-html="article">

        </div>
      </div>

      <ctr_bar :likes="likes" :parentModal="modal"></ctr_bar>
    </div>
  </transition>


</template>
<script>
  import $ from 'jquery'
  import ctrbar from '@/components/littlecomp/bookctrbar'
  import ghostBg from '@/components/littlecomp/ghostbg'
  import modal from '@/components/littlecomp/modal'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'article',
    data () {
      return {
        title:'你的坚持，终将美好',
        type:'文学',
        author:'阿笨',
        article:'<div>' +
        '<p>文字来源于网络</p>' +
        '<br />' +
        '<p>"环艺专业设计工作室 建筑面积"</p>' +
        '<p>"淡绿色的镂空架子，光线专业设计工作室。"</p>' +
        '<p>"个办控件划分成一个锐角？"</p>' +
        '<br />' +
        '<p>淡绿色的镂空架在光线的映射下产生了妙趣的光影关系，并且这种结构可以起到一定的防风作用。在保留原有不锈钢饰面的基础上采用了灰色和红色塑铝门套材料为门头造型，简洁而大方。借用建筑学中“室外即室内”的概念，室外地面形象延伸至室内，融为一体。根据要求将 112.52 平的空间划分出4个独立空间并且不影响采光。</p>' +
        '<br />' +
        '<p>1.</p>' +
        '<img src="http://school.jingjing100.com/html5/bmSystem/static/img/banner.846b248.png"/>' +
        '</div>',
        likes:'123',
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
            let book_Id = that.$route.params.id;
            console.log(book_Id);

            BS.getData(IF.addFavorite,'GET',{userId:BP.userId,book_Id:book_Id },true,null,function(d){
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
    },
    methods:{
      getArticle () {
        $.ajax({
          url:'/article',
          data:{id:this.$route.params.id},
          type:'GET',
          async:true,
          success (d){
            console.log(d);
          }
        })
      }
    },
    created () {
      console.log(this.$route.query);
//      this.getArticle();
      $('.all').on('click','.modalBox',function(){
        this.modal.show = false;
      })
//      console.log(this.$route.params.id);
    },
    components:{
      ctr_bar:ctrbar,
      my_modal:modal,
      ghost_bg:ghostBg
    }
  }
</script>
<style>
  .article , .article_head{padding:0 1rem;letter-spacing:0.05rem;position:relative;}
  .short_black_bar{background:#333;display:block;width:3rem;height:0.1rem;margin:0.5rem 0;}
  .article_head{width:100%;}
  .article_head h4{width:100%;padding-top:1rem;}
  .article_head p{width:100%;font-size:0.85rem;}
  .article{font-size:0.8rem;padding-top:2rem;color:#777;}
  .article p{white-space:normal;line-height:1.2rem;letter-spacing:1.5px;}
  .article img{max-width:100%;margin:0.5rem 0;}
</style>
