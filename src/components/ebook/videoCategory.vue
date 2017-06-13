<template>
  <div class="all">
    <div class="category-list">

      <div class="items" v-for="i in listData.list">
        <p class="items-tit large" style="padding-bottom:0.5rem;border-bottom: 1px solid #ccc">{{ i.category.name }}<router-link tag="span" :to=" '/videolist/'+i.category.id+'?name='+i.category.name ">更多></router-link> </p>
        <div class="lists-list">
          <div v-for="j in i.video"  @click="jump(j)">
            <img :src="host + j.vediocover"/>
            <p>{{ j.vedioname }}</p>
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
          listData:{
            list:[]
          },
          host:'http://120.76.144.50',
        }
      },
      methods:{
        jump(x){
          this.$router.push({name:'videoplay',params:{id:x}})
        }
      },
      created(){
        let vm = this
        jsonp.get(IF.getVideoCategory,{cid:this.$route.params.id},function(d){
          vm.listData.list = d.data
        })
      }
    })
</script>
<style scoped>
  .items{border-bottom:1px solid #e3e3e3}
  .category-list{background:#fff;}
</style>
