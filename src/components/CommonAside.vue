<template>
  <div>
    <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#409EFF">
      <h3>{{ isCollapse ? 'CC' : 'CC后台管理系统' }}</h3>
      <el-menu-item @click="handleMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="childrenItem in item.children" :key="childrenItem.name">
          <el-menu-item @click="handleMenu(childrenItem)" :index="childrenItem.name">
            <i :class="`el-icon-${childrenItem.icon}`"></i>
            <span slot="title">{{ childrenItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'menu',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user-solid',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          name: 'other',
          icon: 's-data',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '其他页面1',
              icon: 'search',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '其他页面2',
              icon: 'monitor',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  computed: {
    // 过滤菜单分为有无子菜单两种
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    hasChildren() {
      return this.menuData.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenu(item) {
      this.$router.push(item.path)
      this.$store.commit('updateTabsList', item)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
  border-right: none;

  h3 {
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
}
</style>
