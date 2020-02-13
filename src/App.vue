<template>
  <div id="app">
    <div class="test">
      <lineBarCharts id="line1" />
    </div>
    <div class="test">
      <barCrosswiseCharts id="line" />
    </div>
    <div class="test">
      <mapFly id="mapfly" :fly-to="{name:'丹巴',lnglat:[101.89077, 30.87868]}" :datas="cityDatas"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      chinaDatas:[[{name:'广东',value:12},{name:'四川',value:55}]],
      cityDatas:[[{name:'广州',value:15},{name:'杭州',value:88}]]
    }
  },
  components: {
  },
  mounted () {

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
