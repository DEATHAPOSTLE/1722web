<template>
  <div>
      <div class="search">
        <input class="search-input" type="text" :placeholder="placeholder" 
                                    :style="activeText" 
                                    @click="handleInputClick"
                                    @blur="handleBlur"
                                    @input="handleInputChange"
                                    ref="inpuut">
      </div>
      <div class="search-list" v-show="showList" ref="list">
        <ul>
          <li class="search-item" v-for="item of filterResult">{{item.cityarea}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import BScroll from 'better-scroll'
export default {
  name: 'index-search',
  props: {
    cityInfo: Array
  },
  data () {
    return {
      showList: false,
      filterResult: [],
      placeholder: '输入城市名或拼音',
      activeText : {
        textAlign: 'center'
      }
    }
  },
  computed: {
    result () {
      const result = []
      for(let i in this.cityInfo) {
        this.cityInfo[i][1].forEach((value) => {
          result.push({
            cityarea: value.cityarea,
            itemName: value.itemName
          })
        })
      }
      return result
    }
  },
  methods: {
    handleInputClick () {
      this.activeText.textAlign = 'left'
      this.placeholder =''
      this.$refs.inpuut.focus()
    },
    handleBlur () {
      this.activeText.textAlign = 'center'
      this.placeholder ='输入城市名或拼音'
    },
    handleInputChange (e) {
      const value = e.target.value.toLowerCase()
      if (value) {
        this.showList = true
        this.filterResult = this.result.filter((item) => {
          if (item.cityarea.indexOf(value) > -1 || item.itemName.indexOf(value) > -1) {
            return true
          }
        })
      } else {
        this.showList = false
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .search
    padding: 0 .4rem
    height: .74rem
    background: $bgColor
    .search-input
      padding: 0 .2rem
      line-height: .62rem
      margin-top: .06rem
      width: 100%
      border: none
      border-radius: .06rem
      text-align: center
      font-size: .24rem
      color: #666
      box-sizing: border-box
  .search-list
    z-index: 3
    overflow: hidden
    position: absolute
    top: 1.62rem
    left: 0
    right: 0
    bottom: 0
    background: #f5f5f5
    .search-item
      padding-left: .2rem
      line-height: .8rem
      border-bottom: .02rem solid #eee
      background: #fff
      color: #333
    
</style>
