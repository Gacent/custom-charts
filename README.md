# custom-charts
> 1. 适合有一定echarts基础的人使用
> 2. 一个组件一种类型，传入的参数主要是对这种chart类型的样式进行修改
> 3. 思路：ECharts=>/charts/mixins/=>/charts其他vue是对应的一个类型的图表组件，内部有写好的默认options，自己不满意可以传入outOptions来修改
> 4. mixin内部通过lodash的merge进行递归合并，将内部和外部options进行合并

## chart
### 公共props参数
```javscript
id: {
  type: String,
  default() {
    return 'barchart'
  }
},
outOptions: { // 外部选项
  type: Object,
  default() {
    return null
  }
},
datas:{ // 数据，格式[[{name:xxx,value:xxx},{name:xxx,value:xxx}...],[{name:vvv,value:xxx}...]]
  type: Array,
  default () {
    return null
  }
},
legendDatas: {  // 数据图例名称
  type: Array,
  default () {
    return null
  }
}
```
#### 柱状图
##### barCharts（标准柱状图）
1. isDiffColor：是否bar条都不一样颜色，布尔值
```javascript
isDiffColor: {
  type: Boolean,
  default () {
    return false
  }
}
```
##### barCrosswiseCharts（标准横行柱状图）
#### 饼图
##### pieCharts（标准挖空饼图）
1. colorAry：使用哪套颜色（'oneColors'和'twoColors'），字符串
```javascript
colorAry: {
  type: String,
  default: 'oneColors'
}
```
#### 地图
##### mapFly（地图飞线图）
```javascript
<mapFly id="mapfly" :fly-to="{name:'丹巴',lnglat:[101.89077, 30.87868]}" />
```
1. flyTo
```javascript
flyTo: {
  type: Object,
  default () {
    return { name: '丹巴', lnglat: [101.89077, 30.87868] }
  }
}
```
#### 混合图
##### lineBarChart（折线柱形混合）
1. isDiffColor
```javascript
isDiffColor:{
  type:Boolean,
  default:false
}
```

# 安装
## 无忧无虑使用方式
> 直接在自己项目 npm install custom-charts -S
## 本地代码调试或拓展
> 将项目克隆至本地  并修改package.json的main为./src/components/index.js  然后npm link  之后在自己项目中npm link custom-charts关联次包即可

# 使用
```javascript
// main.js中引入包
import CustomCharts from 'custom-charts'
Vue.use(CustomCharts)
// 项目中,以柱状图为例,参数务必按格式传
<lineCharts id="line1" :outOptions="outOptions" :datas="datas"/>
```

# main先指向./src/components/index.js进行本地调试，后期发布版本时候再使用npm run build:components之后修改为./dist/customcharts.common.js，并npm publish 传包

# 版本
## 0.1.3
- pie图表更新
## 0.1.4
- 更新所有图表兼容多数据传入
## 0.1.5
- 修改main入口错误信息
## 0.1.8
- 修改barcross的y轴Name方向
## 0.1.9
- 修改了饼状图数值超过五位数按单位制方式
- 修改文字根据屏幕大小进行调整
## 0.2.3
- 减少npm文件发布，减小包的大小