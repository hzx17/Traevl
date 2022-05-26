import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
