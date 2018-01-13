<template>
  <div class="swiper" @touchmove.prevent @scroll.prevent>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
          <div class="pos">
            <img class="swiper-img" :src="item.imgUrl">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'details-swiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperList: [],
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 100
    background: #000
    position: absolute
    display: none
    .swiper-pagination >>> .swiper-pagination-current
      font-size: .28rem
    .swiper-pagination >>> .swiper-pagination-total
      font-size: .28rem
    .pos
      width: 100%
      height: 6.6rem
      overflow: hidden
      margin-top: 45%
      .swiper-img
        height: 6.6rem
        width: 10rem
        margin-left: -1.5rem 
        
</style>
