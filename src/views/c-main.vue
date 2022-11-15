<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader />
        </el-header>
        <CommonTag />
        <div class="content-padding">
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    CommonAside,
    CommonHeader: () => import('@/components/CommonHeader'),
    CommonTag: () => import('@/components/CommonTag'),
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}

.content-padding {
  padding: 20px 0 0 20px;
}
</style>
