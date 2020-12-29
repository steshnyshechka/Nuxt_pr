import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Info from './pages/info'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'info',
        path: '/info',
        component: Info
      },
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  })
}