<template>
  <div id="app">
    <div class="test">
      <lineCharts id="line1" :datas="cityDatas" />
    </div>
    <div class="test">
      <pieCharts id="line" :datas="cityDatas" />
    </div>
    <div class="test">
      <mapFly id="mapfly" :fly-to="{name:'丹巴',lnglat:[101.89077, 30.87868]}" :datas="chinaDatas" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      chinaDatas: [[{ name: '广东', value: 12 }, { name: '四川', value: 55 }]],
      cityDatas: []
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
