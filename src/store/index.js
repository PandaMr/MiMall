import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享状态 对象
  state: {
    username: '',
    cartCount: 0
  },
  // state 状态操作方法
  mutations: {
    saveUsername(state, username){
      state.username = username;
    },
    saveCartCount(state, count){
      state.cartCount = count;
    }
  },
  // 一步操作，最终提交mutations中的方法
  actions: {
    saveUsername(context, username){
      context.commit('saveUsername', username)
    },
    saveCartCount(context, count){
      context.commit('saveCartCount', count);
    }
  },
  // 模块化状态管理
  modules: {
  }
})
