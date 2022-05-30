<template>
  <div class="wrapper">
    <Cityheader/>
    <Citysearch/>
    <keep-alive>
      <router-view include="[Citychina,Cityout]"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Cityheader from '../city/components/Cityheader.vue'
import Citysearch from '../city/components/Citysearch.vue'
import axios from 'axios'
export default {
  name:'City',
  components:{
    Cityheader,
    Citysearch
  },
  mounted (){
    axios.get('http://localhost:5000/api/Cityinfo').then(response=>{
      this.$bus.$emit('citydata',response.data)
    }).catch(error=>{
      console.log(error.message)
    })
  }
}
</script>

<style>

</style>