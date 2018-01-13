<template>
  <div>
    <order-header></order-header>
    <order-title></order-title>
  	<order-date></order-date>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from './header'
import OrderTitle from './title'
import OrderDate from './date'
import OrderFooter from './footer'
import 'assets/css/order-html-bg.css'
export default {
  name: 'order',
  components: {
    OrderHeader,
    OrderTitle,
    OrderDate,
    OrderFooter
  }
}
</script>

<style lang="stylus" scoped></style>
