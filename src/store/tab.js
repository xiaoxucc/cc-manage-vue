export default {
  state: {
    isCollapse: false,  //控制菜单栏的展开收起
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      },
    ], //面包屑数据
  },
  mutations: {
    // 修改菜单栏展开收起
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    updateTabsList(state, item) {
      if (item.name !== 'home') {
        const index =state.tabsList.findIndex(tabItem => tabItem.name === item.name)
        if (index === -1) {
          state.tabsList.push(item)
        }
      }
    },
    closeTag(state, tag) {
      // console.log(tag);
      const index = state.tabsList.findIndex(item => item.name === tag.name)
      state.tabsList.splice(index, 1)
    },
  }
}