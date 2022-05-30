<template>
  <div class="header">
    <div class="header-icon">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
       <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩项目</div>
    <router-link to="/city/china">
      <div class="header-select">{{city}}
        <span class="iconfont">&#xeb6d;</span>
      </div> 
    </router-link>
  </div>
</template>

<script>
  import {mapState}  from 'vuex'
export default {
  name: 'Home-header',
  computed:{
    ...mapState(['city'])
  }
}
</script>

<style lang='less' scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.header{
  background-color:@color-bg;
  height: 0.86rem;
  //开启弹性布局
  display: flex;
  //排列方式
  flex-flow: row wrap;
  //主轴对齐方式
  // justify-content: space-between;
  align-items: center;
  color: #fff;
  .header-icon{
    width: .64rem;
    padding: 0.1rem;
     line-height: .66rem;
    text-align: center;
  }
  .header-input{
    flex: 1;
    // width: 5rem;
    margin: .12rem;
    padding: .1rem;
    height: .62rem;
    background-color: #fff;
    border-radius: .08rem;
    color: #ccc;
    line-height: .42rem;
  }
  .header-select{
     min-width: 1.24rem;
     max-width: 1.8rem;
     color: #fff;
     text-align: center;
     word-wrap:break-word;
  }
}
</style>
