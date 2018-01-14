<template>
   <div class="main">
     <index-header></index-header>
     <search :cityInfo="cityInfo"></search>
     <change-city class="city"
                  :hotList="cityList"
                  :cityInfo="cityInfo"
                  ref="list">
                  </change-city>
     <slidebar :cityInfo="cityInfo" @changeLetter="handleChangeLetter"></slidebar>
   </div>
</template>

<script>
/* eslint-disable */
import IndexHeader from './header.vue'
import ChangeCity from './changeCity.vue'
import Search from './search.vue'
import Slidebar from './slidebar.vue'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    IndexHeader,
    ChangeCity,
    Search,
    Slidebar
  },
  data () {
    return {
      cityList: [],
      cityInfo: []
    }
  },
  methods: {
    getCityData () {
      axios.get('/api/cityList.json')
          .then(this.handleGetCityDataSucc.bind(this))
          .catch(this.handleGetCityDataErr.bind(this))
    },
    handleGetCityDataSucc (res) {
      const data = res.data.data
      this.cityList = data.hotcity
      this.cityInfo = data.china
    },
    handleGetCityDataErr () {
      console.log('error')
    },
    handleChangeLetter (item) {
      this.$refs.list.scrollToIndex(item)
    }
  },
  created () {
    this.getCityData()
  }
}

</script>

<style lang="stylus" acoped>
  .main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    .city
      overflow: hidden
      flex: 1
</style>