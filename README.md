# charts封装（vue-large-screen-adaptive仓库记得更新）
> 一个组件一种类型，传入的参数主要是对这种chart类型的样式进行修改
> 思路：ECharts=>/charts/mixins/=>/charts其他vue是对应的一个类型的图表组件
> mixin内部通过deepAssign深度合并，将内部和外部options进行合并

## chart
### 公共props参数
```javscript
id: {
  type: String,
  default() {
    return 'barchart'
  }
},
outOptions: {
  type: Object,
  default() {
    return null
  }
},
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

# main先指向./components进行调试，后期再使用./dist/customcharts.common.js

# chartTable的BUG
## 如果数据没有排序，loop为true会有BUG

# 版本
## 0.1.3
- pie图表更新
## 0.1.4
- 更新所有图表兼容多数据传入
## 0.1.5
- 修改main入口错误信息