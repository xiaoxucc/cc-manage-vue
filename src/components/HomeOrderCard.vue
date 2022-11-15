<template>
  <div class="card_container">
    <el-card shadow="hover" v-for="item in cardData" :key="item.name"
      :body-style="{ display: 'flex', minWidth: '220px', padding: 0, cursor: 'pointer' }">
      <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
      <div class="detail">
        <p class="value">￥<countTo :duration='1500' :endVal="item.value"></countTo></p>
        <p class="name">{{ item.name }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  props: {
    cardData: {
      type: Array,
      default: () => { [] }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}

.card_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.el-card {
  margin-bottom: 20px !important;
  margin-left: 20px !important;
}

.icon {
  width: 80px;
  height: 80px;
  font-size: 30px;
  text-align: center;
  line-height: 80px;
  color: #fff;
}

.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;

  .value {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .name {
    color: #999;
    font-size: 13px;
  }
}
</style>
