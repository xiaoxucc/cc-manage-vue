<template>
  <div class="pie_container">
    <el-card shadow="hover" :style="{ height: height, width: width }">
      <div ref="pieChart" :style="{ height: height }"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    pieData: {
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
    const pieChart = echarts.init(this.$refs.pieChart)
    const option = {
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      // },
      series: [
        {
          name: '今日销售量',
          type: 'pie',
          radius: ['10%', '80%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          // label: {
          //   show: false,
          // },
          data: this.pieData
        }
      ]
    };
    pieChart.setOption(option)
  },
}
</script>

<style lang="less" scoped>

</style>
