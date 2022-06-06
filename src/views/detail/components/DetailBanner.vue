<template>
  <div class="wrapper">
    <div class="banner-wrapper" @click="handlerShowGallary">
      <div class="banner-img">
        <img class="img" :src="imgbanner" alt="">
      </div>
      <div class="inner">
        <div class="banner-info">
          <span class="iconfont">&#xec7f;</span>{{imgsarray.length}}
        </div>
        <p>{{spotname}}</p>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary 
        :imgs="imgsarray" 
        v-show="showGallary"
        @close="handlerShowGallary"
      />
    </FadeAnimation>
  </div>
 
</template>

<script>
import CommonGallary from '../../../common/gallary/CommonGallary.vue'
import FadeAnimation from '../../../common/fade/FadeAnimation.vue'
export default {
  name:'DetailBanner',
   data(){
    return{
      showGallary:false,
    }
  },
  props:{imgsarray:{
      rerequire:true,
  },'spotname':{
      type:String,
      rerequire:true,
  },'imgbanner':{
      type:String,
      rerequire:true,
  }},
  components:{
    CommonGallary,
    FadeAnimation
  },
  computed:{
    number(){
      this.imgsarray.length
    }
  },
  methods:{
    handlerShowGallary(){
      this.showGallary=!this.showGallary
    }
  },
}
</script>

<style lang="less" scpoed>
.banner-wrapper{
  position: relative;
}
.banner-img{
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 55%;
  .img{
    width: 100%;
  }
}
.inner{
  position: absolute;
  padding: .2rem;
  bottom:0;
  .banner-info{
    width: 1.4rem;
    border-radius: .28rem;
    text-align: center;
    background-color:rgba(00,00,00,.6) ;
    color: #fff;
    font-size: .28rem;
    padding: .04rem;
  }
  p{
    padding: .1rem;
    font-weight: 400;
    font-size: .36rem;
    color: #fff;

  }
}
</style>