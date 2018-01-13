<template>
   <div>
     <index-header></index-header>
     <change-city :hotList="cityList"
                  :cityInfo="cityInfo"
                  ></change-city>
   </div>
</template>

<script>
/* eslint-disable */
import IndexHeader from './header.vue'
import ChangeCity from './changeCity.vue'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    IndexHeader,
    ChangeCity
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
      console.log(data)
    },
    handleGetCityDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getCityData()
  }
}

</script>

<style></style>