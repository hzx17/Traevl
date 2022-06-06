<template>
  <transition>
     <slot></slot>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
/* 进入的终点 离开的起点*/
.v-enter-to ,.v-leave {
   opacity: 1;
}
.v-leave-active , .v-enter-active{
    transition: opacity .5s;
}
</style>