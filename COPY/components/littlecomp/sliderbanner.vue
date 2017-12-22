<template>
  <div class="banner bannerSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/img/banner.png"/>
      </div>

      <div class="swiper-slide">
        <img src="../../assets/img/banner.png"/>
      </div>
    </div>
    <div class="pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import $ from 'jquery'

  export default{
    name:'slider',
    methods:{
      slider:function(){
        $(function(){
          var mySwiper = new Swiper('.bannerSwiper',{
            loop: false,
            pagination : '.pagination',
            freeMode:false,
            speed:300
          });
        });
      }
    },
    created () {
      this.slider();
    }
  }
</script>
