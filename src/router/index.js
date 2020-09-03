import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 避免重复点击同一菜单报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash',

  // 防止跳转页面后 记录滚动距离
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0,
      }
    }
  },
})

// 动态设置页面title
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
