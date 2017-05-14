import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    num: 5
  },
  mutations: {
    // @add@subtract事件类型 后面是 回调函数
    add: (state, num) => { state.count += num },
    subtract: state => state.count--
  },
  getters: {

  },
  actions: {
    // 提交改变mutation
    addAction: (context, num) => {
      const { commit } = context // 解耦
      commit('add', num)
    }
  }
})
