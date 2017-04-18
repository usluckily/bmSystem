<template>
  <transition name="page">
    <div class="all">
      <div class="content">
        <books_list :listState="state" :listData="listData" ></books_list>
      </div>
    </div>
  </transition>
</template>
<script>
  import bookslist from '@/components/littlecomp/bookslist'
  import IF from '@/assets/js/interface'
  import {BS} from '@/assets/js/base'

  export default{
    name:'favorite',
    data () {
      return {
        listData:{
          msg:'msg',
          list:[
            {title:'愿你慢慢长大',author:'理想国度',type:'文学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/1',id:'1',ranking:'1'},
            {title:'你的坚持，终将美好',author:'阿笨',type:'设计',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/2',id:'2',ranking:'2'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/3',id:'3',ranking:'3'},
            {title:'孙小渡',author:'阿笨',type:'人文科学',content:'对于观看者，或许借由这些历久弥新的记忆返回，我们每个人...',pic:require('../assets/img/banner.png'),hash:'/article/4',id:'4',ranking:'4'}
          ]
        },
        state:{
          type:'C',
          rankIcon:false
        },
      }
    },
    components:{
      books_list:bookslist
//      test:test
    },
    methods:{
      getData () {
        let _this = this , BP = _this.$store.state.BP;
        BS.getData(IF.getTheBookYouWouldLike,'GET',{userId:BP.userId},true,null,function(d){
          _this.listData.list = d.data
        });
      }
    },
    created () {
      this.getData()
    }
  }
</script>
