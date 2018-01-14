<template>
  <div class="swiper" @touchmove.prevent @scroll.prevent v-show="isShow" @click="handleHidden">
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
        paginationType: 'fraction',
        initialSlide: 1
      },
      isShow: false
    }
  },
  created () {
    this.handleBindEvents()
  },
  methods: {
    handleBindEvents () {
      this.$bus.$on('change', this.handleShowChange.bind(this))
    },
    handleShowChange () {
      this.isShow = true
    },
    handleHidden () {
      this.isShow = false
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
    position: fixed
    background: #000
    .swiper-pagination
      color: #fff
    .pos
      width: 100%
      height: 6.6rem
      margin-top: 45%
      overflow: hidden
      .swiper-img
        width: 10rem
        height: 6.6rem
        margin-left: -1.5rem       
</style>
