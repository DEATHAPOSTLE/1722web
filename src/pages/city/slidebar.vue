<template>
  <div class="slidebar">
    <div class="slidebar-list">
      <div class="slidebar-item" 
            v-for="(item, index) of alphabet"
            :key="index"
            @touchstart="handleTouchStart(item)">
          {{item[0]}}
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'index-header',
  props: {
    cityInfo: Array
  },
  computed: {
    alphabet () {
      const arr =[]
      this.cityInfo.forEach((value, index) => {
        arr.push(value)
      })
      return arr
    }
  },
  methods: {
    handleTouchStart (item) {
      this.$emit('changeLetter', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .slidebar
      position: absolute
      top: 1.62rem
      right: 0
      bottom: 0
      width: .4rem
      line-height: .35rem
      text-align: center
      color: $bgColor
      .slidebar-list
        position: absolute
        top: 50%
        width: 100%
        transform: translateY(-50%)
        
</style>
