<template>
  <div class="ebook-tab">
    <router-link :to="i.to" tag="div" v-for="i in this.ebooktab" :key="i.to" :class="i.cur ? 'cur' : ''">{{ i.tit }}</router-link>
  </div>
</template>
<script>
    export default({
      name: 'ebooktab',
      props:['ebooktab'],
      data(){
        return {

        }
      }
    })
</script>
<style>
  .ebook-tab{width:100%;padding:0.5rem;display:flex;position:fixed;bottom:0;z-index:102;background:#fff;}
  .ebook-tab>div{width:50%;justify-content:center;text-align:center}
  .ebook-tab .cur{color:#78c2c4}
</style>
