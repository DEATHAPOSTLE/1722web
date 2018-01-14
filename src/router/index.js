import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Order from '@/pages/Order'
import City from '@/pages/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
