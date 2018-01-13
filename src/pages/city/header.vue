<template>
    <div class="header">
    	<div class="header-area">
       <a href="javascript:;" class="back iconfont">&#xe625;</a>
       <h1 class="area">
         <div class="area-city">
           <span class="inland" :class="[activeClass]" @click="handleInlandActiveClick">国内</span>
           <span class="overseas" :class="[active1Class]" @click="handleOverseasActiveClick">海外</span>
         </div>
       </h1>
       <div class="header-right"></div>
      </div>
      <div class="header-search">
        <input class="city-keyword" type="text" placeholder="输入城市名或拼音" 
                                    :style="activeText" 
                                    @click="handleInputClick"
                                    @blur="handleBlur">
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
      activeText : {
        textAlign: 'center'
      }
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
    },
    handleInputClick () {
      this.activeText.textAlign = 'left'
    },
    handleBlur () {
      this.activeText.textAlign = 'center'
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
    .header-search
      padding: 0 .2rem .1rem .2rem
      height: 0.62rem
      font-size: .26rem
      color:#9e9e9e
      wdith:100%
      .city-active
        text-align:center
      .city-keyword
        display: block
        padding: .16rem 0 .16rem .1rem
        border: 0
        outline: 0 none
        width: 100%
        height:100%
        height: .3rem
        line-height: .3rem
        background: #fff
        border-radius: .06rem
    
</style>
