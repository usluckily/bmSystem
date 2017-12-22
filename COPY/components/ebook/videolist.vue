<template>
  <div class="all">
    <div class="category-list">
      <div class="items">
        <p class="items-tit large">{{ listData.name }}</p>
        <div class="lists-list">
          <div v-for="i in listData.list"  @click="jump(i)">
            <img :src="host + i.vediocover"/>
            <p>{{ i.vedioname }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import jsonp from '@/assets/js/jsonp'
  import IF from '@/assets/js/interface'

    export default({
      name: 'xx',
      data(){
        return {
          listData:{
            name:this.$route.query.name,
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
        jsonp.get(IF.getVideoList,{cid:this.$route.params.id},function(d){
          vm.listData.list = d.data
        })
      }
    })
</script>
<style>

</style>
