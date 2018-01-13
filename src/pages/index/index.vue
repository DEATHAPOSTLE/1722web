<template>
	<div>
		<index-header></index-header>
  	<index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-hot :list="hotInfo"></index-hot>
    <index-recommend :list="recommendInfo"></index-recommend>
    <index-bottom></index-bottom>
	</div>
  
</template>

<script>
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
      },
      handleGetDateErr () {
        console.log('error')
      }

    },
    created () {
      this.getIndexData()
    }
  }
</script>
 
<style></style>
