<template>
  <div class="ebook-tab">
    <router-link to="/page/1/ebook" tag="div">图书</router-link>
    <router-link to="/page/1/ebook/video" tag="div">视频</router-link>
  </div>
</template>
<script>
    export default({
      name: 'ebooktab',
      data(){
        return {}
      }
    })
</script>
<style>
  .ebook-tab{width:100%;padding:0.5rem;display:flex;}
  .ebook-tab>div{width:50%;justify-content:center;text-align:center}
</style>
