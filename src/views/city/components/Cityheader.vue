<template>
  <div class="header">
    <router-link to="/" >
      <div class="header-icon">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
    <div class="city-loc">
      <div class="loc-button">
        <router-link to="/city/china" class="button1" active-class="active" >中国
        </router-link>
        <router-link to="/city/out" class="button2" active-class="active">国际/地区
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City-header',
}
</script>

<style lang='less' scoped>
@import '../../../assets/styles/commom.less';
.header{
  background-color:@color-bg;
  height: 0.86rem;
  //开启弹性布局
  display: flex;
  //排列方式
  flex-flow: row wrap;
  //主轴对齐方式
  // justify-content: space-between;
  color: #fff;
  .header-icon{
    width: .64rem;
    color: #fff;
    padding: 0.1rem;
     line-height: .66rem;
    text-align: center;
  }
  .city-loc{
    flex: 1;
    position: relative;
  }
  .loc-button{
    position:absolute;
    top: .16rem;
    left: 1.35rem;
    .button1{
      display: inline-block;
      width: 1.8rem;
      height: .44rem;
      border:.04rem #fff solid ;
      border-right: none;
      font-weight: 600;
      background-color: @color-bg;
      color: #fff;
      line-height: .44rem;
      text-align: center;
     border-radius: .06rem 0 0 .06rem;
    }
    .button2{
      display: inline-block;
      color: #fff;
      width: 1.8rem;
      height: .44rem;
      border:.04rem #fff solid ;
      border-left: none;
      font-weight: 600;
      line-height: .44rem;
      text-align: center;
      background-color: @color-bg;
      border-radius:0  .06rem .06rem 0;
    }
    .active{
      background-color: #fff;
      color: @color-bg;
    }
  }
}
</style>
