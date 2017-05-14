import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'
Vue.use(VueRouter)

var router = new VueRouter(routerConfig)

new Vue({
  router
}).$mount('#root')
