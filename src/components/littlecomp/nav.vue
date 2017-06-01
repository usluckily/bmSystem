<template>
  <div class="nav">
    <ul id="scr_nav" class="swiper-wrapper tabs">
      <li class="swiper-slide" v-for="(i,index) in this.parentData.list" :id="index == cur ? 'navCur' : ''" @click="setHash(i.hash)"><span>{{ i.title }}</span></li>
      <!--<li data-index="1" class="on swiper-slide" id="navCur"><span>图书馆</span></li>-->
      <!--<li data-index="2" class="swiper-slide"><span>电子图书</span></li>-->
    </ul>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import $ from 'jquery'

  export default {
    name:'nav',
    props:['parentData'],
    data () {
      return {
        cur:this.$route.query.cur || 0
      }
    },
    methods:{
      slider:function(){
        $(function(){
          var navSwiper = new Swiper(".nav",{
            freeMode : true,
            slidesPerView : 'auto'
          });
          $('.nav ul li').click(function(){
//            var index = $(this).index();
            $(this).attr('id','navCur').siblings().removeAttr('id');
          });
        })
      },
      setHash (x) {
        if(x == '/outlinks/'){
          this.$router.push({path:x});
        }else{
          this.$router.replace({path:x});
        }

      }
    },
    created () {
      //delete before
      if(this.$route.path.indexOf('ebook') != -1){
        this.cur = 1;
      }
      //
    },
    beforeMount () {
      this.slider();
    },
    watch:{
      '$route':function(to,from) {
        console.log(this.$route);
        this.cur = this.$route.query.cur || 0;
      }
    }
  }
</script>
