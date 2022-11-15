<template>
  <div class="home_container">
    <el-row>
      <el-col :span="8">
        <HomeLoginInfo />
        <HomeTable v-if="showChildren" :tableData="tableData" style="margin-top: 20px;" />
      </el-col>
      <el-col :span="16">
        <HomeOrderCard v-if="showChildren" :cardData="cardData" />
        <div style="padding-left: 20px">
          <HomeLineChart v-if="showChildren" :lineChartData="lineChartData" />
          <div style="display: flex; margin-top: 20px; justify-content: space-between;">
            <HomeHistogramChart v-if="showChildren" :histogramData="histogramData" />
            <HomePieChart v-if="showChildren" :pieData="pieData" style="margin-left: 20px;" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "@/api/index";
export default {
  data() {
    return {
      tableData: [],
      cardData: [],
      lineChartData: {},
      histogramData: [],
      pieData: [],
      showChildren: false,
    }
  },
  components: {
    HomeLoginInfo: () => import('@/components/HomeLoginInfo.vue'),
    HomeTable: () => import('@/components/HomeTable.vue'),
    HomeOrderCard: () => import('@/components/HomeOrderCard.vue'),
    HomeLineChart: () => import('@/components/HomeLineChart.vue'),
    HomeHistogramChart: () => import('@/components/HomeHistogramChart.vue'),
    HomePieChart: () => import('@/components/HomePieChart.vue'),
  },
  mounted() {
    getData().then(({data}) => {
      this.tableData = data.tableData
      this.cardData = data.cardData
      this.lineChartData = data.lineData
      this.histogramData = data.userData
      this.pieData = data.videoData
      this.showChildren = true
    })
  },
}
</script>

<style lang="less" scoped>
</style>
