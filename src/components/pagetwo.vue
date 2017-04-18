<template>
  <transition name="page">
    <div id="page2">
      <div class="banner">
        <router-link to="/yddr/school">
          <img src="../assets/img/page2_banner.png"/>
        </router-link>
      </div>

      <div class="content">
        <ul class="pageList">

            <li>
              <router-link to="/yddr/school?cur=0">
              <img src="../assets/img/page2_icon1.png"/>
              <div class="list_con">
                <h4>阅读达人</h4>
                <p>近期显示个人的全校排行榜</p>
              </div>
              </router-link>
            </li>

          <li>
            <router-link to="/statistics/school?cur=0">
            <img src="../assets/img/page2_icon2.png"/>
            <div class="list_con">
              <h4>统计分析</h4>
              <p>显示全校近期的图书浏览总量排行榜</p>
            </div>
            </router-link>
          </li>

          <li>
            <router-link to="/favorite/">
              <img src="../assets/img/page2_icon3.png"/>
              <div class="list_con">
                <h4>猜你喜欢</h4>
                <p>根据你的图书浏览量的类型推荐</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </transition>
</template>
<script>
  import banner from '@/components/littlecomp/sliderbanner'
  import cardOne from '@/components/littlecomp/cardone'

  export default{
    name:'pagetwo',
    props:['show'],
    data () {
      return {

      }
    },
    components:{
      my_banner:banner,
      my_cardOne:cardOne,
    },
    created () {
//      alert('pageTwo:'+JSON.stringify(this.$store.state.iosParams));
    }
  }
</script>
