<template>
  <div class="card_box">

    <div v-show="data.list.length < 1" class="prompt">
      <p>{{ prompt.msg }}</p>
    </div>
    <!--无数据时的提示-->

    <div class="card" v-for="i in data.list">
      <!--rank_box-->
      <div class="rank_box" v-if="state.rankIcon">
        <div v-if="i.ranking == '1'"> <img src="../../assets/img/book_no1.png"/> </div>
        <div v-else-if="i.ranking == '2'"> <img src="../../assets/img/book_no2.png"/> </div>
        <div v-else-if="i.ranking == '3'"> <img src="../../assets/img/book_no3.png"/> </div>
        <div v-else>{{ i.ranking }}</div>
      </div>
      <!--rank_box-->
      <div class="in_card_box clearfix" @click="gotoArticle('/article/'+(i.book_id || i.id) )">
        <div class="img_box">

          <img src="../../assets/img/1.png"/>
        </div>
        <div class="info_box">
          <h4> <p> {{ i.book_Name }}</p> <span v-if="state.type=='D'" @click="modalShow(i,'确认将此书加入书架？','0',$event)">加入书架</span></h4>
          <p>{{ i.book_Kind_Name }} / {{ i.first_Author }} 著</p>
          <div>
            {{ i.introduce }}
          </div>
        </div>
      </div>

      <div class="card_foo clearfix">
        <div class="l" v-if="state.type=='A' && state.type!='D'">7小时前</div>
        <div class="r">
          <span v-if="state.type=='A' && state.type!='D'">{{ i.likes }}</span><!--
         --><span></span><!--
         --><span @click="modalShow(i,'确认将此书加入书架？','0',$event)" v-if="state.type=='A'">加入书架</span><span class="single" @click="modalShow(i,'确认取消？','1')" v-if="state.type=='B'">取消</span><span class="single"v-if="state.type=='C'">借读{{ i.num || i.read_num }}次</span>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'bookslist',
    props:['listState','listData','parentModal'],
    data () {
      return {
        state:this.listState || false,
        data: this.listData || {list:[]},
        rankIconShow:this.rankIcon || false,
        prompt:{
          msg:'加载中...'
        }
      }
    },
    methods:{
      gotoArticle (x) {
        let module = this.$route.params.module , params =  this.$route.params.id;
        this.$router.push({path:x,query:{module:module,params:params}});
      },
      modalShow (i,text,state,e) {
        if(e){
          e.stopPropagation();
        }
        this.parentModal.bookObj = i;
        this.parentModal.show = true;
        this.parentModal.content = text;
        this.parentModal.state = state;
      },
      test () {
      }
    },
    created () {

    },
    beforeUpdate(){
      let _this = this
      if(_this.data.list.length < 1){
        _this.prompt.msg = '暂时没有数据'
      }
    },
    components:{

    }
  }
</script>
<style scoped>
  .img_box{position:relative;}
  .rank_box{position:absolute;z-index:4;top:0;left:0.5rem;width:2rem;height:2rem;border-radius:50%;background:#fff;line-height:2rem;text-align:center;overflow:hidden;}
  .rank_box div{width:100%;height:100%;}
  .rank_box div img{display:block;width:100%;}
  .card_foo .r span.single{width:100%;text-align:right;}
  .info_box h4{display:flex;flex-direction: row;align-items:center;justify-content:space-between;}
  .info_box h4 p{width:70%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  .prompt{position:fixed;width:100%;height:100%;display:flex;flex-direction: row;align-items:center;justify-content:center;}
  .prompt p{position: relative;top: -2rem;font-size:0.8rem;}
</style>
