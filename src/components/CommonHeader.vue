<template>
  <div class="header_container">
    <div class="left_content">
      <!-- <el-button @click="handleClick" :icon="iconName" size="mini"></el-button> -->
      <i @click="handleClick" :class="iconName" class="iconBack"></i>
      <div class="url_text">
        <HeaderBreadcrumb />
      </div>
    </div>
    <div class="right_content">
      <el-dropdown>
        <!-- <el-image style="width: 100px; height: 100px" src="../assets/images/cc.jpg"></el-image> -->
        <img class="url_img" src="../assets/images/cc.jpg">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    HeaderBreadcrumb: () => import('@/components/HeaderBreadcrumb.vue')
  },
  data() {
    return {
    }
  },
  computed: {
    iconName() {
      return this.$store.state.tab.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('changeCollapse')
    },
    
  }
}
</script>

<style lang="less" scoped>
.header_container {
  padding: 0 20px;
  height: 60px;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left_content{
    display: flex;
    justify-content: center;
    align-items: center;
    .iconBack{
      font-size: 23px;
    }
    .url_text {
    font-size: 12px;
    margin-left: 10px;
    line-height: 23px;
  }
  }

  .url_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
