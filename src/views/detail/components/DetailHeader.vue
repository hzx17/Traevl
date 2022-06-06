<template>
  <div>
    <router-link to="/" class="back" v-show='showAbs'><span class="iconfont">&#xe624;</span></router-link>
    <div class="header" :style="opacityStyle" v-show='!showAbs'>
      <router-link to="/" class="header-icon">
        <span class="iconfont">&#xe624;</span>
      </router-link>
    景点详情
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  data(){
   return{
     showAbs:true,
     opacityStyle:{
       opacity:0
     }
   }
  },
  methods:{
    handlerScroll(){
      console.log('scroll')
      let movetop=document.documentElement.scrollTop
      if(movetop>60 ){
        let opacity=movetop /140
        opacity =opacity >1 ? 1 : opacity
        this.opacityStyle={opacity}
        this.showAbs=false
      }else{
        this.showAbs=true
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handlerScroll)
  },
  destroyed() {
     window.removeEventListener('scroll',this.handlerScroll)
  },
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.back{
  width: .72rem;
  height: .72rem;
  border-radius: .36rem;
  background-color: rgba(00,00,00,.6);
  position: absolute;
  top: 0;
  left: 0;
  margin: .14rem .0rem .0rem .14rem;
  line-height: .72rem;
  text-align: center;
  .iconfont{
    font-size: .36rem;
    font-weight: 200;
    color: #fff;
  }
}
.header{
  background-color:@color-bg;
  position: fixed;
  padding-right:.88rem ;
  top: 0;
  left: 0;
  right: 0;
  height: 0.86rem;
  color: #fff;
  font-size: @font-recommend-size;
  text-align: center;
  line-height: .86rem;
  .header-icon{
    float: left;
    width: .64rem;
    padding: 0.1rem;
     line-height: .66rem;
    text-align: center;
  }
}
</style>