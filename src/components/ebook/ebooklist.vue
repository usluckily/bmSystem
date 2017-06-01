<template>
  <div class="all">
    <div class="classify" v-if="classify.show">
      <ul>
        <li v-for="i in classify.list">{{ i }}</li>
      </ul>
    </div>
    <!--classify-->

    <!--<div class="tab" @click="classify.show = !classify.show">-->
      <!--<div :class="classify.show ? 'cur' : ''">分类</div>-->
    <!--</div>-->

    <div class="ebook_list">
      <ul>
        <li v-for="i in listData.list">
          <div class="box" @click="jump(i.id)">
            <img :src="i.cover"/>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import bookslist from '@/components/littlecomp/bookslist'
  import jsonp from '@/assets/js/jsonp'
  import IF from '@/assets/js/interface'

  export default({
    name:'ebooklist',
    data(){
      return {
        listData:{
          list:[

          ]
        },
        classify:{
          list:['分类一','分类二','分类三'],
          show:false
        },
        loadingStatus:0
      }
    },
    created(){
      let vm = this
//      this.$root.eventHub.$on('test-msg',function(x){
//
//      })
    jsonp.get(IF.getEbookList,this.$route.params.id,function(d){
      vm.listData.list = d.data
      vm.listData.list.push({
        cover:require('../../assets/img/2.jpg')
      })
    })

    },
    methods:{
      jump(id){
        this.$router.push({path:'/pageturn',query:{id:id}})
      }
    },
    components:{
      books_list:bookslist
    }
  })
</script>
<style scoped>
  .ebook_list{width:100%;}
  .ebook_list>ul{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start}
  .ebook_list>ul>li{width:33.33%;overflow:hidden;}
  .ebook_list>ul>li .box{width:100%;height:100%;padding:0.25rem;}
  .ebook_list>ul>li .box img{width:100%;border:1px solid #333;}
  .tab{width:100%;height:3rem;background:#fff;line-height:3rem;}
  .tab>div{width:50%;height:100%;text-align:center;background:url('../../assets/img/arrows2.png') no-repeat scroll right center;}
  .tab>.cur{border-bottom:2px solid #FD7014}
  .classify{width:100%;position:absolute;top:3rem;}
  .classify>ul{width:100%;}
  .classify>ul>li{width:100%;line-height:3rem;background:#fff;border-top:1px solid #eee;text-indent:2rem;}
</style>
