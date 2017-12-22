<template>
  <div style="margin-bottom:3.5rem;" class="all">
    <my_nav :parentData="nav" ></my_nav>

    <div class="full-video-box">
      <video :src="data.header" controls v-cloak></video>
    </div>

    <div class="normal-list">

      <h4 class="module-tit">视频分类</h4>

      <router-link :to=" '/videoCategory/'+i.id " v-for="i in data.center" tag="div" :key="i.id" v-cloak>
        <img :src="host+i.image"/>
       <p>{{ i.name }}</p>
      </router-link>
    </div>

    <div class="category-list">

      <h4 class="module-tit">教育资源</h4>

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

      <div class="items" v-for="i in data.footer">
        <p class="items-tit">{{ i.category.name }} <span>更多></span> </p>
        <div class="lists-list">
          <div v-for="j in i.video">
            <img :src="host+j.vediocover"/>
            <p>{{ j.vedioname }}</p>
          </div>
        </div>
      </div>
    </div>

    <eb_tab :ebooktab="ebooktab"></eb_tab>
  </div>
</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import ebtab from '@/components/ebook/ebooktab'
  import jsonp from '@/assets/js/jsonp'
  import IF from '@/assets/js/interface'

    export default({
      name: 'xx',
      data(){
        return {
          data:{
            header:'',
            center:[],
            footer:[]
          },
          host:'http://120.76.144.50',
          nav:{
            list:[
              {title:'图书馆',hash:'/page/1/library'},
              {title:'电子图书',hash:'/ebook',cur:true}///page/1/ebook
            ]
          },
          ebooktab:[
            {
              to:'/ebook',
              tit:'图书'
            },
            {
              to:'/video',
              tit:'视频',
              cur:true
            }
          ]
        }
      },
      created(){
        let vm = this
        jsonp.get(IF.getVideo,null,function(d){
          vm.data.header = d.data.header
          vm.data.center = d.data.center
          vm.data.footer = d.data.footer
        })
      },
      components:{
        eb_tab:ebtab,
        my_nav:nav
      }
    })
</script>
<style>

</style>
