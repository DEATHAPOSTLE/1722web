<template>
  <div class="number">
    <div class="number_left">购买数量</div>
    <div class="number_msg">最多买5张</div>
    <div class="number_count">
      <span class="reduce" @click="clickReduce(count)" :class="{'count_max': maxP, 'count_default': normalP}">-</span>
      <input class="number_input" type="text" v-model="count" @blur="blurInput">
      <span class="add" @click="clickAdd" :class="{'count_max': maxA, 'count_default': normalA}">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-number',
  data () {
    return {
      count: 1,
      maxP: true,
      normalP: false,
      maxA: false,
      normalA: true
    }
  },
  methods: {
    clickReduce: function () {
      this.count--
      if (this.count <= 1) {
        this.count = 1
        this.maxP = true
        this.normalP = false
        this.maxA = false
        this.normalA = true
      } else {
        this.maxP = false
        this.normalP = true
        this.maxA = false
        this.normalA = true
      }
      this.$emit('showCount', this.count)
    },
    clickAdd: function () {
      this.count++
      if (this.count >= 5) {
        this.count = 5
        this.maxA = true
        this.normalA = false
        this.maxP = false
        this.normalP = true
      } else {
        this.maxA = false
        this.normalA = true
        this.maxP = false
        this.normalP = true
      }
      this.$emit('showCount', this.count)
    },
    blurInput: function () {
      if (this.count <= 1) {
        this.count = 1
        this.maxP = true
        this.normalP = false
        this.maxA = false
        this.normalA = true
      } else if (this.count >= 5) {
        this.count = 5
        this.maxA = true
        this.normalA = false
        this.maxP = false
        this.normalP = true
      } else {
        this.maxA = false
        this.normalA = true
        this.maxP = false
        this.normalP = true
      }
      this.$emit('showCount', this.count)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .number
    display: flex
    height: 0.76rem
    position: relative
    margin-bottom: .2rem
    padding: 0.25rem
    border: .02rem solid #efefef
    border-left: none
    border-right: none
    background: #fff
    .number_left
      width: 1.69rem
      padding-top: 0.21rem
      font-size:0.3rem
      line-height: 0.3rem
      color: #616161
    .number_msg
      padding-top: 0.21rem
      font-size:0.28rem
      line-height: 0.28rem
      color: #ccc
    .number_count
      display: flex
      width: 1.88rem
      height: .56rem
      position: absolute
      right: .3rem
      padding: 0.02rem
      text-align: center
      border: 0.02rem solid #c7ced4
      span
        display: block
        width: .56rem
        height: .56rem
        font-size: .5rem
        line-height: .5rem
      .number_input
        width: .76rem
        height: .56rem
        border: 0
        text-align: center
      .count_default
        color: #fff
        background: $bgColor
      .count_max
        color: #cad1d7
        background: #f0f0f0
</style>
