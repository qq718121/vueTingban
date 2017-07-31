<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide  style=" width:620px;border-bottom: 1px solid #e2e2e2;border-top: 1px solid #e2e2e2;margin-top:10px">
        <router-link v-for="num in listImg[0]" to="/"  style="border-bottom: 1px solid #e2e2e2; font-size:0.9rem;font-weight: 600;margin-bottom: 10px;margin-top: 10px;color: #000;text-decoration: none;width:20%;text-align:center ;display: inline-block"><span style="width:20%">{{num.categoryName}}</span></router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
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
//          autoplay: 3000,
          notNextTick: true,
//          pagination: '.swiper-pagination',
          slidesPerView: 'left',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 10,

        },
        listImg:this.caidanbtArr
      }
    },
    props:['caidanbtArr'],
    components: {
      swiper,
      swiperSlide
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper img{
    width: 100%;
    height: 7.5rem;
  }
</style>
