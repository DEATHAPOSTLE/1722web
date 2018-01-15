<template>
  <div>
    <details-header></details-header>
    <details-description></details-description>
    <details-comment></details-comment>
    <details-recommend></details-recommend>
    <details-oldtickets></details-oldtickets>
    <details-hotcombination></details-hotcombination>
    <details-top></details-top>
    <details-swiper :list="swiperInfo"></details-swiper>
  </div> 
</template>

<script>
  import DetailsHeader from './header'
  import DetailsDescription from './description'
  import DetailsComment from './comment'
  import DetailsRecommend from './recommend'
  import DetailsOldtickets from './oldtickets'
  import DetailsHotcombination from './hotcombination'
  import DetailsTop from './top'
  import DetailsSwiper from './swiper'
  import axios from 'axios'

  export default {
    name: 'details',
    components: {
      DetailsHeader,
      DetailsDescription,
      DetailsComment,
      DetailsRecommend,
      DetailsOldtickets,
      DetailsHotcombination,
      DetailsTop,
      DetailsSwiper
    },
    data () {
      return {
        swiperInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/details.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style></style>
