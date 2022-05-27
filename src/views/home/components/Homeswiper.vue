<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide   v-for="item in swiperList" :key="item.id">
        <img class="image-swiper" :src="item.imgUrl" alt="轮播图">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!---
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
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
        //  autoplay: 3000,
      },
      swiperList:[
          {
            id:"001",
            imgUrl:"http://rcj536al9.hn-bkt.clouddn.com//traevl/traevlswipe.jpg"
          },{
            id:"002",
            imgUrl:"http://rcj536al9.hn-bkt.clouddn.com//traevl/traevlswiper3.jpg"
          },
          {
            id:"003",
            imgUrl:"http://rcj536al9.hn-bkt.clouddn.com//traevl/traevlswiper1.jpg"
          },
          {
            id:"004",
            imgUrl:"http://rcj536al9.hn-bkt.clouddn.com//traevl/traevlswiper2.jpg"
          }
      ]
    }
  },
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