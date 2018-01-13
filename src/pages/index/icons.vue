<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="area-con">
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
          <div class="area-item">
            <img class="area-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
            <p class="area-desc">故宫</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>2</div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
  
</template>

<script>
export default {
  name: 'index-icons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    height: 3.8rem
    overflow: hidden
    .area-con
      display: flex
      flex-wrap: wrap
      .area-item
        width: 25%
        height:1.9rem
        .area-img
          display: block
          margin: .4rem auto .2rem auto
          width: .66rem
          height: .66rem
        .area-desc
          overflow: hidden
          width-space: nowrap
          text-overflow: ellipsis
          line-height: .44rem
          text-align: center
          
          
</style>