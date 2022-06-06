import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/City'
import Citychina from '../views/city/pages/Citychina.vue'
import Cityout from '../views/city/pages/Cityout.vue'
import Detail from '../views/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home
  },
  {
    path: '/city',
    name: '城市',
    component: City,
    children:[{
      name:'境内城市',
      path:'china',   //此处一定不要写/news，因为他会默认为你添加一个/
      component:Citychina,
    },
    {
      name:'境外城市',
      path:'out',   //此处一定不要写/news，因为他会默认为你添加一个/
      component:Cityout,
    }]
  },
  {
    path: '/detail/:id',
    name: '详情页',
    component: Detail
  },
]

const router = new VueRouter({
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   // 始终滚动到顶部
  //   return { top: 0 }
  // },
})

export default router
