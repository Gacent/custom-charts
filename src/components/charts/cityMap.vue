<template>
  <ECharts v-if="options" :id="id" :options="options" :re-option="endOptions" />
</template>

<script>
import { fontSize } from './utils'
import echarts from 'echarts'
// test测试数据，后期对接需要删除
import sameOptions from './mixins' // 共同的配置项
export default {
  mixins: [sameOptions],
  props: {
    // 城市json
    cityJson: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      endCity: {}
    }
  },
  computed: {
    endDatas() {
      const endAry = []
      this.datas[0].map((item) => {
        endAry.push([item])
      })
      return endAry
    }
  },
  created() {
    if (this.cityJson) {
      // 否则是外部传进来的自定义json文件
      this.endCity = this.cityJson
      echarts.registerMap(this.endCity.name, this.endCity.geojson)
    }
  },
  methods: {
    setOptions() {
      if (!this.isHasDatas) return
      this.defaultOptions = {
        tooltip: {
          show: true,
          formatter: function(params) {
            if (params.data) return params.name + '：' + params.data['value']
          }
        },
        series: [{
          type: 'map',
          map: this.endCity.name,
          zoom: 1.2,
          roam: true,
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#ddd',
                fontSize: fontSize(0.13)
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(50, 197, 255, 0.19)'
            },
            emphasis: {
              areaColor: 'rgba(50, 197, 255, 0.3)',
              borderWidth: 0
            }
          },
          data: this.endDatas[0]
        }]
      }
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
