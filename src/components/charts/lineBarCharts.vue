<template>
  <ECharts v-if="options" :id="id" ref="echarts" :options="options" />
</template>

<script>
import { fontSize } from "./utils";
import sameOptions from "./mixins"; // 共同的配置项
import jsonData from "./json/testData";
export default {
  mixins: [sameOptions],
  props: {
    isDiffColor: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      color: [
        "rgba(26, 116, 218, 1)",
        "rgba(80, 194, 254, 1)",
        "rgba(25, 188, 156, 1)",
        "rgba(251, 178, 65, 1)",
        "rgba(222, 76, 105, 1)",
        "rgba(228, 214, 160, 1)"
      ]
    };
  },
  computed: {
    endDatas() {
      return this.datas || jsonData.chartData3;
    }
  },
  methods: {
    setOptions() {
      let series = []
      let xName = []
      let yAxis = []
      this.endDatas.map((items, index) => {
        items.map(nameItem => {
          if (xName.indexOf(nameItem.name) <= -1) {
            xName.push(nameItem.name)
          }
        });
        if (index === 0) {
          yAxis.push({
            type: "value",
            name: this.legendDatas ? this.legendDatas[0] : "",
            nameTextStyle: {
              color: "rgba(93, 98, 120, 1)",
              fontSize: fontSize(0.12)
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisLabel: {
              color: "#5D6278",
              fontSize: fontSize(0.12),
              formatter: "{value}"
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisTick: {
              show: false
            }
          })
          series.push({
            name: this.legendDatas ? this.legendDatas[index] : "",
            type: "line",
            data: items,
            smooth: true,
            yAxisIndex: 1,
            itemStyle: {
              color: "rgba(0, 255, 200, 1)"
            }
          })
        }
        else {
          series.push({
            name: this.legendDatas ? this.legendDatas[index] : "",
            type: "bar",
            yAxisIndex: 0,
            data: items,
            barWidth: 20,
            itemStyle: {
              barBorderRadius: [10, 10, 0, 0],
              color: this.isDiffColor
                ? params => {
                    return this.color[params.dataIndex % 6];
                  }
                : "rgba(80, 254, 202, 1)"
            }
          })
          yAxis.push({
            type: "value",
            name: this.legendDatas ? this.legendDatas[index] : "",
            nameTextStyle: {
              color: "rgba(93, 98, 120, 1)",
              fontSize: fontSize(0.12)
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisLabel: {
              color: "#5D6278",
              fontSize: fontSize(0.12),
              formatter: "{value}"
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisTick: {
              show: false
            }
          })
        }
      });
      this.defaultOptions = {
        grid: {
          top: "20%",
          bottom: "20%",
          left: "20%",
          right: "15%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [{
          type: 'inside',
          endValue:5,
          minValueSpan:3,
        }],
        legend: {
          show: false,
          top: "0",
          right: fontSize(0.5),
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 20,
          textStyle: {
            color: "#FFF",
            fontSize: fontSize(0.12)
          },
          data: this.legendDatas
        },
        xAxis: [
          {
            type: "category",
            axisPointer: {
              type: "shadow"
            },
            nameTextStyle: {
              color: "rgba(93, 98, 120, 1)",
              fontSize: fontSize(0.12)
            },
            splitLine: {
              normal: {
                show: false
              }
            },
            axisLabel: {
              interval: 0,
              color: "#5D6278",
              fontSize: fontSize(0.12)
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: xName
          }
        ],
        yAxis: yAxis,
        series: series
      };
      this.merge();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
