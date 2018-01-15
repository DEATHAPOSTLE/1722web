<template>
  <div class="description">
    <div class="address">
      <span class="iconfont location-icon">&#xe622;</span>
      <span class="address-info">北京市东城区景山前街4号</span>
      <span class="iconfont more-icon">&#xe620;</span>
    </div>
    <div class="intro">
      <span class="iconfont picture-icon">&#xe63d;</span>
      <span class="intro-info">查看景点简介及开放时间</span>
      <span class="iconfont more-icon">&#xe620;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-description'
}
</script>

<style lang="stylus" scoped>
  .description
    width: 100%
    z-index: 10
    height: 1.8rem
    position: relative
    background: #fff
    margin-top: -.12rem
    border-radius: .1rem .1rem 0 0
    .address
      height: .9rem
      font-size: .26rem
      padding: 0 .24rem 
      line-height: 1.02rem
      border-bottom: 1px solid #e7e7e7
      .location-icon
        color: #c6c6c6
        margin-right: .26rem
      .address-info
        margin-right: 2.97rem
      .more-icon
        color: #c6c6c6
    .intro
      height: .88rem
      font-size: .26rem
      padding: 0 .24rem
      line-height: .88rem
      .picture-icon
        color: #c6c6c6
        margin-right: .26rem
      .intro-info
        margin-right: 3.11rem
      .more-icon
        color: #c6c6c6
    
</style>

