<template>
  <div class="line_chart_container">
    <el-card shadow="hover" :style="{ height: height }">
      <div ref="lineChart" :style="{ height: height }"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    lineChartData: {
      type: Object,
      default: () => { }
    },
    height: {
      type: String,
      default: '230px'
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    const lineChart = echarts.init(this.$refs.lineChart)
    const xAxis = Object.keys(this.lineChartData.data[0])
    const option = {}
    option.tooltip = {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    option.xAxis = { data: xAxis }
    option.yAxis = {}
    option.legend = { data: xAxis }
    option.series = []
    xAxis.forEach(key => {
      option.series.push({
        name: key,
        data: this.lineChartData.data.map(item => item[key]),
        type: 'line',
        smooth: true
      })
    })
    lineChart.setOption(option)
  }
}
</script>

<style lang="less" scoped>

</style>
