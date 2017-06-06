<template>
  <div class="all">
    <div class="category-list">
      <div class="items">
        <p class="items-tit">啊实打实大<span>更多></span> </p>
        <div class="lists-list">
          <div>
            <img src="http://www.xiaobenxiong.net/BookFile/GameApk/NewVideo/pic/teluoyiyizhiyounaxielingrenzhenjingdefaxian.jpg"/>
            <p>方法是</p>
          </div>

          <div>
            <img src="http://www.xiaobenxiong.net/BookFile/GameApk/NewVideo/pic/teluoyiyizhiyounaxielingrenzhenjingdefaxian.jpg"/>
            <p>方法是</p>
          </div>
        </div>
      </div>

      <!--<div class="items" v-for="i in data.footer">-->
        <!--<p class="items-tit">{{ i.category.name }} <span>更多></span> </p>-->
        <!--<div class="lists-list">-->
          <!--<div v-for="j in i.video">-->
            <!--<img :src="host+j.vediocover"/>-->
            <!--<p>{{ j.vedioname }}</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  import jsonp from '@/assets/js/jsonp'
  import IF from '@/assets/js/interface'

    export default({
      name: 'videoCategory',
      data(){
        return {
          data:{

          },
          host:'http://120.76.144.50',
        }
      },
      created(){
        jsonp.get(IF.getVideoCategory,this.$route.params.id,function(d){

        })
      }
    })
</script>
<style>

</style>
