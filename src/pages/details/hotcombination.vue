<template>
  <div class="combination">
    <div class="old-tickets">
      <div class="tickets-title">
        <span class="iconfont tickets-icon">&#xe683;</span>
        <span tickets-info>热销组合产品</span>
      </div>
      <div class="morning-session">
        <span class="time">上午场</span>
        <span class="info">凭身份证入园</span>
        <span class="price">￥20</span><span class="start">起</span>
        <span class="iconfont xiala-icon">&#xe610;</span>
      </div>
      <div class="afternoon-session">
        <span class="time">下午场</span>
        <span class="info">凭身份证入园</span>
        <span class="price">￥20</span><span class="start">起</span>
        <span class="iconfont xiala-icon">&#xe610;</span>
      </div>
      <div class="residue-session" @click="handleClick" v-show="isHidden">
        <span class="residue">查看剩余产品</span>
        <span class="iconfont xiala-icon">&#xe610;</span>
      </div>
      <div class="other-product" v-show="isShow" @click="handleApper">
        <span class="time">钟表馆</span>
        <span class="info">凭身份证入园</span>
        <span class="price">￥66</span><span class="start">起</span>
        <span class="iconfont xiala-icon">&#xe610;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-OldTickets',
  data () {
    return {
      isShow: false,
      isHidden: true
    }
  },
  methods: {
    handleClick () {
      this.isShow = !this.isShow
      this.isHidden = !this.isHidden
    },
    handleApper () {
      this.isShow = !this.isShow
      this.isHidden = !this.isHidden
    }
  }
}
</script>

<style lang="stylus" scoped>
  .combination
    position: relative
    .old-tickets
      height: 3.26rem
      background: #fff
      padding: 0 .24rem
      .tickets-title
        height: .8rem
        font-size: .3rem
        line-height: .8rem
        border-bottom: 1px solid #dbdbdb
        .tickets-icon
          color: #00bcd5
      .morning-session
        height: .8rem
        line-height: .8rem
        position: relative
        border-bottom: 1px solid #dbdbdb
        .time
          font-size: .3rem
          margin-right: .12rem
        .info
          color: #8e8e8e
          font-size: .24rem
          margin-right: 3rem
        .price
          color: #f9a811
          font-size: .3rem
        .start
          color: #8e8e8e
        .xiala-icon
          top: .02rem
          color: #8e8e8e
          font-size: .4rem
          position: absolute
      .afternoon-session
        height: .8rem
        line-height: .8rem
        position: relative
        border-bottom: 1px solid #dbdbdb
        .time
          font-size: .3rem
          margin-right: .12rem
        .info
          color: #8e8e8e
          font-size: .24rem
          margin-right: 3rem
        .price
          color: #f9a811
          font-size: .3rem
        .start
          color: #8e8e8e
        .xiala-icon
          top: .02rem
          color: #8e8e8e
          font-size: .4rem
          position: absolute
      .residue-session
        height: .8rem
        color: #717171
        font-size: .3rem
        line-height: .8rem
        text-align: center
      .other-product
        left: 0
        bottom: 0
        z-index: 100
        height: .8rem
        line-height: .8rem
        position: absolute
        padding-left: .24rem
        border-bottom: 1px solid #dbdbdb
        .time
          font-size: .3rem
          margin-right: .12rem
        .info
          color: #8e8e8e
          font-size: .24rem
          margin-right: 3rem
        .price
          color: #f9a811
          font-size: .3rem
        .start
          color: #8e8e8e
        .xiala-icon
          color: #8e8e8e
          font-size: .4rem
          margin-left: -.06rem
</style>

