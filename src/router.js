import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './pages/Inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/busquedas',
      name: 'busquedas',
      component: () =>
        import(/* webpackChunkName: "Busquedas" */ './pages/Busquedas.vue')
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: () =>
        import(/* webpackChunkName: "Ventas" */ './pages/Ventas.vue')
    },
    {
      path: '/total',
      name: 'total',
      component: () =>
        import(/* webpackChunkName: "Total" */ './pages/Total.vue')
    }
  ]
})
