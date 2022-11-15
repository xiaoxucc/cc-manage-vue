<template>
  <div>
    <el-card class="box_card" shadow="hover">
      <el-table size="medium" :data="tableData" height="250">
        <el-table-column v-for="item in tableProps" :prop="item.prop" :key="item.prop" :label="item.label"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => { [] }
    }
  },
  data() {
    return {
      tableProps: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' },
      ],
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>

</style>
