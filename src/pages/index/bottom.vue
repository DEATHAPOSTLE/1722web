<template>
 <div class="bottom">
   <div class="warning">
     <span class="iconfont warn">&#xe619;</span>票面价<span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
   </div>
   <!-- <div class="more">
     <ul class="more-ul">
       <li class="more-li"><span class="iconfont">&#xe61a;</span>机票</li>
       <li class="more-li"><span class="iconfont">&#xe627;</span>酒店</li>
       <li class="more-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="more-li"><span class="iconfont">&#xe618;</span>更多</li>
     </ul>
   </div> -->
   <div class="shrink">
     <ul class="shrink-ul" style="height: 1rem">
       <li class="shrink-li"><span class="iconfont">&#xe61a;</span>机票</li>
       <li class="shrink-li"><span class="iconfont">&#xe627;</span>酒店</li>
       <li class="shrink-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="shrink-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="shrink-li"><span class="iconfont">&#xe61a;</span>机票</li>
       <li class="shrink-li"><span class="iconfont">&#xe627;</span>酒店</li>
       <li class="shrink-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="shrink-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="shrink-li"><span class="iconfont">&#xe61a;</span>机票</li>
       <li class="shrink-li"><span class="iconfont">&#xe627;</span>酒店</li>
       <li class="shrink-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="shrink-li"><span class="iconfont">&#xe693;</span>公寓</li>
       <li class="shrink-li" style="top: 8px"><span class="iconfont">&#xe618;</span>收起</li>
     </ul>
   </div>
   <ul class="server">
     <li class="ser-li">
       <p>登录</p>
     </li>
     <li class="ser-li">
       <p>我的订单</p>
     </li>
     <li class="ser-li" style="display:none">
       <p>个人中心</p>
     </li>
     <li class="ser-li">
       <p>最近浏览</p>
     </li>
     <li class="ser-li">
       <p>关于我们</p>
     </li>
   </ul>
   <!-- <ul class="client">
     <li class="phone"><a href="">触屏版</a></li>
     <li class="computer"><a href="">电脑版</a></li>
   </ul>
   <div class="copyright">
     <span>Qunar 京ICP备05021087</span><span>意见反馈</span>
   </div> -->
 </div>
</template>

<script>
export default {
  name: 'index-bottom'
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
  .bottom
    height: 4.8rem
    .warning
      line-height:.32rem 
      font-size: .24rem
      background: #fff
      padding: .14rem .1rem
      margin-top: .2rem
      .warn
        font-size: .24rem
        padding-right: .1rem
    .server
      display: flex
      line-height: .8rem
      height: .8rem
      border-bottom: 1px solid #e0e0e0
      .ser-li
        padding-left: .4rem
        color: $bgColor 
    .shrink-ul
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      padding: 0 .4rem
      height: 1rem
      .shrink-li
        width: 20.1% 
      
      
</style>