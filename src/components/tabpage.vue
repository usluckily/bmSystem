<template>
  <transition name="page">
    <div class="all">
      <my_tab></my_tab>
    </div>
  </transition>
</template>
<script>
  import tab from '@/components/littlecomp/tab'
  export default{
    name:'tabpage',
    data () {
      return {

      }
    },
    components:{
      my_tab:tab
    }
  }
</script>
<style scoped>
  .all{z-index:4;background:#fff;}
</style>
