<template>
   <div class="main">
     <div class="cityPlace">
       <div class="cityPlace-title">您的位置</div>
       <div class="cityPlace-city">
         <div class="cityPlace-city-light">
           <a class="cityPlace-city-name" href="javascript:;">北京</a>
         </div>
       </div>
     </div>
     <div class="hotCity">
       <div class="hotCity-title">热门城市</div>
       <div class="hot-city-city" >
         <div class="hot-city-item"
                    v-for="item of hotList" 
                    :key="item.id">
           <div class="hot-city-name">{{item.city}}</div>
         </div>
       </div>
     </div>
     <div class="all-city" v-for="item of cityInfo">
       <div class="city-start">{{item[0]}}</div>
       <div class="city-city" v-for="item of item[1]">{{item.cityarea}}</div>
     </div>
     <div class="initial">
       <div class="initial-a" v-for="item of cityInfo">{{item[0]}}</div>
     </div>
   </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'change-city',
  props: {
    hotList: Array,
    cityInfo: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .main
    color: #212121
    font-size: .26rem
    line-height: 1
    position: relative
    .cityPlace
      display: flex
      flex-direction: column
      .cityPlace-title
        padding-left: .3rem
        height: .54rem
        line-height: .54rem
        color: #616161
        background: #f5f5f5
        border-bottom: .02rem solid #dfe0e1
      .cityPlace-city
        padding: .04rem .5rem .26rem .2rem
        background: #fff
        border-bottom: .02rem solid #dfe0e1
        .cityPlace-city-light
          box-sizing: border-box
          float: left
          width: 33.33%
          padding: .2rem .14rem 0 .1rem
          .cityPlace-city-name
            display: block
            height: .56rem
            line-height: .56rem
            text-align: center
            color: $bgColor
            border: .02rem solid $bgColor
            border-radius: .06rem
    .hotCity
      display: flex
      flex-direction: column
      .hotCity-title
        padding-left: .3rem
        height: .54rem
        line-height: .54rem
        color: #616161
        background: #f5f5f5
        border-bottom: .02rem solid #dfe0e1
      .hot-city-city
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        padding: .04rem .5rem .26rem .2rem
        .hot-city-item
          padding: .2rem .14rem 0 .1rem
          box-sizing: border-box
          float: left
          width: 33.33%
          .hot-city-name
            display: block
            height: .56rem
            line-height: .56rem
            text-align: center
            color: #373737
            border: .02rem solid #cacccd
            border-radius: .06rem
    .all-city
      .city-start
        padding-left: .3rem
        height: .54rem
        line-height: .54rem
        color: #616161
        background: #f5f5f5
        border-bottom: .02rem solid #dfe0e1
      .city-city
        padding-left: .3rem
        height: .74rem
        line-height: .74rem
        color: #616161
        background: #fff
        border-bottom: .02rem solid #dfe0e1
    .initial
      position: fixed
      top: 25%
      right: 0
      line-height: .35rem
      text-align: center
      color: $bgColor
        
</style>
