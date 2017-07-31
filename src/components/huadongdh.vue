<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="n in listImg" :key='n'>
        <router-link to="">
          <img :src="n.urls"  class="swiper-slide-img">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        },
        listImg:[
          {
            urls:'http://img.kaolafm.net/mz/images/201707/58dc3eab-1446-4072-b3bf-b720a4c9f669/percent_100.jpg'
          },
          {
            urls:'http://img.kaolafm.net/mz/images/201707/f7d191a7-df13-4078-808d-dd575bd487db/percent_100.jpg'
          },
          {
            urls:'http://img.kaolafm.net/mz/images/201707/8c08b06b-37a5-43ab-8977-82159226710d/percent_100.jpg'
          },
          {
            urls:'http://img.kaolafm.net/mz/images/201707/6697fab8-84b8-4ab7-ac36-10d089e5474e/percent_100.jpg'
          },
          {
            urls:'http://img.kaolafm.net/mz/images/201707/02b9096c-357d-4d87-ae3e-73e21a96a475/percent_100.jpg'
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper img{
    width: 100%;
    height: 7.5rem;
  }
</style>
