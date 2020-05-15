import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing'
import Financial from '@/views/Financial'
import Technical from '@/views/Technical'
import $ from 'jquery'
import niceScroll from 'jquery.nicescroll'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/financial',
    name: 'Financial',
    component: Financial
  },
  {
    path: '/technical',
    name: 'Technical',
    component: Technical
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
