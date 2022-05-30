import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入重置样式表
import './assets/styles/reset.css'
//解决1px边框问题
import './assets/styles/border.css'
//引入fastclick，解决移动端点击延时
import fastClick from 'fastclick'
//引入iconfont
import './assets/styles/iconfont.css'
//引入全局swiper样式
import 'swiper/css/swiper.css'
// import 'default-passive-events'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')
