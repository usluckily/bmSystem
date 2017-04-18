<template>
  <transition name="page">
    <div id="page3">
      <div class="per-info-box">
        <div class="img_box">
          <router-link to="/personinfo/">
            <img src="../assets/img/banner.png"/>
          </router-link>
        </div>
        <h4>阿斯顿</h4>
        <p>借书证号：123456789</p>
      </div>

      <div class="content">
        <ul class="pageList">
          <li>
            <router-link to="/myborrow/">
              <p class="txt">借阅排名</p>
            </router-link>
          </li>
          <li>
            <router-link to="/myborrowdetails/">
              <p class="txt">借读详情</p>
            </router-link>
          </li>
          <li>
            <router-link to="/mycollect/">
              <p class="txt">收藏夹</p>
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
  import nav from '@/components/littlecomp/nav'

  export default{
    name:'pagethree',
    props:['show'],
    data () {
      return {

      }
    },
    components:{
      my_nav:nav,
      my_banner:banner,
      my_cardOne:cardOne,
    }
  }
</script>
