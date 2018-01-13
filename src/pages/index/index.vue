<template>
	<div>
		<index-header></index-header>
  	<index-swiper :list="swiperInfo"></index-swiper>
    <index-icons></index-icons>
	</div>
  
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons
    },
    data () {
      return {
        swiperInfo: []
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
