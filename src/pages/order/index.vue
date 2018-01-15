<template>
  <div>
    <order-header></order-header>
    <order-title></order-title>
    <order-date></order-date>
    <order-number @showCount="updateCount"></order-number>
    <order-visitor></order-visitor>
    <order-more :count="count"></order-more>
  	<order-tel></order-tel>
    <order-footer :count="count"></order-footer>
  </div>
</template>

<script>
import OrderHeader from './header'
import OrderTitle from './title'
import OrderDate from './date'
import OrderNumber from './number'
import OrderVisitor from './visitor'
import OrderMore from './more'
import OrderTel from './tel'
import OrderFooter from './footer'
import 'assets/css/order-html-bg.css'
export default {
  name: 'order',
  components: {
    OrderHeader,
    OrderTitle,
    OrderDate,
    OrderNumber,
    OrderVisitor,
    OrderMore,
    OrderTel,
    OrderFooter
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    updateCount (count) {
      this.count = count
    }
  }
}
</script>

<style lang="stylus" scoped></style>
