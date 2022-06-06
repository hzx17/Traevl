<template>
  <div class="wrapper" v-if="showSwiper">
    <swiper :options="swiperOption" >
      <swiper-slide   v-for="item in swiperList" :key="item.id">
        <img class="image-swiper" :src="item.imgUrl" alt="轮播图">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'Homeswiper',
  data(){
    return{
      swiperOption:{
         pagination: '.swiper-pagination',
         //轮播插件支持循环
         loop : true,
         autoplay:false
      },     
    }
  },
  props:['swiperList'],
  computed:{
    showSwiper(){
      return this.swiperList.length
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff
  }

.wrapper{
  overflow: hidden;
  width: 100vw;
  height: 31.25vw;
  .image-swiper{
    width: 100vw;
  }
}
</style>