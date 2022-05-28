<template>
  <div class="wrapper">
    <Cityheader/>
    <Citysearch/>
    <router-view></router-view>
  </div>
</template>

<script>
import Cityheader from '../city/components/Cityheader.vue'
import Citysearch from '../city/components/Citysearch.vue'
export default {
  name:'City',
  components:{
    Cityheader,
    Citysearch
  }

}
</script>

<style>

</style>