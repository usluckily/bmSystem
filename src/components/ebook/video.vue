<template>
  <div style="margin-bottom:3.5rem;">
    <div class="full-video-box">
      <video :src="data.header" controls ></video>
    </div>

    <div class="normal-list">
      <router-link :to=" '/secondVideoCategory'+i.id " v-for="i in data.center" tag="div">
        <img :src="'http://'+i.image"/>
       <p>{{ i.name }}</p>
      </router-link>
    </div>

    <div></div>

    <eb_tab></eb_tab>
  </div>
</template>
<script>
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
          }
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
        eb_tab:ebtab
      }
    })
</script>
<style>
  .full-video-bo{width:100%;}
  .full-video-box>video{width:100%;}
  .normal-list{width:100%;display:flex;flex-wrap:wrap}
  .normal-list>div{width:25%;text-align:center;}
  .normal-list>div>img{width:95%}
  .normal-list>div>p{width:100%;font-size:0.8rem;line-height:1.5rem;}
</style>
