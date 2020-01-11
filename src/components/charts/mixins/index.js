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
        this.setOptions()
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
      this.initChart()
    })
  },
  methods: {
    // 初始化
    initChart () {
      this.setOptions() // 每个图表的选项
    },
    merge () {
      this.options = {}
      // 深度合并
      this._.merge(this.options, this.defaultOptions, this.outOptions)
    }
  }
}
