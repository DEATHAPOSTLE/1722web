<template>
  <div class="footer">
    <div class="footer_left">
      产品价格￥
      <span>{{count * 50}}</span>
    </div>
    <div class="footer_right">提交订单</div>
  </div>
</template>

<script>
export default {
  name: 'order-footer',
  props: {
    count: Number
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .footer
    display: flex
    width: 100%
    height: .98rem
    position: fixed
    bottom: 0
    left: 0
    border-top: 0.02rem solid #e0e0e0
    background: #fff
    .footer_left
      flex: 1
      height: 100%
      margin-left: .21rem
      font-size: .24rem
      line-height: 1rem
      color: #ff8300
      span
        font-size: .48rem
    .footer_right
      width: 50%
      text-align: center
      font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif
      color: #fff
      background: #ff9800
</style>
