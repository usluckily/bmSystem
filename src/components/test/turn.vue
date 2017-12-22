<template>
  <div class="all">
    Let's code
    <div id="flipbook">
      <div > Page 1 <img src="./1.png"/></div>
      <div > Page 2 <img src="./1.png"/></div>
      <div > Page 3 <img src="./1.png"/></div>
      <div > Page 4 <img src="./1.png"/></div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'

  require('./turn2')

    export default({
        name: 'testturn',
        data(){
            return {}
        },
      mounted(){
        $("#flipbook").turn({
          width: '300px',
          height: '500px',
          display: 'single',
          elevation: 50,
          gradients: true,
          autoCenter: true
        });
      }
    })
</script>
<style>
  #flipbook .page{background:#fff;}
</style>
