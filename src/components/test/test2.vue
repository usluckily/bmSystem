<template>
  <div>
    <p>test2:{{ msgChanged }}</p>
  </div>
</template>
<script>
    export default({
        name: 'test2',
        data(){
            return {
              msg:''
            }
        },
      computed:{
          msgChanged(){
            return this.msg
          }
      },
      created(){
        let vm = this
        vm.$root.eventHub.$on('test-msg',function(x){
          alert(x);
          vm.msg = x
        })
      },
      beforeDestroy(){
        let vm = this
        vm.$root.eventHub.$off('test-msg')
      }
    })
</script>
<style>

</style>
