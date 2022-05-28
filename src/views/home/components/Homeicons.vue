<template>
  <div class="wrapper-icons">
    <ul class="inner-icons">
      <swiper :options="swiperOption">
        <swiper-slide  v-for="(page,index) in pages" :key="index">
          <li class="icon" v-for="item in page" :key='item.id'>
            <div class="icon-img">
              <img class="img-icon" :src="item.imgUrl" alt="">
            </div>
            <span>{{item.desc}}</span>
          </li>
        </swiper-slide>
      </swiper>
    </ul>
  </div>   
</template>

<script>
export default {
  name:'Homeicons',
  
  data(){
    return{
       swiperOption: {
         autoplay:false      
       },
    }
  },
  props:['iconList'],
  computed:{
    pages(){
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const page=Math.floor( index / 8)
         if(!pages[page]){
          pages[page]=[]
         }
        pages[page].push(item)
      })
      return pages
    }
  }


}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.wrapper-icons{
  overflow: hidden;
  width: 100vw;
  .inner-icons{
    padding: .1rem;
      height: 3.8rem;
    .icon :extend(.ellipsis){
      width: 25%;
      float: left;
      height: 1.9rem;
      padding: .1rem 0;
      color: @color-font;
      font-size: @font-icon;
      text-align: center;
      line-height: .4rem;
     
      .icon-img{
        width: 1.3rem;
        height: 1.3rem;
        margin: 0 auto;
        .img-icon{
          width: 100%;
        }
      }
    }
  }
}
</style>