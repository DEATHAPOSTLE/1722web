<template>
	<div>
		<index-header :city="city"></index-header>
  	<index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-hot :list="hotInfo"></index-hot>
    <index-recommend :list="recommendInfo"></index-recommend>
    <index-bottom></index-bottom>
	</div>
  
</template>

<script>
/* eslint-disable */
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexHot from './hot'
  import IndexRecommend from './recommend'
  import IndexBottom from './bottom'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexHot,
      IndexRecommend,
      IndexBottom
    },
    data () {
      return {
        city: '',
        swiperInfo: [],
        iconsInfo: [],
        hotInfo: [],
        recommendInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDateSucc.bind(this))
          .catch(this.handleGetDateErr.bind(this))
      },
      handleGetDateSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconsList
        this.hotInfo = data.hotList
        this.recommendInfo = data.recommendList
        this.city = data.city
        this.$bus.staticData = {
          city: data.city
        }
      },
      handleGetDateErr () {
        console.log('error')
      },
      bingEvents () {
        this.$bus.$on('change', this.handleCityChange.bind(this))
      },
      handleCityChange (value) {
        this.city = value
      }
    },
    created () {
      this.getIndexData()
      this.bingEvents()
    }
  }
</script>
<style></style>
