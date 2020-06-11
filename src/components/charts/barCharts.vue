<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" :re-option="endOptions" />
</template>

<script>
import { fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
export default {
  mixins: [sameOptions],
  methods: {
    setOptions() {
      if (!this.isHasDatas) return
      const series = []
      const xName = []
      this.endDatas.map((items, index) => {
        items.map((nameItem) => {
          if (xName.indexOf(nameItem.name) <= -1) {
            xName.push(nameItem.name)
          }
        })
        series.push({
          name: this.legendDatas ? this.legendDatas[index] : '',
          type: 'bar',
          barWidth: fontSize(0.12),
          data: items
        })
      })
      this.defaultOptions = {
        color: 'rgba(54, 223, 203, 1)',
        title: {
          left: 'center',
          top: fontSize(0.2),
          textStyle: {
            color: '#fff',
            fontSize: fontSize(0.18),
            fontWeight: 500
          }
        },
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // dataZoom: [{
        //   type: 'inside',
        //   endValue: 5,
        //   minValueSpan: 3
        // }],
        legend: {
          show: false,
          top: '0',
          right: fontSize(0.5),
          itemWidth: fontSize(0.12),
          itemHeight: fontSize(0.12),
          itemGap: fontSize(0.20),
          textStyle: {
            color: '#FFF',
            fontSize: fontSize(0.12)
          },
          data: this.legendDatas
        },
        grid: {
          top: '15%',
          bottom: '12%',
          left: '2%',
          right: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          nameTextStyle: {
            color: 'rgba(93, 98, 120, 1)',
            fontSize: fontSize(0.12)
          },
          nameGap: fontSize(0.25),
          nameLocation: 'center',
          splitLine: {
            normal: {
              show: false
            }
          },
          axisLabel: {
            interval: 'auto',
            color: '#5D6278',
            fontSize: fontSize(0.12)
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: xName
        },
        yAxis: {
          type: this.intervalBiger(this.endDatas),
          name: '数量（次）',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#5D6278',
            fontSize: fontSize(0.12),
            align: 'center'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {
            color: '#5D6278',
            fontSize: fontSize(0.12)
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
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
