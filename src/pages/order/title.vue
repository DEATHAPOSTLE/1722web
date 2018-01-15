<template>
  <div class="title">
    <div class="title_left">
      <h2>【上午场】故宫成人票+故宫全景手绘地图</h2>
      <div class="title_time">
        <span class="iconfont time">&#xe633;</span>
        <span class="today">{{dateResult}}</span>
        <span class="iconfont warning">&#xe619;</span>
        <span class="warning_msg">不可退</span>
      </div>
    </div>
    <div class="title_right">
      <div class="title_price">
        <span class="title_price_logo">￥</span>
        <span class="title_price_one">50</span>
        /张
      </div>
      <p class="title_p">预订须知</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-title',
  data () {
    return {
      dateResult: ''
    }
  },
  methods: {
    getDate: function () {
      const date = new Date()
      this.dateResult = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
  },
  created () {
    this.getDate()
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .title
    display: flex
    height: 1.45rem
    padding: .2rem .2rem 0 .2rem
    justify-content: space-between
    margin-bottom: .2rem
    background: #fff
    border-bottom: 0.01rem solid #e0e0e0
    .title_left
      h2
        height: .88rem
        margin-bottom: 0.04rem
        font-size: .32rem
        line-height: .44rem
      .title_time
        .time
          font-size: .22rem
          color: $bgColor
        .today
          font-size: .24rem
          color: #616161
        .warning
          margin-left: .2rem
          font-size: .22rem
          color: #ff3a2b
        .warning_msg
          font-size: .24rem
          color: #616161
    .title_right
      width: 2rem
      text-align: right
      .title_price
        font-size: .24rem
        color: #9e9e9e
        .title_price_logo
          color: #ff8300
        .title_price_one
          font-size: .4rem
          color: #ff8300
      .title_p
        margin-top: 0.16rem
        line-height: .28rem
        font-size: .28rem
        font-weight: 900
        color: $bgColor
</style>
