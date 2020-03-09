/**
 * 随机产生十六进制的颜色值
 * @returns {string}
 */
export function randomColor () {
  let str = '#'
  const colorNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  for (let i = 0; i < 6; i++) {
    const random = parseInt(Math.random() * 16)
    str += colorNum[random]
  }
  return str
}

// 字体适应
export function fontSize (res) {
  // const docEl = document.documentElement
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (!clientWidth) return
  let fontSize 
  if (clientWidth < 1000) {
    fontSize = 100 * (clientWidth / 375)
  } else if(clientWidth>=1000&&clientWidth<=1920){
    fontSize = 100 * (clientWidth / 1920)
  } else{
    fontSize = 100 * (clientWidth / 2436)
  }
  return res * fontSize
}

// 最大最小值
export function exeMaxMin (data, sorts) {
  var min
  var max
  if (sorts) { // 降序
    data.sort(function (a, b) { return b.value - a.value })
    max = data[0]
    min = data[data.length - 1]
  } else { // 升序
    data.sort(function (a, b) { return a.value - b.value })
    min = data[0]
    max = data[data.length - 1]
  }
  return {
    max,
    min
  }
}

export function transformNumber (number, decimalDigit) {
  function addWan (integer, number, mutiple, decimalDigit) {
    // var me = this
    var digit = getDigit(integer)
    if (digit > 3) {
      var remainder = digit % 8
      if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’
        remainder = 4
      }
      return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万'
    } else {
      return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit)
    }
  }
  function getDigit (integer) {
    var digit = -1
    while (integer >= 1) {
      digit++
      integer = integer / 10
    }
    return digit
  }
  // var me = this
  decimalDigit = decimalDigit == null ? 2 : decimalDigit
  var integer = Math.floor(number)
  var digit = getDigit(integer)
  // ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
  var unit = []
  if (digit > 3) {
    var multiple = Math.floor(digit / 8)
    if (multiple >= 1) {
      var tmp = Math.round(integer / Math.pow(10, 8 * multiple))
      unit.push(addWan(tmp, number, 8 * multiple, decimalDigit))
      for (var i = 0; i < multiple; i++) {
        unit.push('亿')
      }
      return unit.join('')
    } else {
      return addWan(integer, number, 0, decimalDigit)
    }
  } else {
    return number
  }
}

// 径向渐变
export function translateColor (color1, color2, isX = 1) {
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: isX,
    y2: 1,
    colorStops: [{
      offset: 0, color: color1 // 0% 处的颜色
    }, {
      offset: 1, color: color2 // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}
