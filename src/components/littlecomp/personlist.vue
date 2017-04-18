<template>
  <transition name="page">
    <ul class="personlist">
      <li class="my" @click="setHash('/personhomepage/'+data.my.id)">
        <div class="l">
          <!--ranking-->
          <div class="la" v-if="data.my.ranking == '1'"><img src="../../assets/img/first.png"/></div>
          <div class="la" v-else-if="data.my.ranking == '2'"><img src="../../assets/img/second.png"/></div>
          <div class="la" v-else-if="data.my.ranking == '3'"><img src="../../assets/img/third.png"/></div>
          <div class="la" v-else>{{ data.my.ranking }}</div>
          <!--ranking-->
          <div class="lb">
            <div class="touguan">
              <img src="../../assets/img/yddr-huangguan.png" v-if="data.my.ranking == '1'"/>
              <img src="../../assets/img/yddr-yinguan.png" v-if="data.my.ranking == '2'"/>
              <img src="../../assets/img/yddr-tongguan.png" v-if="data.my.ranking == '3'"/>
            </div>
            <img :src="data.my.headPic" class="headPic"/>
          </div>
          <div class="lc">
            <h4>{{ data.my.Real_Name }}</h4>
            <p>{{ data.my.Class_Name }}</p>
          </div>
        </div>
        <div class="c">

        </div>
        <div class="r">
          <div class="ra">
            <div class="c_yellow">借读{{ data.my.num }}次</div>
          </div>
          <div class="rb">
            <div>{{ data.my.likes }}</div>
            <div><img :src="data.my.likes > 0 ? require('../../assets/img/yuedudaren_like2.png') : require('../../assets/img/yuedudaren_like1.png')"/></div>
          </div>
        </div>
      </li>
      <!--my-->

      <li v-for="(i,index) in data.list" @click="setHash('/drsbooks/'+i.id)">
        <div class="l">
          <!--ranking-->
          <div class="la" v-if="i.ranking == '1'"><img src="../../assets/img/first.png"/></div>
          <div class="la" v-else-if="i.ranking == '2'"><img src="../../assets/img/second.png"/></div>
          <div class="la" v-else-if="i.ranking == '3'"><img src="../../assets/img/third.png"/></div>
          <div class="la" v-else>{{ i.ranking }}</div>
          <!--ranking-->
          <div class="lb">
            <div class="touguan">
              <img src="../../assets/img/yddr-huangguan.png" v-if="i.ranking == '1'"/>
              <img src="../../assets/img/yddr-yinguan.png" v-if="i.ranking == '2'"/>
              <img src="../../assets/img/yddr-tongguan.png" v-if="i.ranking == '3'"/>
            </div>
            <img :src="i.headPic" class="headPic"/>
          </div>
          <div class="lc">
            <h4 style="color:#ff3434;">{{ i.Real_Name }}</h4>
            <p>{{ i.Class_Name }}</p>
          </div>
        </div>
        <div class="c">

        </div>
        <div class="r">
          <div class="ra">
            <div class="c_red">借读{{ i.num }}次</div>
          </div>
          <div class="rb">
            <div>{{ i.likes }}</div>
            <div><img :src="i.likes > 0 ? require('../../assets/img/yuedudaren_like2.png') : require('../../assets/img/yuedudaren_like1.png')" @click="likes($event,i,data.my)"/></div>
          </div>
        </div>
      </li>
    </ul>
  </transition>

</template>
<script>
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'personlist',
    props:['parentData'],
    data () {
      return {
//        my:this.parentMy|| '',
//        list:this.parentList || ''
        data:this.parentData
      }
    },
    methods:{
      setHash (x) {
        this.$router.push({path:x});
      },
      likes (e,i,my) {
        if(e)e.stopPropagation();
        let userId = i.id , myUserId = my.id;
        BS.getData(IF.userLikes,'POST',{userId:userId,myUserId:myUserId},true,null,function(d){
          //i.likes = 1000
          if(d.likes)i.likes = d.likes;
        });
      }
    }
  }
</script>
<style scoped>
  .personlist{background:#fff;}
  .personlist li{display:flex;display: -webkit-flex;width:100%;justify-content:space-between;align-items:center;text-align:center;padding:1rem 0;border-bottom:1px solid #eee;}
  .l{width:11rem;display:flex;display: -webkit-flex;justify-content:space-between;align-items:center;text-align:center;}
  .l>*{text-align:center;}
  .c{}
  .r{width:9rem;display:flex;display: -webkit-flex;justify-content:space-between;align-items:center;text-align:center;}
  .r>*{text-align:center;font-size:0.8rem;}

  .la{width:3rem;font-size:0.8rem;}
  .la img{width:1.3rem;}
  .lb{width:3rem;height:3rem;border-radius:50%;position:relative;}
  .lb .touguan{position:absolute;width:100%;top:-0.7rem;z-index:2;padding:0 0.4rem;}
  .lb .touguan img{width:100%;}
  .lb img{width:100%;display:block;}
  .lb .headPic{border-radius: 50%;}
  .lc{width:5rem;line-height: 1.4rem;}
  .lc h4{font-size:0.85rem;}
  .lc p{font-size:0.7rem;color:#999;}

  .ra{width:6rem;color:#ff3434;font-size:0.85rem;text-align:right;}
  .rb{width:3rem;}
  .rb > div{margin:0.5rem 0;}
  .rb:nth-child(2) img{width:1.2rem;}

  .my{border-bottom:0.3rem solid #f0f0f0 !important;}


</style>
