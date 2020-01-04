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
    outOptions:{
      handler(){
        this.setOptions()
      },
      deep:true
    },
    datas:{
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
  methods: {
    merge () {
      this.options = {}
      // 深度合并
      this._.merge(this.options, this.defaultOptions, this.outOptions)
    }
  }
}
