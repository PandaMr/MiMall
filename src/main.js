import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueLazyload, {
  loading: './assets/images/loading.svg'
})

const mock = true;
if(mock){
  require('./mock/api.js')
}
// 接口的默认地址
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 18000;
// 拦截响应 接口错误拦截
// axios.interceptors.response.use((response)=>{
//   let res = response.data;
//   console.log(res);
//   if(res.status == 0 || res.status == 200){
//     return res.data;
//   }else if(res.status == 10){
//     window.location.href = '/login'
//   }else{
//     // alert(res.msg);
//     console.log('拦截响应，状态码错误');
//   }
// });

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
