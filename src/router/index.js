import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/c-home'
import User from '@/views/c-user'
import Main from '@/views/c-main'
// 重写其push方法
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	// return originalPush.call(this, location).catch(() => window.location.reload());
	return originalPush.call(this, location).catch(err => err);
}
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      { path: 'home', name: 'home', component: Home },
      { path: 'user', name: 'user', component: User },
      { path: 'mall', name: 'mall', component: () => import('@/views/c-mall') },
      { path: 'page1', name: 'page1', component: () => import('@/views/c-page-one') },
      { path: 'page2', name: 'page2', component: () => import('@/views/c-page-two') },
    ]
  }
]

const router = new Router({
  routes
})

export default router