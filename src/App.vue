<template>
  <div id="app">
    <div class="test">
      <lineCharts id="line1" :datas="cityDatas" />
    </div>
    <div class="test">
      <wordCloudChart id="line" :datas="chinaDatas" />
    </div>
    <div class="test">
      <mapFly id="mapfly" :fly-to="{name:'丹巴',lnglat:[101.89077, 30.87868]}" :datas="chinaDatas" />
    </div>
    <div class="test">
      <!-- <cityMap id="city" :datas="cityDatas" :city-json="cityJson" /> -->
    </div>
    <div class="test">
      <cityMap id="city2" :datas="cityDatas" :city-json="cityJson" />
    </div>
  </div>
</template>

<script>
import city from './assets/guangdong.json'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      chinaDatas: [[{ name: '广东', value: 12 }, { name: '四川', value: 55 }]],
      cityDatas: [[{ name: '广州市', value: 500 }, { name: '深圳市', value: 500 }]],
      cityJson: null
    }
  },
  created() {
    this.cityJson = {
      name: '广东',
      geojson: city
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test{
  width: 80%;
  height: 500px;
  background: #2c3e50
}
</style>
