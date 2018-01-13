<template>
  <div class="header">
  	<div class="iconfont back">&#xe625;</div>
    <div class="header-title">订单填写</div>
    <div class="login">登录</div>
  </div>
</template>

<script>
export default {
  name: 'order-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: 0.88rem
    line-height: .88rem
    text-align: center
    background: $bgColor
    color: #fff
    .back
      width: .8rem
      font-weight: 900
    .header-title
      flex: 1
      font-size: .32rem
    .login
      width: 1rem
      
</style>
