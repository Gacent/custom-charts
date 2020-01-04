import Vue from 'vue'
import App from './App.vue'
import chartComponents from './components'
// eslint-disable-next-line
Vue.use(chartComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
