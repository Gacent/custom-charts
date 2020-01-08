<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" />
</template>

<script>
import { fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'
export default {
  mixins: [sameOptions],
  props:{
    isDiffColor:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      color: ['rgba(26, 116, 218, 1)', 'rgba(80, 194, 254, 1)', 'rgba(25, 188, 156, 1)', 'rgba(251, 178, 65, 1)', 'rgba(222, 76, 105, 1)', 'rgba(228, 214, 160, 1)']
    }
  },
  computed:{
    endDatas(){
      return this.datas||jsonData.chartData1
    }
  },
  methods: {
    setOptions () {
      this.defaultOptions = {
        grid: {
          top: '20%',
          bottom: '20%',
          left: '20%',
          right: '15%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['蒸发量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            data: this.endDatas.map((item) => {
              return item.name
            }),
            axisLabel: {
              color: 'rgba(93, 98, 120, 1)',
              fontSize: fontSize(0.12)
            },
            nameTextStyle: {
              color: 'rgba(93, 98, 120, 1)',
              fontSize: fontSize(0.12)
            },
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            nameTextStyle: {
              color: 'rgba(93, 98, 120, 1)',
              fontSize: fontSize(0.12)
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
              }
            },
            axisLabel: {
              color: 'rgba(93, 98, 120, 1)',
              fontSize: fontSize(0.12),
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            nameTextStyle: {
              color: 'rgba(93, 98, 120, 1)',
              fontSize: fontSize(0.12)
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
              }
            },
            axisLabel: {
              color: 'rgba(93, 98, 120, 1)',
              fontSize: fontSize(0.12),
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            yAxisIndex: 0,
            data: this.endDatas,
            itemStyle: {
              color: this.isDiffColor ? (params) => {
                return this.color[params.dataIndex % 6]
              } : 'rgba(80, 254, 202, 1)'
            }
          },
          {
            name: '平均温度',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: this.endDatas,
            itemStyle: {
              color: 'rgba(0, 255, 200, 1)'
            }
          }
        ]
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
