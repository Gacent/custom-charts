# custom-charts
> 1. 适合有一定echarts基础的人使用
> 2. 一个组件一种类型，传入的参数主要是对这种chart类型的样式进行修改
> 3. 思路：ECharts=>/charts/mixins/=>/charts其他vue是对应的一个类型的图表组件，内部有写好的默认options，自己不满意可以传入outOptions来修改
> 4. mixin内部通过lodash的merge进行递归合并，将内部和外部options进行合并

## 包的特点
1. 多数据传入（前提是支持多数据显示的图表）
2. outOptions实时监听变化
3. datas实时监听变化
4. 无数据时候会显示暂无数据
5. 因为echarts不能随屏幕变化而自适应字体，如果想自适应字体，自己需要先搭建好amfe-flexible，会自动读取html的font-size值，使用时候可以在需要字体自适应的地方传入字符串形式的'fontSize(xx)'，例如fontSize(0.12)表示12px；默认相对于1920分辨率
6. 也支持手机端的使用，也是需要先配好amfe-flexible，使用方式和pc一样；默认相对375设备独立像素
7. y轴数据：大差距数据使用log类型

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
<barCharts id="barCharts" :outOptions="barChartsOptions" :datas="barChartsDatas" :legendDatas="barChartsLegend"/>
```
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
1. colorAry：内置了颜色

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
#### 词云
##### wordCloudChart
```javascript
<wordCloudChart id="wordCloudChart"/>
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

## main先指向./src/components/index.js进行本地调试，后期发布版本时候再使用npm run build:components之后修改为./dist/customcharts.umd.min.js，并npm publish 传包

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
## 0.3.0
- 开发时候字号相对于1920屏幕开发
- 解决窗口变化不能自适应字体的问题，假如字号15px，外部传入时候需要改成字符串fontSize(0.15)
## 0.3.1
- 修改：pie的itemGap响应式
## 0.3.2
- 修改：当没有使用html的fontSize的时候，就默认返回数字
## 0.3.3
- 修改：禁止测试数据的显示
## 0.3.5
- 增加词云组件
- 修改：无数据时候的BUG修复
## 0.3.6
- fix：echarts库升级4.7，修复了地图散点和地图之间错位的问题
- feat：代码规范化eslint配置
## 0.3.7
- fix：修复折线图、柱状图等的value差距过大导致绘制出来的图形没有落差，大差距数据使用log
- fix：删除测试数据jsonData，并将enDatas抽离公共mixin