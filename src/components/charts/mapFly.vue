<template>
  <ECharts v-if="options" :id="id" :options="options" />
</template>

<script>
import echarts from 'echarts'
// test测试数据，后期对接需要删除
import sameOptions from './mixins' // 共同的配置项
import json from './json/testData'

// 引入中国地图
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

export default {
  mixins: [sameOptions],
  props: {
    // 包括name,和经纬度数组longitude，latitude
    flyTo: {
      type: Object,
      default () {
        return { name: '丹巴', lnglat: [101.89077, 30.87868] }
      }
    }
  },
  data () {
    return {
      geoCoordMap: {},
      chinaDatas: json.chinaDatas
    }
  },
  computed:{
    endDatas(){
      return this.datas||this.chinaDatas
    }
  },
  mounted () {
    var mapFeatures = echarts.getMap('china').geoJson.features
    mapFeatures.forEach((v) => {
      // 地区名称
      var name = v.properties.name
      // 地区经纬度
      this.geoCoordMap[name] = v.properties.cp
    })
    this.geoCoordMap[this.flyTo.name] = [...this.flyTo.lnglat] // 汇聚点
  },
  methods: {
    // 最大最小值
    findMaxMin (data) {
      var min
      var max
      data.sort(function (a, b) { return a[0].value - b[0].value })
      min = data.length === 1 ? Object.assign([], [{ value: 0 }]) : data[0]
      max = data[data.length - 1]
      return {
        max,
        min
      }
    },
    convertData (data) {
      var res = []
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i]
        var fromCoord = this.geoCoordMap[dataItem[0].name]
        // var toCoord = [this.geoCoordMap[dataItem[1].name]]
        var toCoord = [...this.flyTo.lnglat]
        if (fromCoord && toCoord) {
          res.push([{
            coord: fromCoord,
            value: dataItem[0].value
          },
          {
            coord: toCoord
          }
          ])
        }
      }
      return res
    },
    setOptions(){
      var series = []
      const objmaxmin = this.findMaxMin(this.chinaDatas);
      [[this.flyTo.name, this.chinaDatas]].forEach((item) => {
        series.push({
          type: 'lines',
          zlevel: 2,
          tooltip: {
            show: false
          },
          effect: {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', // 箭头图标
            symbolSize: 5 // 图标大小
          },
          lineStyle: {
            normal: {
              width: 1, // 尾迹线条宽度
              opacity: 1, // 尾迹线条透明度
              curveness: 0.3 // 尾迹线条曲直度
            }
          },
          data: this.convertData(item[1])
        }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: { // 涟漪特效
            period: 4, // 动画时间，值越小速度越快
            brushType: 'stroke', // 波纹绘制方式 stroke, fill
            scale: 4 // 波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: 'right', // 显示位置
              offset: [5, 0], // 偏移设置
              formatter: function (params) { // 圆环显示文字
                return params.data.name
              },
              fontSize: 13
            },
            emphasis: {
              show: true
            }
          },
          symbol: 'circle',
          symbolSize: function (val) {
            return val[2] / objmaxmin.max[0].value + 2// 圆环大小
          },
          itemStyle: {
            normal: {
              show: false,
              color: '#f00'
            }
          },
          data: item[1].map((dataItem) => {
            return {
              name: dataItem[0].name,
              value: this.geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            }
          })
        },
        // 被攻击点
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              // offset:[5, 0],
              color: '#0f0',
              formatter: '{b}',
              textStyle: {
                color: '#0f0'
              }
            },
            emphasis: {
              show: true,
              color: '#f60'
            }
          },
          symbol: 'pin',
          symbolSize: 50,
          data: [{
            name: item[0],
            value: this.geoCoordMap[item[0]].concat([10])
          }]
        }
        )
      })

      this.defaultOptions = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(166, 200, 76, 0.82)',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function (params) {
            // 根据业务自己拓展要显示的内容
            var res = ''
            var name = params.name
            var value = params.value[params.seriesIndex + 1]
            res = "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value
            return res
          }
        },
        visualMap: { // 图例值控制
          min: objmaxmin.min[0].value,
          max: objmaxmin.max[0].value,
          left: '8%',
          bottom: 5,
          calculable: true,
          show: true,
          color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          zoom: 1.2,
          label: {
            emphasis: {
              show: false
            }
          },
          top: 45,
          // roam: true, // 是否允许缩放
          itemStyle: {
            normal: {
              color: 'rgba(0, 0, 82, 1)', // 地图背景色
              borderColor: '#516a89', // 省市边界线00fcff 516a89
              borderWidth: 1
            },
            emphasis: {
              color: 'rgba(37, 43, 61, .5)' // 悬浮背景
            }
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
