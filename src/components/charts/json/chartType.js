import line5 from '../../chart/line/line5.png';
import line3 from '../../chart/line/line3.png';
import line6 from '../../chart/line/line3.png';
// import line11 from '../../chart/line/line11.png';


import bar1 from '../../chart/bar/bar1.png';

import pie1 from '../../chart/pie/pie1.png';

import map1 from '../../chart/map/map1.png';

export const chartType=[
  {
    "id":"1",
    "name":"折线图",
    "list":[
      {
        "cid": "11",
        "name": "标准折线图",
        "component":"lineCharts",
        "picture":line5,
        "disabled":false,
        "isXy":true,
      },
      {
        "cid": "12",
        "name": "标准面积图",
        "component":"lineCharts",
        "picture":line3,
        "disabled":true,
        "isXy":true,
      }
      // {
      //   "cid": "13",
      //   "name": "标准双折线图",
      //   "component":"lineCharts",
      //   "picture":line11,
      //   "disabled":true,
      //   "isXy":true,
      // }
    ]
  },
  {
    "id":"2",
    "name":"柱状图",
    "list":[
      {
        "cid": "21",
        "name": "标准柱状图",
        "component":"barCharts",
        "picture":bar1,
        "disabled":false,
        "isXy":true,
      },
      {
        "cid": "22",
        "name": "横向柱状图",
        "component":"barCrosswiseCharts",
        "picture":bar1,
        "disabled":false,
        "isXy":true,
      }
      // {
      //   "cid": "23",
      //   "name": "堆积柱状图",
      //   "component":"lineCharts",
      //   "picture":line3,
      //   "disabled":true,
      //   "isXy":true,
      // },
      // {
      //   "cid": "24",
      //   "name": "标准条形图",
      //   "component":"lineCharts",
      //   "picture":line11,
      //   "disabled":true,
      //   "isXy":true,
      // }
    ]
  },
  {
    "id":"3",
    "name":"饼图",
    "isXy":false,
    "list":[
      {
        "cid": "31",
        "name": "标准饼图",
        "component":"pieCharts",
        "picture":pie1,
        "disabled":false,
        "isXy":false,
      },
      // {
      //   "cid": "32",
      //   "name": "标准环形图",
      //   "component":"lineCharts",
      //   "picture":line3,
      //   "disabled":true,
      //   "isXy":false,
      // }
    ]
  },
  {
    "id":"4",
    "name":"地图",
    "list":[
      {
        "cid": "41",
        "name": "标准地图",
        "component":"mapFly",
        "picture":map1,
        "disabled":false,
        "isXy":false,
      }
    ]
  },
  {
    "id":"5",
    "name":"混合图",
    "list":[
      {
        "cid": "51",
        "name": "折线混柱图",
        "component":"lineBarCharts",
        "picture":line6,
        "disabled":false,
        "isXy":true,
      }
    ]
  }
]