<template>
  <div class="tab">
    <ul class="clearfix">
      <li v-for="i in filteredlist" @click="setHash('/bookclassify/'+i.id)">
        <div class="tab_img_box">
          <img :src="i.pic"/>
        </div>
        <span>{{ i.name }}</span>
      </li>

      <li v-if="list.length > 7 && filteredcut == true" @click="setHash('/tabpage/')" >
        <div class="tab_img_box">
          <img src="../../assets/img/tabicon/more.png"/>
        </div>
        <span>更多</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    name:'tab',
    data () {
      return {
        list:[
          {name:'生活百科',pic:require('../../assets/img/tabicon/shenghuo.png'),hash:'/bookList/type/shbk',id:'1'},
          {name:'教育培训',pic:require('../../assets/img/tabicon/jiaoyu.png'),hash:'/bookList/type/jypx',id:'1'},
          {name:'历史宗教',pic:require('../../assets/img/tabicon/zhongjiao.png'),hash:'/bookList/type/lszj',id:'1'},
          {name:'非遗文化',pic:require('../../assets/img/tabicon/feiyi.png'),hash:'/bookList/type/fywh',id:'1'},
          {name:'语言学习',pic:require('../../assets/img/tabicon/yuyan.png'),hash:'/bookList/type/yyxx',id:'1'},

          {name:'生活百科',pic:require('../../assets/img/tabicon/shenghuo.png'),hash:'/bookList/type/shbk',id:'1'},
          {name:'教育培训',pic:require('../../assets/img/tabicon/jiaoyu.png'),hash:'/bookList/type/jypx',id:'1'},
          {name:'历史宗教',pic:require('../../assets/img/tabicon/zhongjiao.png'),hash:'/bookList/type/lszj',id:'1'},
          {name:'非遗文化',pic:require('../../assets/img/tabicon/feiyi.png'),hash:'/bookList/type/fywh',id:'1'},
          {name:'语言学习',pic:require('../../assets/img/tabicon/yuyan.png'),hash:'/bookList/type/yyxx',id:'1'},
        ],
        cut:true
      }
    },
    methods:{
      setHash (x) {
        this.$router.push({path:x});
      }
    },
    computed:{
      filteredlist () {
        return (this.cut ?　this.list.slice(0,7) : this.list);
      },
      filteredcut () {
        this.cut = this.$route.path == '/page/1';
        return this.$route.path == '/page/1'
      }
    },
    created () {

    }
  }
</script>
<style scoped>
  .tab{width:100%;padding-top:0.5rem;background:#fff;}
  .tab ul{display:flex;flex-wrap:wrap;justify-content:flex-start;}
  .tab ul li{width:25%;text-align:center;margin-top: 0.5rem;padding: 0.5rem 0;}
  .tab ul li .tab_img_box{width:2.5rem;margin:0 auto;}
  .tab_img_box img{width:100%;display:block;}
  .tab ul li span{font-size:0.7rem;color:#666;line-height:1.2rem;}
</style>
