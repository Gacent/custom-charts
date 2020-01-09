<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" />
</template>

<script>
import { fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'
export default {
  name: 'lineCharts',
  mixins: [sameOptions],
  computed:{
    endDatas(){
      let endDatas=null
      if(this.datas instanceof Array){
        endDatas=this.datas
      } else if(this.datas instanceof Object) {
        // console.log(123)
      } else {
        endDatas=null
      }
      return endDatas||jsonData.chartData1
    }
  },
  methods: {
    setOptions () {
      this.defaultOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '15%',
          bottom: '15%',
          left: '15%',
          right: '10%'
        },
        // eslint-disable-next-line
        xAxis: {
          type: 'category',
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          splitLine: {
            normal: {
              show: false
            }
          },
          axisLabel: {
            color: '#5D6278',
            fontSize: fontSize(0.12)
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: this.endDatas.map((item) => {
            return item.name
          }),
          boundaryGap: false
        },
        // eslint-disable-next-line
        yAxis: {
          type: 'value',
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {
            color: '#5D6278',
            fontSize: fontSize(0.12),
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          type: 'line',
          data: this.endDatas,
          smooth: true,
          itemStyle: {
            color: 'rgba(80, 254, 202, 1)'
          }
        }]
      }
      // 深度合并选项
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
