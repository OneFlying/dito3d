import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dito3d/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
