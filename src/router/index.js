import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/City'
import Citychina from '../views/city/pages/Citychina.vue'
import Cityout from '../views/city/pages/Cityout.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
