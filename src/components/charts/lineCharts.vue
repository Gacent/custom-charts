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
      let endData=(this.datas&&this.datas.length>0)?this.datas:jsonData.chartData1
      return endData
    }
  },
  methods: {
    setOptions () {
      let series=[]
      let xName=[]
      this.endDatas.map((items, index)=>{
        items.map((nameItem) => {
          if(xName.indexOf(nameItem.name) <= -1) {
            xName.push(nameItem.name)
          }
        })
        series.push({
          name: this.legendDatas ? this.legendDatas[index] : '',
          type: 'line',
          data: items,
          smooth: true
        })
      })
      this.defaultOptions = {
        title:{
          left: 'center',
          top: fontSize(0.2),
          textStyle: {
            color: '#fff',
            fontSize:fontSize(0.18),
            fontWeight: 500
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          show: false,
          top: '0',
          right: fontSize(0.5),
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 20,
          textStyle: {
            color: '#FFF',
            fontSize: fontSize(0.12)
          },
          data: this.legendDatas
        },
        grid: {
          top: '15%',
          bottom: '15%',
          left: '15%',
          right: '10%'
        },
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
            interval: 0,
            color: '#5D6278',
            fontSize: fontSize(0.12)
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: xName,
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#5D6278',
            fontSize: fontSize(0.12),
            align: 'center'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {
            show: true,
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
        series: series
      }
      // 深度合并选项
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
