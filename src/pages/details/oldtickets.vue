<template>
  <div class="tickets">
    <div class="old-tickets">
      <div class="tickets-title">
        <span class="iconfont tickets-icon">&#xe683;</span>
        <span tickets-info>故宫老人票</span>
      </div>
      <div class="morning-session" @click="handleShow">
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
        <span class="time">珍宝园</span>
        <span class="info">凭身份证入园</span>
        <span class="price">￥60</span><span class="start">起</span>
        <span class="iconfont xiala-icon">&#xe610;</span>
      </div>
      <div class="recommend-one" v-show="isAppear">
        <div class="one-left">
          <p class="p-one">【上午场】故宫成人票+故宫全景手绘</p>
          <p class="p-two">地图</p>
          <div class="one-bottom">
            <span class="iconfont time-icon">&#xe61c;</span>
            <span class="time-info">可定明日</span>
            <span class="iconfont warn-icon">&#xe61c;</span>
            <span class="warn-info">不可退</span>
          </div>
        </div>
        <div class="one-right">
          <p class="one-price">
            ￥20
          </p>
          <div class="btn">预定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-oldtickets',
  data () {
    return {
      isShow: false,
      isHidden: true,
      isAppear: false
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
    },
    handleShow () {
      this.isAppear = !this.isAppear
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tickets
    position: relative
    border-bottom: 0.22rem solid #f5f5f5
    .old-tickets
      height: 3.26rem
      background: #fff
      padding: 0 .24rem
      .recommend-one
        top: 1.56rem
        display: flex
        height: 1.67rem
        background: #f5f5f5
        position: absolute
        padding: .18rem 0
        border-bottom: 1px solid #d7d7d7
        .one-left
          height: 100%
          width: 5.27rem
          font-size: .3rem
          padding-left: -0.4rem
          border-right: 1px solid #d7d7d7
          .p-one
            margin-bottom: .2rem
          .p-two
            margin-bottom: .33rem
          .one-bottom
            font-size: .28rem
            .time-icon
              color: #a6ded1
              padding-right: .12rem
            .time-info
              color: #737373
              padding-right: .3rem
            .warn-icon
              color: #bba39f
              padding-right: .12rem
            .warn-info
              color: #737373
        .one-right
          height: 100%
          width: 1.6rem
          font-size: .24rem
          margin-left: .2rem
          padding-top: .4rem
          text-align: center
          .one-price
            color: #ff9700
            margin-bottom: .08rem
          .btn
            color: #fff
            background: #ff9700
            border-radius: .1rem
            padding: .2rem .5rem
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

