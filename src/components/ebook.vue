<template>
  <transition>
    <div class="all">
      <my_nav :parentData="nav" ></my_nav>

      <div class="card_box">
        <div v-for="i in list" :style="{backgroundColor:i.bg}">
          <router-link :to=" '/ebooklist/'+i.id "><img :src="host+i.image" @error="setImg"/></router-link>
        </div>
      </div>
      <eb_tab :ebooktab="ebooktab"></eb_tab>
    </div>
  </transition>
</template>
<script>
  import nav from '@/components/littlecomp/nav'
  import ebtab from '@/components/ebook/ebooktab'
  import jsonp from '@/assets/js/jsonp'
  import IF from '@/assets/js/interface'

  export default({
    name:'ebook',
    data(){
      return{
        list:[
          {pic:require('../assets/img/ebook/zaojiao.png')},
          {pic:require('../assets/img/ebook/youjiao.png')},
          {pic:require('../assets/img/ebook/xueshengyuedu.png')},
          {pic:require('../assets/img/ebook/wenxue.png')},
          {pic:require('../assets/img/ebook/shenghuobaike.png')},
          {pic:require('../assets/img/ebook/pengrenmeishi.png')},
          {pic:require('../assets/img/ebook/lizhi.png')},
          {pic:require('../assets/img/ebook/baike.png')},
        ],
        host:'http://120.76.144.50',
        nav:{
          list:[
            {title:'图书馆',hash:'/page/1/library',cur:true},
            {title:'电子图书',hash:'/ebook'}///page/1/ebook
          ]
        },
        ebooktab:[
          {
            to:'/ebook',
            tit:'图书',
            cur:true
          },
          {
            to:'/video',
            tit:'视频',
          }
        ]
      }
    },
    methods:{
      setImg(el){
        let defaultPic = require('../assets/img/ebook/error.png')
        el.target.src = defaultPic
      }
    },
    created(){
      let vm = this
      jsonp.get(IF.getEbookCategory,null,function(d){
        vm.list = d.data
        console.log(d)
      })
    },
    components:{
      eb_tab:ebtab,
      my_nav:nav
    }
  })
</script>
<style scoped>
  .card_box{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:space-around;background:#fff;}
  .card_box>div{width:48%;text-align:center;margin:0.25rem 1%;font-size:0.9rem;}
  .card_box>div a{color:#fff;}
  .card_box>div a img{width:100%;display:block;}
</style>
