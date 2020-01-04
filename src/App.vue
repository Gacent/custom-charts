<template>
  <div id="app">
    <div class="test">
      <lineBarCharts id="line1" />
    </div>
    <div class="test">
      <mapFly id="mapfly" :fly-to="{name:'广州',lnglat:[101.89077, 30.87868]}" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
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
