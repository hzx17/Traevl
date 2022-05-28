<template>
  <div class="wrapper-citylist" ref="wrapper" >
    <div>
      <div class="area">
        <div class="title">你的位置</div>
        <div class="button-lists clearfix">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-lists clearfix">
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="buttonhot">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <ul class="item-lists">
          <li class="city-list">阿坝藏族羌族自治区</li>
          <li class="city-list">阿克苏地区</li>
          <li class="city-list">阿拉尔</li>
          <li class="city-list">巴中</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <ul class="item-lists">
          <li class="city-list">阿坝藏族羌族自治区</li>
          <li class="city-list">阿克苏地区</li>
          <li class="city-list">阿拉尔</li>
          <li class="city-list">巴中</li>
        </ul>
      </div>
      <div class="area">
        <div class="title">A</div>
        <ul class="item-lists">
          <li class="city-list">阿坝藏族羌族自治区</li>
          <li class="city-list">阿克苏地区</li>
          <li class="city-list">阿拉尔</li>
          <li class="city-list">巴中</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <ul class="item-lists">
          <li class="city-list">阿坝藏族羌族自治区</li>
          <li class="city-list">阿克苏地区</li>
          <li class="city-list">阿拉尔</li>
          <li class="city-list">巴中</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name:'Citychinacity',
  mounted () {
     this.scroll =  new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang='less' scoped>
@import '../../../assets/styles/commom.less';
.wrapper-citylist{
  overflow: hidden;
  position:absolute;
  top:1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  
}
.title{
  padding: .1rem .2rem;
  line-height: .4rem;
  // padding-left: .2rem;
  background-color: #eee;
  color: #666;
  // border-bottom:.02rem #333 solid ;
}
.clearfix:before,.clearfix:after {

  content: "";

  display: block;

  clear: both;

}
.button-lists{
  padding: .1rem .4rem 0rem .2rem;
  width: 100%;
  // display: flex;
  // flex-flow:row wrap ;
  .button-wrapper{
    float: left;
    width: 33%;
    padding: .06rem;
    .button{
      width: 2.0rem;
      border: .03rem @color-bg solid;
      text-align: center;
      font-weight: 600;
      padding: .04rem;
      border-radius: .08rem;
      color: @color-bg;
    }
    .buttonhot{
      width: 2.0rem;
      border: .03rem #888 solid;
      text-align: center;
      font-weight: 600;
      padding: .06rem;
      border-radius: .08rem;
      color: #888;
    }
  }
}
.item-lists{
  .city-list{
    padding: .12rem;
    // border-bottom: .01rem #666 solid ;
    color: #666;
  }
}
</style>