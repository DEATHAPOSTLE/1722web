<template>
  <div class="visitor">
    <div class="visitor_name visitor_li">
      <span>游客1</span>
      <input type="text" placeholder="游客姓名" v-model="name" @blur="getName" :style="{color: nameColor}">
      <div class="iconfont icon">&#xe952;</div>
    </div>
    <div class="visitor_tel visitor_li">
      <span>手机号</span>
      <input type="text" placeholder="请填写手机号" v-model="tel" @blur="getTel" :style="{color: telColor}">
    </div>
    <div class="visitor_id visitor_li">
      <span>身份证</span>
      <input type="text" placeholder="请填写正确的身份证号码" v-model="id" @blur="getId" :style="{color: idColor}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-visitor',
  data () {
    return {
      name: '',
      tel: '',
      id: '',
      nameColor: '#616161',
      telColor: '#616161',
      idColor: '#616161'
    }
  },
  methods: {
    getName: function () {
      var reg = /^[\u4E00-\u9FA5]{2,4}$/
      if (reg.test(this.name)) {
        this.nameColor = '#616161'
      } else {
        this.nameColor = 'red'
      }
    },
    getTel: function () {
      var reg = /^1[3|4|5|8][0-9]\d{4,8}$/
      if (reg.test(this.tel)) {
        this.telColor = '#616161'
      } else {
        this.telColor = 'red'
      }
    },
    getId: function () {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (reg.test(this.id)) {
        this.idColor = '#616161'
      } else {
        this.idColor = 'red'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .visitor
    margin-bottom: .2rem
    .visitor_li
      display: flex
      height: .5rem
      padding: .24rem
      border-bottom: .02rem solid #efefef
      background: #fff
      span
        width: 1.6rem
        font-size: .3rem
        line-height: .5rem
        color: #616161
      input
        flex: 1
        font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif
        border: 0
        color: #212121
    .visitor_name
      position: relative
      .icon
        position: absolute
        top: .26rem
        right: .4rem
        font-size: .32rem
        line-height: .5rem
        color: $bgColor
</style>
