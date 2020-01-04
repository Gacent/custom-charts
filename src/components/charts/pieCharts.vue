<template>
  <ECharts v-if="options" :id="id" :options="options" />
</template>

<script>
import { translateColor, fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'
export default {
  mixins: [sameOptions],
  props: {
    colorAry: {
      type: String,
      default: 'oneColors'
    }
  },
  data () {
    return {
      options: null,
      defaultOptions: null,
      oneColors: [
        translateColor('rgba(241, 131, 162, 1)', 'rgba(222, 76, 105, 1)'),
        translateColor('rgba(54, 223, 203, 1)', 'rgba(25, 188, 156, 1)'),
        translateColor('rgba(253, 217, 118, 1)', 'rgba(251, 178, 65, 1)'),
        translateColor('rgba(91, 209, 255, 1)', 'rgba(50, 197, 255, 1)')
      ],
      twoColors: [
        translateColor('rgba(91, 209, 255, 1)', 'rgba(50, 197, 255, 1)'),
        translateColor('rgba(157, 233, 255, 1)', 'rgba(100, 206, 254, 1)'),
        translateColor('rgba(245, 231, 160, 1)', 'rgba(231, 203, 103, 1)')
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart () {
      this.defaultOptions = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}% <br/> {c}',
          confine: true
        },
        graphic: {
          children: [
            {
              type: 'text',
              style: {
                text: '旅游',
                font: fontSize(0.18) + 'px "Microsoft YaHei"',
                fill: '#fff'
              },
              top: '0'
            },
            {
              type: 'text',
              style: {
                text: '方式',
                font: fontSize(0.18) + 'px "Microsoft YaHei"',
                fill: '#fff'
              },
              top: fontSize(0.26)
            }
          ],
          top: '21%',
          type: 'group',
          left: 'center'
        },
        legend: {
          orient: 'vertical',
          icon: 'circle',
          x: 'center',
          height: '70px',
          top: '63%',
          itemWidth: fontSize(0.1),
          itemHeight: fontSize(0.1),
          align: 'left',
          textStyle: {
            rich: {
              fontSize: fontSize(0.14),
              color: '#fff',
              a: {
                color: 'rgba(255, 255, 255, .5)'
              },
              b: {
                color: 'rgba(255, 255, 255, 1)'
              }
            }
          },
          formatter: (name) => {
            let con = ''
            jsonData.chartData2.map((item) => {
              if (item.name === name) {
                con = item.value
              }
            })
            return `{a|${name}} {b|${con}人}`
          },
          data: jsonData.chartData2
        },
        series: [{
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '30%'],
          roseType: false,
          color: this.colorAry === 'oneColors' ? this.oneColors : this.twoColors,
          data: jsonData.chartData2,
          labelLine: {
            show: false
          },
          label: {
            show: false
          }
        }]
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
