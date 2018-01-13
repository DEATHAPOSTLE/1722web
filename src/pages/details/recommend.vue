<template>
  <div class="recommend">
    <div class="qunar-recommend">
      <div class="icon-box clearfix">
        <span class="iconfont dianzan-icon">&#xe692;</span>
      </div>
      <span class="recommend-title">去哪儿推荐</span>
    </div>
    <div class="recommend-one">
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
          ￥50
        </p>
        <div class="btn">预定</div>
      </div>
    </div>
    <div class="recommend-two">
      <div class="one-left">
        <p class="p-one">【北京深度旅游必选】故宫+天安门+王</p>
        <p class="p-two">府井/八达岭/颐和园</p>
        <div class="one-bottom">
          <span class="iconfont time-icon">&#xe61c;</span>
          <span class="time-info">可定明日</span>
          <span class="iconfont warn-icon">&#xe61c;</span>
          <span class="warn-info">不可退</span>
        </div>
      </div>
      <div class="one-right">
        <p class="one-price">
          ￥27<span class="start">起</span>
        </p>
        <div class="btn">查看</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-recommend'
}
</script>

<style lang="stylus" scoped>
  .recommend
    border-bottom: .22rem solid #f5f5f5
    .qunar-recommend
      height: .88rem
      position: relative
      line-height: .88rem
      padding-left: .24rem
      border-bottom: 1px solid #d7d7d7
      .icon-box
        top: .18rem
        width: .5rem
        height: .5rem
        position: absolute
        background: #fb6277
        border-radius: .25rem
        .dianzan-icon
          left: .1rem
          color: #fff
          top: -.16rem
          position: absolute
      .recommend-title
        font-size: .3rem
        padding-left: .72rem 
    .recommend-one
      display: flex
      height: 1.67rem
      padding: .18rem .24rem
      border-bottom: 1px solid #d7d7d7
      .one-left
        height: 100%
        width: 5.27rem
        font-size: .3rem
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
          padding: .18rem .52rem
    .recommend-two
      display: flex
      height: 1.67rem
      padding: .18rem .24rem
      .one-left
        height: 100%
        width: 5.27rem
        font-size: .3rem
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
          .start
            color: #b4b4b4
        .btn
          color: #fff
          background: #ff9700
          border-radius: .1rem
          padding: .18rem .52rem
</style>

