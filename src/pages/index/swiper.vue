<template>
  <div class="slide-contanier ">
   <swiper :options="swiperOption">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="slide-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-swiper',
    props: {
      list: Array
    },
    data () {
      return {
        swiperList: [],
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .slide-img
    width: 100%
  .slide-contanier
    overflow: hidden
    height: 0
    padding-bottom: 31.25%
  .swiper-pagination >>>
    .swiper-pagination-bullet-active
      background:#fff
</style>