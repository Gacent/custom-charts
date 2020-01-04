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
