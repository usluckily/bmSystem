<template v-cloak>
  <div class="card_box">
    <div class="card" v-for="i in data.list">
      <!--<div class="card_tit">- 阅读 -</div>-->

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
        <div class="l">7小时前</div>
        <div class="r">
          <span>74</span><!--
     --><span></span><!--
     --><span @click="modalShow(i,'确认将此书加入书架？','0')">加入书架</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import $ from 'jquery'

  export default {
    name:'carOne',
    props:['parentModal'],
    data () {
      return {
        data:{
          msg:'msg',
          list:[
            {title:'愿你慢慢长大',author:'理想国度',type:'文学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/1',id:'1'},
            {title:'你的坚持，终将美好',author:'阿笨',type:'设计',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/2',id:'2'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../../assets/img/banner.png'),hash:'/article/3',id:'3'}
          ]
        }
      }
    },
    methods:{
      getData:function(){
        var that = this;//用that存this，到ajax的success里面this指向变了
        $.ajax({
          url:'/pageList',
          type:'GET',
          async:true,
          success:function(d){
            that.data.list = d.data.list;
          }
        })
      },
      gotoArticle (x) {
        this.$router.push({path:x});
      },
      modalShow (i,text,state) {
        this.parentModal.bookObj = i;
        this.parentModal.show = true;
        this.parentModal.content = text;
        this.parentModal.state = state;
      },
    },
    created () {
//      this.getData();
    }
  }
</script>
