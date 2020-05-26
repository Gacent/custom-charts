<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" :re-option="endOptions" />
</template>

<script>
import { fontSize, translateColor } from './utils'
import sameOptions from './mixins' // 共同的配置项

export default {
  mixins: [sameOptions],
  computed: {
    endDatas() {
      return this.datas[0]
    }
  },
  methods: {
    setOptions() {
      if (!this.isHasDatas) return
      this.defaultOptions = {
        title: {
          top: 5,
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: fontSize(0.18),
            fontWeight: 600
          }
        },
        color: [translateColor('#5BD1FF', '#32C5FF'), translateColor('#F183A2', '#DE4C69'), translateColor('#FDD976', '#FBB241')],
        series: [{
          type: 'gauge',
          center: ['50%', '52%'],
          axisLine: {
            show: true,
            lineStyle: {
              width: 10,
              shadowBlur: 0,
              color: [
                [0.3, translateColor('#5BD1FF', '#32C5FF')],
                [0.7, translateColor('#F183A2', '#DE4C69')],
                [1, translateColor('#FDD976', '#FBB241')]
              ]
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            distance: -15,
            color: 'rgba(255,255,255,0.5)',
            fontSize: fontSize(0.09),
            fontFamily: 'PingFangSC-Semibold,PingFang SC',
            fontWeight: 600
          },
          pointer: {
            length: '65%',
            width: '2%'
          },
          itemStyle: {
            color: '#F7B500'
          },
          detail: {
            show: true,
            offsetCenter: [0, '55%'],
            color: '#27CCB2',
            fontSize: fontSize(0.2),
            fontFamily: 'PingFangSC-Semibold,PingFang SC',
            fontWeight: 600,
            formatter: function(value) {
              return value + '%'
            }
          },
          data: this.endDatas
        }]
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
