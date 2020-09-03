const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
    meta: {
      title: '首页 vue-init',
    },
  },
  {
    path: '/news-list',
    name: 'news-list',
    component: () =>
      import(/* webpackChunkName: "news-list" */ '@/views/news-list'),
    meta: {
      title: '新闻列表',
    },
  },
  {
    path: '/news-list-detail',
    name: 'news-list-detail',
    component: () =>
      import(
        /* webpackChunkName: "news-list-detail" */ '@/views/news-list-detail'
      ),
    meta: {
      title: '新闻详情',
    },
  },
]
export default routes
