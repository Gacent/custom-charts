import _debounce from 'lodash/debounce'
export default {
  data() {
    return {
      $_resizeHandler: null
    }
  },
  mounted() {
    this.$_resizeHandler = _debounce(() => {
      if (this.reOption) {
        this.reOption()
      }
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    this.$_initResizeEvent()
  },
  beforeDestroy() {
    this.$_destroyResizeEvent()
  },
  // to fixed bug when cached by keep-alive
  // https://github.com/PanJiaChen/vue-element-admin/issues/2116
  activated() {
    this.$_initResizeEvent()
  },
  deactivated() {
    this.$_destroyResizeEvent()
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_initResizeEvent() {
      window.addEventListener('resize', this.$_resizeHandler)
    },
    $_destroyResizeEvent() {
      window.removeEventListener('resize', this.$_resizeHandler)
    }
  }
}
