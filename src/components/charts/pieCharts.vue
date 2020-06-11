<template>
  <ECharts v-if="options" :id="id" :options="options" :re-option="endOptions" />
</template>

<script>
import { transformNumber, fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
import { colorAry } from './utils/translateColors'
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
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}',
          confine: true
        },
        graphic: {
          children: [
            {
              type: 'text',
              style: {
                font: fontSize(0.18) + 'px "Microsoft YaHei"',
                fill: '#fff'
              },
              top: '0'
            },
            {
              type: 'text',
              style: {
                font: fontSize(0.18) + 'px "Microsoft YaHei"',
                fill: '#fff'
              },
              top: fontSize(0.26)
            }
          ],
          top: '25%',
          type: 'group',
          left: 'center'
        },
        legend: {
          orient: 'vertical',
          icon: 'circle',
          x: 'center',
          height: fontSize(0.7),
          top: '68%',
          itemWidth: fontSize(0.1),
          itemHeight: fontSize(0.1),
          itemGap: fontSize(0.1),
          align: 'left',
          textStyle: {
            rich: {
              a: {
                color: 'rgba(255, 255, 255, .5)',
                fontSize: fontSize(0.14)
              },
              b: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: fontSize(0.14)
              }
            }
          },
          pageIconInactiveColor: '#666',
          pageIconColor: '#fff',
          pageTextStyle: {
            color: '#fff',
            fontSize: fontSize(0.12)
          },
          pageIconSize: fontSize(0.10),
          formatter: (name) => {
            let con = ''
            this.endDatas.map((item) => {
              if (item.name === name) {
                con = item.value
              }
            })
            return `{a|${name}}  {b|${transformNumber(con)}人}`
          },
          data: this.endDatas
        },
        series: [{
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '35%'],
          roseType: false,
          color: colorAry,
          stillShowZeroSum: false,
          data: this.endDatas,
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
