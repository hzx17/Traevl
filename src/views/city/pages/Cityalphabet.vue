<template>
  <div>
    <ul class="wrapper-alphabet">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
       <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
       <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name:'Cityalphabet'
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
.wrapper-alphabet{
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 1.58rem;
  bottom: 0;
  // background-color: red;

  li{
    color: @color-bg;
    padding:.04rem .1rem .04rem .02rem;
  }
}
</style>