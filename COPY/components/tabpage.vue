<template>
  <transition name="page">
    <div class="all">
      <my_tab :parentData="tab"></my_tab>
    </div>
  </transition>
</template>
<script>
  import tab from '@/components/littlecomp/tab'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'tabpage',
    data () {
      return {
        tab:this.$store.state.tab || {list:[]}
      }
    },
    components:{
      my_tab:tab
    },
    created () {
      console.log('xxxx');
      console.log(JSON.stringify(this.$store.state.tab));
      if(this.$store.state.tab.list == ''){
        let _this = this , BP = _this.$store.state.BP;
        BS.getData(IF.getBookKind,'GET',{},true,null,function(d){
          _this.tab.list = d.data;
          _this.$store.state.tab.list = d.data;
        });
      }
    }
  }
</script>
<style scoped>
  .all{z-index:4;background:#fff;}
</style>
