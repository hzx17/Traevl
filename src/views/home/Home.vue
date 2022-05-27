<template>
  <div>
    <Homeheader/>
    <Homeswiper/>
    <Homeicons/>
  </div>
</template>

<script>
import Homeheader from '../home/components/Homeheader.vue'
import Homeswiper from '../home/components/Homeswiper.vue'
import Homeicons from '../home/components/Homeicons.vue'
export default {
  name: 'Home',
  components:{
    Homeheader,
    Homeswiper,
    Homeicons
  },
}
</script>


<style>
</style>
