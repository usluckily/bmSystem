<template>
  <div class="all">
    <div class="flex-box" style="background:#CAF0FD;">
      <div class="video-box">
        <h4>{{ obj.vedioname }}</h4>
        <video controls :src="host+obj.vediourl" ></video>
      </div>
    </div>
  </div>
</template>
<script>
    export default({
      name: 'videoplay',
      data(){
        return {
          obj:this.$route.params.id,
          host:'http://120.76.144.50',
          test:'http://www.xiaobenxiong.net/BookFile/GameApk/NewVideo/video/wanshangtingdianwobupa.mp4'
        }
      },
      methods:{
        test(){
          alert('xxx')
        }
      },
      created(){
        console.log(this.$route)
      }
    })
</script>
<style>
.video-box{width:100%;margin-top:-4rem;box-shadow: 0 0 15px #333333;}
.video-box>h4{width:100%;padding:0.5rem 0;text-align: center;background:linear-gradient(#F2F2F2,#DEDFE1);color:#7a7f82;font-size:0.8rem;}
.video-box video{width:100%;display:block;}
</style>
