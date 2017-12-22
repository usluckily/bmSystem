<template>
  <transition name="">
    <div class="scroll-wrapper">
      <iframe src="http://xld.xiaobenxiong.net/XBXWeiXinBookVideo/index.html" name="testIframe" id="testIframe">

      </iframe>
    </div>
  </transition>
</template>
<script>
  //http://www.360guoxue.com:8080/youshengguan/index.php?s=/Home/Index/index.html&id=10
  //http://xld.xiaobenxiong.net/XBXWeiXinBookVideo/index.html
  import $ from 'jquery'

  export default{
    name:'outlinks',
    data () {
      return {

      }
    },
    mounted () {
      let ah = $(window).height();
      let navh = $('.nav').outerHeight();
      let fooh = $('.footer').outerHeight();
      $('.scroll-wrapper').height(ah - navh - fooh);
    }
  }
</script>
<style scoped>
  .scroll-wrapper{position:absolute;width:100%;-webkit-overflow-scrolling: touch;overflow-y: scroll; }
  #testIframe{width:100%;border:none;height:100%;z-index:0; }
</style>
