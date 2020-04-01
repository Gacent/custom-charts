<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" :reOption="setOptions"/>
</template>

<script>
import { fontSize, translateColor } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'

export default {
  mixins: [sameOptions],
  props: {
    isDiffColor: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      options: null,
      color: ['rgba(26, 116, 218, 1)', 'rgba(80, 194, 254, 1)', 'rgba(25, 188, 156, 1)', 'rgba(251, 178, 65, 1)', 'rgba(222, 76, 105, 1)', 'rgba(228, 214, 160, 1)'],
      defaultOptions: null,
    }
  },
  computed:{
    endDatas(){
      return (this.datas&&this.datas.length>0)?this.datas[0]:jsonData.gaugeData
    }
  },
  methods: {
    setOptions(){
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
            },
          },
          splitLine: {
              show: false,
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
          data: this.endDatas,
        }]
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
