<template>
  <div class="search-wrapper">
   <input type="text" class="input-search" placeholder="请输入城市名">
  </div>
</template>

<script>
export default {
  nmae:'Citysearch'

}
</script>

<style lang="less" scoped>
.search-wrapper{
@import '../../../assets/styles/commom.less';
  height: .72rem;
  background-color: @color-bg;
  padding: 0.1rem .4rem;
  .input-search {
    box-sizing: border-box;
    width: 100%;
    height: .50rem;
    line-height: .50rem;
    text-align: center;
    margin: 0;
    padding: 0;
    border-radius:.08rem;
  }
}
</style>