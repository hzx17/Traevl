<template>
  <div>
    <Homeheader/>
    <Homeswiper/>
  </div>
</template>

<script>
import Homeheader from '../home/components/Homeheader.vue'
import Homeswiper from '../home/components/Homeswiper.vue'
export default {
  name: 'Home',
  components:{
    Homeheader,
    Homeswiper
  }
}
</script>


<style>
</style>
