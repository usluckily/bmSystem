<template>
  <div>
    <input v-model="msg"/>
    <button @click="send(msg)">click</button>
  </div>
</template>
<script>
  export default({
    name:'test1',
    data(){
      return{
        msg:'aasd'
      }
    },
    methods:{
      send(x){
        this.$root.eventHub.$emit('test-msg',this.msg)
      }
    },
    created(){

    }
  })
</script>
<style>

</style>
