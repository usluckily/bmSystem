<template>
  <div class="loading-box">
    <div class="loading-bar" :style="{left:leftchanged}"  :data-left="leftchanged"></div>
    <p>{{ leftchanged }}</p>
  </div>
</template>
<script>
  export default({
    name:'loadingbar',
    props:{
      progress:{
        type:Number,
        default:0
      },
      start:{
        type:Boolean,
        default:false
      },
      end:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{

      }
    },
    created(){
      this.$root.eventHub.$on('loading',function(x){
        if(typeof x == 'function'){
          x()
        }
      })
    },
    mounted(){

    },
    beforeDestroy(){
      let vm = this
      vm.$root.eventHub.$off('loading')
    },
    computed:{
      leftchanged(){
        let _this = this
        if(_this.start || _this.end){
          return (_this.start ? _this.end ? '0' : '-70%' : '-70%')
        }else{
          return -100+parseInt(_this.progress)+'%'
        }
      },
      test(){

      }
    }
  })
</script>
<style>
  .loading-box{width:90%;margin:0 auto;height:1rem;position:relative;overflow:hidden;border-radius:0.5rem;}
  .loading-bar{width:100%;position:relative;height:100%;background:#67D22D;left:-100%;transition:left 1s ease}
</style>
