<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="num in listImg" style=" width:420px;">
        <router-link to="/" v-for="n in num" style="font-size:0.9rem;font-weight: 600;margin-bottom: 10px;margin-top: 10px;color: #000;text-decoration: none;width:20%;text-align:center ;display: inline-block"><span style="width:20%">{{n}}</span></router-link>
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
        listImg:[
          ["首页","智能电台","精品","搞笑","小说"],
          ["脱口秀","相声评书","经典典藏","亲子","名人"],
          ["电影","旅游", "综艺娱乐","恐怖故事","历史人文"],
          ["财经","广播剧","讲座讲台","外语","星座风水"],
          ["科技","汽车","生活","体育","健康"],
          ["教育","军事","动漫游戏","校园"]
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
