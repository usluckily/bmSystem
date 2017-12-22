<template>
  <div class="all" :style="classify.show ? styleObj : '' ">
    <div class="classify" v-show="classify.show">
      <ul>
        <li v-for="i in classify.list" @click="search(i.id)">{{ i.name }}</li>
      </ul>
    </div>
    <!--classify-->

    <div class="tab" @click="classify.show = !classify.show">
      <div :class="classify.show ? 'cur' : ''">分类</div>
    </div>

    <div class="ebook_list" >
      <ul>
        <li v-for="i in listData.list">
          <div class="box" @click="jump(i.id)">
            <img :src="host+i.cover" @error="setImg"/>
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
  import sl from '@/assets/js/scrollload'

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
        loadingStatus:0,
        host:'http://120.76.144.50',
        getListCid:'',
        pageEnd:false,
        styleObj:{
          overflow:'hidden'
        }
      }
    },
    created(){
      let vm = this
//      this.$root.eventHub.$on('test-msg',function(x){
//
//      })

      jsonp.get(IF.getEbookCategory,{cid:this.$route.params.id},function(d){
        vm.classify.list = d.data
        vm.getListCid = d.data[0].id


        jsonp.get(IF.getEbookList,{cid:vm.getListCid},function(d){
          vm.listData.list = d.data

          d.data.length < 20 ? vm.pageEnd = false : vm.pageEnd = true

        })

      })

    },
    mounted(){
      let vm = this
      sl.init('.all',['.tab','.ebook_list'],function(){
        console.log('alllen:'+vm.listData.list.length)
//        let pagenum = Math.ceil(vm.listData.list.length/20)
        let offset =  vm.listData.list.length , limit = vm.listData.list.length + 20;
        console.log('offset:'+offset+','+'limit:'+limit)
        if(vm.pageEnd == true){
          jsonp.get(IF.getEbookList,{cid:vm.getListCid,offset:offset,limit:20},function(d){
            vm.listData.list = vm.listData.list.concat(d.data)

            d.data.length < 20 ? vm.pageEnd = false : vm.pageEnd = true

          })
        }
      })
    },
    methods:{
      jump(id){
        this.$router.push({path:'/pageturn',query:{id:id}})
      },
      setImg(el){
        let defaultPic = require('../../assets/img/ebook/error.png')
        el.target.src = defaultPic
      },
      search(x){
        let vm = this
        jsonp.get(IF.getEbookList,{cid:x},function(d){
          vm.listData.list = d.data

          vm.getListCid = x

          d.data.length < 20 ? vm.pageEnd = false : vm.pageEnd = true

        })
        vm.classify.show = !vm.classify.show
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
  .ebook_list>ul>li .box{width:100%;height:9rem;padding:0.25rem;}
  .ebook_list>ul>li .box img{width:100%;height:100%;border:1px solid #333;}
  .tab{width:100%;height:3rem;background:#fff;line-height:3rem;position:relative;z-index:2;}
  .tab>div{width:50%;height:100%;text-align:center;background:url('../../assets/img/arrows2.png') no-repeat scroll right center;}
  .tab>.cur{border-bottom:2px solid #FD7014}
  .classify{width:100%;height:100%;position:absolute;padding-top:3rem;overflow:auto;z-index:999;}
  .classify>ul{width:100%;}
  .classify>ul>li{width:100%;line-height:3rem;background:#fff;border-top:1px solid #eee;text-indent:2rem;}
</style>
