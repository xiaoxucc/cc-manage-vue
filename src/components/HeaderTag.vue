<template>
  <div class="breadcrumb_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  mounted() {
    // console.log(this.tags);
  },
}
</script>

<style lang="less" scoped>
/deep/.el-breadcrumb__item {
  .el-breadcrumb__inner {
    font-weight: normal;
    &.is-link {
      color: #666;
    }
  }
  &:last-child{
    .el-breadcrumb__inner{
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
