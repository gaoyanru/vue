import Index from '../views/index' // 普通路由加载
export default {
  routes: [
    {path: '/', name: 'index', props: { name: 'name' }, component: Index}
  ]
}
