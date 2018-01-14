<template>
  <div class="reco">
    <h2 class="caption">周末去哪儿</h2>
    <div class="reco-link" v-for="item of list">
      <img  class="reco-img" :src="item.imgUrl" alt="">
      <div class="reco-content">
        <p class="reco-title">{{item.title}}</p>
        <p class="reco-desc">{{item.desc}}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-recommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .caption
    height: .8rem
    line-height:.8rem
    padding-left: .25rem
  .reco-link
    height: 4.04rem
    background: #fff
    .reco-img
      height: 2.84rem
    .reco-content
      padding: 0.14rem 0.2rem 0.2rem 0.2rem
      .reco-title
        overflow: hidden
        line-height: 0.48rem
        font-size: 0.28rem
        font-weight: 900
        padding-right: 0.4rem
        white-space: nowrap
        text-overflow: ellipsis
      .reco-desc
        overflow: hidden
        line-height: 0.42rem
        font-size: 0.24rem
        padding-right: 0.3rem
        white-space: nowrap
        text-overflow: ellipsis
        color: #333
        
      
      
</style>