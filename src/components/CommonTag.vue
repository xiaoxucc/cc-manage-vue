<template>
  <div class="container">
    <el-tag v-for="(tag, tagIndex) in tags" size="small" :key="tag.path" :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'" @click="handleTag(tag)" @close="handleClose(tag, tagIndex)">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: 'CommonTag',
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
  },
  methods: {
    ...mapMutations(['closeTag']),
    handleTag(tag) {
      // console.log(tag);
      this.$router.push({ name: tag.name })
    },
    handleClose(tag, tagIndex) {
      // console.log({tag, tagIndex});
      const tagsLength = this.tags.length - 1
      this.closeTag(tag)
      if (tag.name !== this.$route.name) return
      tagIndex === tagsLength ? this.$router.push({ name: this.tags[tagIndex - 1].name }) : this.$router.push({ name: this.tags[tagIndex].name })
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: 5px 20px;
  .el-tag{
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
