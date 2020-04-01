import lineCharts from './charts/lineCharts'
import barCharts from './charts/barCharts'
import barCrosswiseCharts from './charts/barCrosswiseCharts'
import lineBarCharts from './charts/lineBarCharts'
import pieCharts from './charts/pieCharts'
import mapFly from './charts/mapFly'
import meterCharts from './charts/meterCharts'

import {chartType} from './charts/json/chartType'

import ECharts from './ECharts'

const Components = {
  lineCharts,
  barCharts,
  barCrosswiseCharts,
  lineBarCharts,
  pieCharts,
  mapFly,
  meterCharts,

  ECharts
}
// eslint-disable-next-line
const install=function (Vue,opt){
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
  // lodash注册
  // Vue.prototype._ = _
  // 图表数据json表对照
  Vue.prototype.$chartType=chartType
}

export default {
  install
}
