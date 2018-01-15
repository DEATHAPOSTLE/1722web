<template>
  <div>
    <div class="more" v-for="(item, index) in list">
      <div class="more_name more_li">
        <span>游客{{index + 2}}</span>
        <input type="text" placeholder="游客姓名" v-model="name" @blur="getName" :style="{color: nameColor}">
        <div class="iconfont icon">&#xe952;</div>
      </div>
      <div class="more_id more_li">
        <span>身份证</span>
        <input type="text" placeholder="请填写正确的身份证号码" v-model="id" @blur="getId" :style="{color: idColor}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-more',
  props: {
    count: Number
  },
  data () {
    return {
      list: [],
      name: '',
      id: '',
      nameColor: '#616161',
      idColor: '#616161'
    }
  },
  watch: {
    count: function () {
      this.list = []
      for (var i = 0; i < this.count - 1; i++) {
        this.list.push(1)
      }
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
  .more
    margin-bottom: .2rem
    .more_li
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
    .more_name
      position: relative
      .icon
        position: absolute
        top: .26rem
        right: .4rem
        font-size: .32rem
        line-height: .5rem
        color: $bgColor
</style>
