import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index' // 普通路由加载
import Page2 from '../views/page2'

Vue.use(VueRouter)

const routerConfig = {
  routes: [
    {path: '/', name: 'index', props: { name: 'name' }, component: Index},
    {path: '/page2', component: Page2}
  ]
}
export default new VueRouter(routerConfig)
