<template>
  <div class="tab">
    <ul class="clearfix">
      <li v-for="(i,index) in filteredlist" @click="setHash('/bookclassify/'+i.book_Kind_Code)">
        <div class="tab_img_box">
          <img :src="i.pic || require('../../assets/img/tabicon/icon'+(index>6? 1 : index)+'.png')"/>
        </div>
        <span>{{ i.book_Kind_Name }}</span>
      </li>

      <li v-if="tab.list.length > 7 && filteredcut == true" @click="setHash('/tabpage/')" >
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
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default {
    name:'tab',
    props:['parentData'],
    data () {
      return {
        tab:this.parentData,
        cut:true
      }
    },
    methods:{
      setHash (x) {
        this.$router.push({path:x});
      }
    },
    computed:{
      filteredcut () {
        this.cut = this.$route.path == '/page/1';
        return this.$route.path == '/page/1'
      },
      filteredlist () {
        return (this.cut ?　this.tab.list.slice(0,7) : this.tab.list);
      },
      getData () {
        let _this = this , BP = _this.$store.state.BP;
        BS.getData(IF.getBookKind,'GET',{},true,null,function(d){
          _this.list = d.data
        });
      }
    },
    created () {
//      this.list = this.parentData.list;
    }
  }
</script>
<style scoped>
  .tab{width:100%;padding-top:0.5rem;background:#fff;}
  .tab ul{display:flex;flex-wrap:wrap;justify-content:flex-start;}
  .tab ul li{width:25%;text-align:center;margin-top: 0.5rem;padding: 0.5rem 0;}
  .tab ul li .tab_img_box{width:2.5rem;margin:0 auto;}
  .tab_img_box img{width:100%;display:block;}
  .tab ul li span{font-size:0.7rem;color:#666;line-height:1.2rem;overflow: hidden;display:block;text-overflow: ellipsis;white-space: nowrap;}
</style>
