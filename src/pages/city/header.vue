<template>
    <div class="header">
    	<div class="header-area">
       <router-link to="/" class="back iconfont">&#xe625;</router-link>
       <h1 class="area">
         <div class="area-city">
           <span class="inland" :class="[activeClass]" @click="handleInlandActiveClick">国内</span>
           <span class="overseas" :class="[active1Class]" @click="handleOverseasActiveClick">海外</span>
         </div>
       </h1>
       <div class="header-right"></div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'index-header',
  data () {
    return {
      activeClass: 'active',
      active1Class: 'active1',
    }
  },
  methods: {
    handleOverseasActiveClick () {
      this.active1Class = 'active'
      this.activeClass = 'active1'
    },
    handleInlandActiveClick () {
      this.active1Class = 'active1'
      this.activeClass = 'active'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    flex-direction: column
    justify-content: space-around
    background: $bgColor
    .header-area
      display: flex
      justify-content: space-between
      height: 0.88rem
      line-height: .88rem
      .back
        width:0.64rem
        text-align: center
        font-weight: 800
        color: #fff
      .area
        position: relative
        text-align: center
        .area-city
          display: inline-block
          font-size: 0
          margin-left: -.42rem
          .active
            color: $bgColor
            background: #fff
          .active1
            color: #fff
            background: $bgColor
          .inland
            display: inline-block
            width: 2rem
            height: 0.56rem
            line-height: .56rem
            border: .02rem solid #fff
            border-radius: .06rem 0 0 .06rem
            font-size: .28rem
          .overseas
            display: inline-block
            width: 2rem
            height: 0.56rem
            line-height: .56rem
            border: .02rem solid #fff
            border-left: none
            border-radius: 0 .06rem .06rem 0
            font-size: .28rem
</style>
