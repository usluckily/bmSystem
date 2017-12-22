<template>
  <div class="card_box">
    <div class="card card2" v-for="i in data.list"  v-cloak>
      <div class="card_tit">- 阅读 -</div>

      <div class="in_card_box clearfix" >
        <div class="in_card_tit">阿斯顿传记</div>
        <div class="in_card_sub_tit">
          <p>文学 / 阿斯顿 著</p>
        </div>
        <div class="big_img_box">
          <img src="../../assets/img/banner.png"/>
        </div>
        <div class="some_text">
          阿斯顿发生，看见啥地方规划的刷卡费。的反光镜和
        </div>
      </div>

      <div class="card_foo clearfix">
        <div class="l">7小时前</div>
        <div class="r">
          <span>74</span><!--
       --><span>x</span><!--
       --><span>加入书架</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default{
    name:'cardtwo',
    data () {
      return {
        data:{
          msg:'msg',
          list:[
            {location:'啊实打实大',pic:require('../../assets/img/banner.png'),hash:'/article/1',id:'1'},
            {location:'啊实打实大',pic:require('../../assets/img/banner.png'),hash:'/article/2',id:'2'},
            {location:'啊实打实大',pic:require('../../assets/img/banner.png'),hash:'/article/3',id:'3'},
            {location:'啊实打实大',pic:require('../../assets/img/banner.png'),hash:'/article/4',id:'4'},
            {location:'啊实打实大',pic:require('../../assets/img/banner.png'),hash:'/article/5',id:'5'},
          ]
        }
      }
    },
    methods:{

    },
    components:{

    }
  }
</script>
