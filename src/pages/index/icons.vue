<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pageList" :key="index">
        <div class="area-con">
          <div class="area-item" v-for="item of page" :key="item.id">
            <img class="area-img" :src="item.imgUrl" alt="">
            <p class="area-desc">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="icons-location">
      <div class="loca">
        <span class="iconfont">&#xe642;</span>
        定位失败
      </div>
      <div class="discount">
        <span class="iconfont">&#xe628;</span>
        5折泡温泉
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'index-icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pageList () {
      const pages = []
      this.list.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    height: 5rem
    overflow: hidden
    background: #fff
    .area-con
      display: flex
      flex-wrap: wrap
      height: 4rem
      .area-item
        width: 25%
        height:1.7rem
        .area-img
          display: block
          margin: .4rem auto .2rem auto
          width: .66rem
          height: .66rem
        .area-desc
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          line-height: .44rem
          text-align: center
    .icons-location
      height: 1rem
      border-top: 1px solid #f0f0f0
      display: flex
      .loca
        line-height: 1rem
        text-align: center
        width: 49%
        border-right: 1px solid #f0f0f0
      .discount
        line-height: 1rem
        text-align: center
        width: 49%
        border-right: 1px solid #f0f0f0    
  .swiper-pagination
        bottom: 5px
</style>