<template>
  <div class="date">
    <div class="date_left">游玩日期</div>
    <div class="date_right">
      <span :class="{'date_none': todayNone}">
        <p>今天</p>
        <i>{{dateResult}}</i>
      </span>
      <span class="date_center" @click="clickTomorrow" :class="{'date_noset': tomorrowNoset, 'date_active': tomorrowAct}">
        <p>明天</p>
        <i>{{tomorrowResult}}</i>
      </span>
      <span @click="clickOther" :class="{'date_noset': otherNoset, 'date_active': otherAct}">
        <b>其他日期</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-date',
  data () {
    return {
      dateResult: '',
      todayNone: true,
      tomorrowNoset: true,
      tomorrowAct: false,
      otherNoset: true,
      otherAct: false
    }
  },
  methods: {
    getDate: function () {
      const date = new Date()
      this.dateResult = (date.getMonth() + 1) + '月' + date.getDate() + '日'
      this.tomorrowResult = (date.getMonth() + 1) + '月' + (date.getDate() + 1) + '日'
    },
    clickTomorrow: function () {
      this.tomorrowNoset = !this.tomorrowNoset
      this.tomorrowAct = !this.tomorrowAct
      this.otherNoset = true
      this.otherAct = false
    },
    clickOther: function () {
      this.otherNoset = !this.otherNoset
      this.otherAct = !this.otherAct
      this.tomorrowNoset = true
      this.tomorrowAct = false
    }
  },
  created () {
    this.getDate()
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .date
    display: flex
    height: 0.82rem
    padding: 0.25rem
    background: #fff
    .date_left
      width: 1.69rem
      padding-top: 0.21rem
      font-size:0.3rem
      line-height: 0.3rem
      color: #616161
    .date_right
      display: flex
      span
        display: block
        width: 1.56rem
        height: .86rem
        text-align: center
        p
          margin: .13rem 0 .1rem 0
          font-size: .26rem
          line-height: .26rem
        i
          font-size: .24rem
          line-height: .24rem
        b
          font-size: .26rem
          line-height .86rem
      .date_none
        color: #ececec
        border-radius: .1rem
        border: .02rem solid #ececec
      .date_noset
        color: #2b2b2b
        border-radius: .1rem
        border: .02rem solid #bdbdbd
      .date_active
        color: #fff
        border-radius: .1rem
        border: .02rem solid $bgColor
        background: $bgColor
      .date_center
        margin: 0 .24rem
</style>
