<template>
  <div class="comment">
    <div class="comment-info">
      <span class="iconfont smile-icon">&#xe61b;</span>
      <span class="iconfont score-icon">&#xe61d;</span>
      <span class="comment-score">5.0分</span>
      <span class="comment-num">175170评论</span>
      <span class="iconfont more-icon">&#xe620;</span>
    </div>
    <div class="comment-notice">
      <span class="iconfont broadcast-icon">&#xe621;</span>
      <span class="notice-info">除法定节假日，故宫博物院实行周一闭馆。</span>
      <span class="iconfont more-icon">&#xe620;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-comment'
}
</script>

<style lang="stylus" scoped>
  .comment
    height: 1.86rem
    background: #f5f5f5
    padding: .22rem 0
    .comment-info
      height: .82rem
      background: #fff
      padding: 0 .24rem
      line-height: .82rem
      margin-bottom: .22rem
      .smile-icon
        color: #00b9bb
        margin-right: .2rem
      .score-icon
        color: #ffb423
        margin-right: .1rem
      .comment-score
        color: #ffb423
        font-size: .25rem
        margin-right: 1.5rem
      .comment-num
        color: #c6c6c6
      .more-icon
        color: #c6c6c6
    .comment-notice
      height: .82rem
      padding: 0 .24rem
      font-size: .26rem
      line-height: .82rem
      background: #fbefe1
      .broadcast-icon
        color: #f97755
        margin-right: .12rem
      .notice-info
        color: #dc5132
        margin-right: 1.17rem
      .more-icon
        color: #c6c6c6
</style>

