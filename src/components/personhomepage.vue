<template>
  <transition name="page">
    <div class="all">
      <div class="banner">
        <img src="../assets/img/banner.png"/>
      </div>
      <div class="headPic">
        <div class="box"><img src="../assets/img/banner.png"/></div>
      </div>

      <div class="content">
        <div class="title">
          <span>借阅读</span>
          <span>{{ curveData.sum }}本</span>
        </div>

        <div id="echarts" style="width:100%;height:10rem;"></div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {BS} from '@/assets/js/base'
  import echarts from 'echarts'
  import IF from '@/assets/js/interface'

  export default{
    name:'personhomepage',
    data () {
      return {
        canvasW:800,
        canvasH:400,
        curveData:{
          sum:'',
          data:[],
        },
        test:this.$store.state.iosParams
      }
    },
    methods:{
      draw () {
        let myChart = echarts.init(document.getElementById('echarts')),
          xAixs = [],
          data = this.curveData.data,
          len = data.length;

        if(parseInt(data[len-1]) >= parseInt(data[len-2]))data.push(data[len-1]*1.2);
        else data.push(data[len-1]*0.8);//根据阅读次数趋势为数组添加一个虚拟走向值

        len = data.length;//重新计算data长度

        for(let i=0;i<len;i++){
          xAixs.push(data[i]);//设置x轴节点
        }



        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            }
          },
          grid: {
            left: '-3%',
            right: '0',
            bottom: '3%',
            containLabel: false
          },
          xAxis: {
            show:false,
            type: 'category',
            splitLine:{show: false},
            boundaryGap: false,
            data: xAixs
          },
          yAxis: {
            show:false,
            type: 'value',
            splitLine:{show: false}
          },
          series: [
            {
              name:'book',
              type:'line',
              smooth:true,
              stack: '总量',
              symbol:'none',
              symbolSize:10,
              markPoint:{
                data: [
                  {
                    coord:[len - 2,data[len-2]],
                    symbol:'image://http://120.24.178.171:8080/html5/assets/label_icon.png',
                    symbolSize:30,
                  }
                ],
                label:{
                  normal:{
                    show:true,
                    formatter:function(){
                      return "本月"+data[len-2]+"本"
                    },
                    position:'top',
                    textStyle:{
                      color:'#3BDDE1',
                      fontSize:14,
                    }
                  },
                },
                animationThreshold:''
              },
              itemStyle:{
                normal:{
                  lineStyle:{
                    color:'#3BDDE1',
                    shadowColor: '#3BDDE1',
                    shadowBlur: 5,
                    width:5
                  },
                  label : {
                    show : true,
//                    formatter : '{b}：{c}',
                    position : 'top',
                    textStyle : {
                      fontWeight : '700',
                      fontSize : '12',
                      color:'#f5bf58'
                    }
                  },
                  color:'#3BDDE1',
                  width:6
                }
              },
              data:data
            }
          ]
        };
        myChart.setOption(option);
      },
      getData () {
        let _this = this ,
            BP = _this.$store.state.BP ,
            begin = BS.date.years - 1 + '-' + BS.date.month + '-01',
            end = BS.date.years + '-' + BS.date.month + BS.date.days;
        BS.getData(IF.getUserHomePage,'GET',{schoolId:BP.schoolId,userId:BP.userId,begin:begin,end:end},true,null,function(d){
          _this.curveData.sum = d.data.sum;
          for(var i in d.data.list){
            _this.curveData.data.push(d.data.list[i].num);
          }
          _this.draw();
        });
      }
    },
    created () {
      this.getData();
    },
    mounted () {
//      let arr = [];
//
//      arr.push(a => a);
    }
  }
</script>
<style scoped>
  .all{background:#fff;}
  .headPic{width:100%;position:relative;top:-2rem;height:auto;z-index:4;}
  .headPic .box{width:4rem;height:4rem;margin:0 auto;position:relative;overflow:hidden;border-radius:50%;}
  .headPic .box img{width:100%;height:100%;}
  .banner img{display:block;}
  .title{display:flex;flex-direction:row;justify-content:space-between;padding:1rem 1.5rem;color:#4BDFE3;font-size:1.2rem;border-bottom:1px dashed #C4F5F6;}

  #canvas{width:100%;border:1px solid #ccc;}
</style>
