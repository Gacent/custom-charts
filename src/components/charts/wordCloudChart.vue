<template>
  <ECharts ref="wordCloud" v-if="options" :id="id" :options="options" :reOption="setOptions"/>
</template>

<script>
// import { transformNumber, fontSize } from './utils'
import sameOptions from './mixins' // 共同的配置项
import jsonData from './json/testData'
// import {colorAry} from './utils/translateColors'
import "echarts-wordcloud/dist/echarts-wordcloud.min"
export default {
  mixins: [sameOptions],
  data () {
    return {
      options: null,
      defaultOptions: null,
    }
  },
  computed:{
    endDatas(){
      return (this.datas&&this.datas.length>0)?this.datas[0]:jsonData.chartData2[0]
      
    }
  },
  methods: {
    setOptions () {
      if(!this.isHasDatas) return;
      this.defaultOptions = {
        series: [{
          type: 'wordCloud',
          shape:"diamond",
          gridSize: 10,
          sizeRange: [14, 40],
          // sizeRange: [6, 66],
          rotationRange: [-45, 90],
          textStyle: {
            normal: {
              color: function() {
                return (
                  "rgb(" +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ")"
                );
              }
            }
          },
          left: "center",
          top: "center",
          right: null,
          bottom: null,
          width: "80%",
          height: "80%",
          //数据
          data: this.endDatas
        }]
      }
      if(this.$refs.wordCloud){
        this.$refs.wordCloud.chart.clear()
      }
      
      this.merge()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
