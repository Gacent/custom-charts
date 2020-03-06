import { fontSize } from '../utils'
export default {
  props: {
    id: {
      type: String,
      default () {
        return 'linechart'
      }
    },
    outOptions: {
      type: Object,
      default () {
        return null
      }
    },
    // sql数据，没传则使用测试数据
    datas:{
      type: Array,
      default () {
        return null
      }
    },
    legendDatas: {
      type: Array,
      default () {
        return null
      }
    }
  },
  watch:{
    outOptions:{  // 选项变更更新
      handler(){
        this.setOptions()
      },
      deep:true
    },
    datas:{ // 数据变更更新
      handler(){
        if(this.datas&&this.datas.length>0&&this.datas[0].length>0){
          this.setOptions()
        } else {
          this.notChart()
        }
      },
      deep:true
    }
  },
  data () {
    return {
      options: null,
      defaultOptions: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      if(this.datas&&this.datas.length>0&&this.datas[0].length>0){
        this.initChart()
      } else {
        this.notChart()
      }
    })
  },
  methods: {
    // 初始化
    initChart () {
      this.setOptions() // 每个图表的选项
    },
    // not datas
    notChart(){
      this.defaultOptions={
        title:{
          text:'暂无数据',
          top:'50%',
          left:'center',
          textStyle:{
            fontSize:fontSize(0.15),
            color:'rgba(255,255,255,.5)'
          }
        }
      }
      this.options = {}
      
      this._.merge(this.options, this.defaultOptions)
    },
    merge () {
      this.options = {}
      // 深度合并
      this._.merge(this.options, this.defaultOptions, this.outOptions)
    }
  }
}
