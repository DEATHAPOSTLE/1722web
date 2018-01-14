<template>
  <div class="hot">
    <h2 class="caption">热销推荐</h2>
    <div class="hot-item" v-for="item of list" :key="item.id">
      <img class="hot-img" :src="item.imgUrl" alt="">
      <div class="hot-content">
        <p class="hot-title">{{item.title}}</p>
        <p class="hot-desc">
          {{item.desc}}
        </p>
        <p class="hot-price">
          <span class=" iconfont price-tag">&#xe635;</span>{{item.price}}
          <span class="price-start">起</span>
        </p>
      </div>
    </div>
    <div class="hot-more">
      查看所有产品
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-hot',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/varibles.styl";
    .caption
      height: .8rem
      line-height:.8rem
      padding-left: .25rem
    .hot-item
      display: flex
      height: 1.86rem
      border-bottom: 1px solid #e0e0e0
      background: #fff
      .hot-img
        width: 1.4rem
        height: 1.4rem
        margin: auto .25rem
      .hot-content
        flex: 1
        .hot-title
          margin: .25rem  0 .2rem
        .hot-desc
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          color: #ccc
        .hot-price
          margin-top: .27rem
          font-size: .36rem
          color: #f2a552
          .price-tag
            font-size: .28rem
          .price-start
            font-size: .28rem
            color: #ccc
    .hot-more
      height:0.88rem
      line-height: 0.88rem
      text-align: center
      background: #fff
      color: $bgColor      
          
</style>