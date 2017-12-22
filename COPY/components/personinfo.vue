<template>
  <transition name="page">
    <div class="all">
      <ul class="info_list">
        <li>
          <span class="l">头像</span>
          <span class="r"><img src="../assets/img/banner.png"/></span>
        </li>
        <li>
          <span class="l">昵称</span>
          <span class="r">{{ userInfo.Real_Name }} </span>
        </li>
        <li>
          <span class="l">班级</span>
          <span class="r">{{ userInfo.className }}</span>
        </li>
        <li>
          <span class="l">IC卡号</span>
          <span class="r">{{ userInfo.Ic_Number }}</span>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
  export default{
    name:'personinfo',
    data () {
      return {
        userInfo:this.$store.state.BP,
        xxx:'asd'
      }
    },
    created () {
//      alert(JSON.stringify(this.$store.state.BP));
    }
  }
</script>
<style>
  .info_list{width:100%;background:#fff;}
  .info_list li{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid #eee;}
  .info_list li .l{}
  .info_list li .r{font-size:0.8rem;color:#666;padding-right:1.5rem;background:url('../assets/img/arrows2.png')no-repeat scroll right center;background-size:1.2rem 1.2rem}
  .info_list li .r img{width:3rem;height:3rem;}
</style>
