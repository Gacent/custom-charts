import { fontSize } from '../utils'
import _merge from 'lodash/merge'
import _cloneDeep from 'lodash/cloneDeep'
export default {
  props: {
    id: {
      type: String,
      default() {
        return 'linechart'
      }
    },
    outOptions: {
      type: Object,  // 有些要根据resize重新计算的选项要利用Function
      default() {
        return null
      }
    },
    // sql数据，没传则使用测试数据
    datas: {
      type: Array,
      default() {
        return null
      }
    },
    legendDatas: {
      type: Array,
      default() {
        return null
      }
    }
  },
  watch: {
    outOptions: {  // 选项变更更新
      handler() {
        this.setOptions()
      },
      deep: true
    },
    datas: { // 数据变更更新
      handler() {
        if (this.isHasDatas) {
          this.setOptions()
        } else {
          this.notChart()
        }
      },
      deep: true
    }
  },
  data() {
    return {
      options: null,
      defaultOptions: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.isHasDatas) {
        this.initChart()
      } else {
        this.notChart()
      }
    })
  },
  computed:{
    isHasDatas(){
      return this.datas && this.datas.length > 0 && this.datas[0].length > 0
    },
    endOptions(){
      return this.isHasDatas?this.setOptions:this.notChart
    }
  },
  methods: {
    // 触发大小变化
    outResize() {
      this.$refs.echarts.$_resizeHandler()
    },
    // 初始化
    initChart() {
      this.setOptions() // 每个图表的选项
    },
    // not datas
    notChart() {
      this.defaultOptions = {
        title: {
          text: '暂无数据',
          top: '50%',
          left: 'center',
          textStyle: {
            fontSize: fontSize(0.15),
            color: 'rgba(255,255,255,.5)'
          }
        }
      }
      this.options = {}

      _merge(this.options, this.defaultOptions)
    },
    // 转换所有outOptions内所有fontSize字符串
    translateFontSize(options){
      if(options){
        Object.keys(options).forEach((key)=>{
          if(typeof options[key]==='object') return this.translateFontSize(options[key]);
          let str=String(options[key])
          if(str.indexOf('fontSize')!=-1){
            options[key]=fontSize(/(\d+\.\d+)/.exec(str)[1])
          }
        })
        return options
      }
    },
    merge() {
      this.options = {}
      let cloneObj=_cloneDeep(this.outOptions)
      if(cloneObj){ // 有外部选项才执行
        this.translateFontSize(cloneObj)
      }
      // 深度合并
      _merge(this.options, this.defaultOptions, cloneObj)
      cloneObj=null
    }
  }
}
