<template>
  <transition name="page">
    <div class="all" style="z-index:4">
      <ghost_bg :parentModal="modal"></ghost_bg>
      <my_modal :parentModal="modal" ></my_modal><!--向该子组件传递modal对象-->

      <slot name="nav"></slot>

      <div class="content" >
        <div class="card_box">
          <div class="card" v-for="i in data.list">
            <!--rank_box-->
            <div class="rank_box" v-if="state.rankIcon">
              <div v-if="i.ranking == '1'"> <img src="../../assets/img/book_no1.png"/> </div>
              <div v-else-if="i.ranking == '2'"> <img src="../../assets/img/book_no2.png"/> </div>
              <div v-else-if="i.ranking == '3'"> <img src="../../assets/img/book_no3.png"/> </div>
              <div v-else>{{ i.ranking }}</div>
            </div>
            <!--rank_box-->
            <div class="in_card_box clearfix" @click="gotoArticle(i.hash)">
              <div class="img_box">

                <img src="../../assets/img/1.png"/>
              </div>
              <div class="info_box">
                <h4 >{{ i.title }}</h4>
                <p>{{ i.type }} / {{ i.author }} 著</p>
                <div>
                  {{ i.content }}
                </div>
              </div>
            </div>

            <div class="card_foo clearfix">
              <div class="l" v-if="state.type=='A'">7小时前</div>
              <div class="r">
                <span v-if="state.type=='A'">74</span><!--
         --><span></span><!--
         --><span @click="modalShow(i.id,'确认将此书加入书架？','0')" v-if="state.type=='A'">加入书架</span><span class="single" @click="modalShow(i.id,'确认取消？','1')" v-if="state.type=='B'">取消</span><span class="single"v-if="state.type=='C'">借读112次</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import ghostBg from '@/components/littlecomp/ghostbg'
  import modal from '@/components/littlecomp/modal'

  export default{
    name:'bookList',
    props:['bookListState'],
    data () {
      return {
        state:this.bookListState || false,
        modal:{
          show:false,
          content:'',
          bookId:'',
          ctrState:'0',
          affirm(id,state) {
            switch(state){
              case '0':
                alert('收藏');
                break;
              case '1':
                alert('取消收藏');
            }
          }
        },
        data:{
          msg:'msg',
          list:[
            {title:'愿你慢慢长大',author:'理想国度',type:'文学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/1',id:'1',ranking:'1'},
            {title:'你的坚持，终将美好',author:'阿笨',type:'设计',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/2',id:'2',ranking:'2'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/3',id:'3',ranking:'3'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/4',id:'4',ranking:'4'}
          ]
        },
        rankIconShow:this.rankIcon || false
      }
    },
    methods:{
      gotoArticle (x) {
        let module = this.$route.params.module , params =  this.$route.params.id;
        this.$router.push({path:x,query:{module:module,params:params}});
      },
      modalShow (id,text,state) {
        this.modal.bookId = id;
        this.modal.show = true;
        this.modal.content = text;
        this.modal.state = state;
      },
      test () {
        alert('xxxxcc')
      }
    },
    components:{
      my_modal:modal,
      ghost_bg:ghostBg
    }
  }
</script>
<style scoped>
  .img_box{position:relative;}
  .rank_box{position:absolute;z-index:4;top:0;left:0.5rem;width:2rem;height:2rem;border-radius:50%;background:#fff;line-height:2rem;text-align:center;overflow:hidden;}
  .rank_box div{width:100%;height:100%;}
  .rank_box div img{display:block;width:100%;}
  .card_foo .r span.single{width:100%;text-align:right;}
</style>
