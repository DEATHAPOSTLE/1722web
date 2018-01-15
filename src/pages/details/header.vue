<template>
  <div class="header">
    <div class="header-wrap" @click="handleClick">
        <img class="header-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
    </div>
    <div class="header-info">
      <div class="header-title">故宫(AAAAA景区)</div>
      <div class="header-imgicon">
        <span class="iconfont picture-icon">&#xe63d;</span>
        <em class="img-number">10</em>
      </div>
    </div>
    <router-link to="/">
      <div class="header-black">
        <span class="black-bg"></span>
        <span class="iconfont black-icon">&#xe625;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'details-header',
  methods: {
    handleClick () {
      this.$bus.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    height: 4.02rem
    position: relative
    .header-wrap
      height: 100%
      .header-img
        width: 100%
        height: 100%
    .header-info
        left: .2rem
        right: .2rem
        bottom: .2rem
        display: flex
        position: absolute
        justify-content: space-between
        .header-title
          z-index: 1
          color: #fff
          font-size: .32rem
          line-height: .4rem
        .header-imgicon
          color: #fff
          height: .4rem
          width: 1.2rem
          font-size: .24rem
          text-align: center
          line-height: .4rem
          border-radius: .2rem
          background: rgba(0,0,0,.5)
          .iconfont
            font-size: .24rem
          .img-number
            color: #fff;
            font-size: .24rem
            line-height: .4rem
            text-align: center
    .header-black
      top: .1rem
      left: .1rem
      width: .72rem
      height: .72rem
      position: absolute
      line-height: .72rem
      .black-bg
        opacity: .5
        width: .72rem
        height: .72rem
        display: block
        border-radius: .36rem
        background-color: #000
      .black-icon
        position: absolute
        top: 0
        left: 0
        color: #fff
        width: .72rem
        display: block
        font-weight: bold
        text-align: center
        line-height: .72rem
</style>

