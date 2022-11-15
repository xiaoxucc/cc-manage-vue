<template>
  <div class="histogram_container">
    <el-card shadow="hover" :style="{ height: height, width: width }">
      <div ref="histogramChart" :style="{ height: height }"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    histogramData: {
      type: Array,
      default: () => { [] }
    },
    height: {
      type: String,
      default: '200px',
    },
    width: {
      type: String,
      default: '350px',
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    const histogramChart = echarts.init(this.$refs.histogramChart)
    const adata = this.histogramData.map(item => item.active)
    const ndata = this.histogramData.map(item => item.new)
    const xAxis = this.histogramData.map(item => item.date)
    const option = {}
    option.tooltip = {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    option.xAxis = { data: xAxis }
    option.legend = {}
    option.yAxis = {}
    option.series = [
      {
        name: '活跃用户',
        data: adata,
        type: 'line',
        
      },
      {
        name: '新增用户',
        data: ndata,
        type: 'bar',
      }
    ]
    histogramChart.setOption(option)
  },
}
</script>

<style lang="less" scoped>

</style>
