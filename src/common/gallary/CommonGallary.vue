<template>
  <div class="container" @click="handlerGallary">
    <div class="wrapper-gallary" >
        <swiper :options="swiperOption" >
          <swiper-slide v-for="(item,index) in imgs" :key="index" >
            <img class="gallary-img"  :src="item">
          </swiper-slide>
          <div  class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name:'CommonGallary',
   data(){
    return{
      swiperOption:{
         pagination: '.swiper-pagination',
         paginationType:'fraction',
         autoplay:false,
         observeParents:true,
         observer:true
      },  
      isshow:true 
    }
  },
  methods:{
    handlerGallary(){
      this.$emit('close')
    }
  },
  props:{
    imgs:{
       default:['http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg',
          'https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0102a120008imrh81F306.jpg_r_800x800_e3aa8919.jpg'
       ]
    }
  }
}
</script>

<style lang='less' scpoed>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  .wrapper-gallary{
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    .swiper-container{
        overflow:inherit;
    }
    .gallary-img{
          width: 100vw;
        }
      .swiper-pagination{
        color: #fff;
        bottom: -2rem;
      }
  }
  
}
</style>