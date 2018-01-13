import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details'
import Order from '@/pages/Order'
import City from '@/pages/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'Details',
      component: Details
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
