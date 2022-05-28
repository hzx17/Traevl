<template>
  <div>
    <Homeheader :city='city' ></Homeheader>
    <Homeswiper :swiperList="swiperList"/>
    <Homeicons :iconList="iconList"/>
    <Homerecommend :jipiao="jipiao"/>
    <Homeselection/>
    <Homezhoumo/>

  </div>
</template>

<script>
import Homeheader from '../home/components/Homeheader.vue'
import Homeswiper from '../home/components/Homeswiper.vue'
import Homeicons from '../home/components/Homeicons.vue'
import Homerecommend from '../home/components/Homerecommend.vue'
import Homezhoumo from '../home/components/Homezhoumo.vue'
import Homeselection from '../home/components/Homeselection.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components:{
    Homeheader,
    Homeswiper,
    Homeicons,
    Homerecommend,
    Homezhoumo,
    Homeselection
  },
  data(){
    return{
      city:'',
      swiperList:[],
      iconList:[],
      jipiao:''
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('http://localhost:5000/api/Homeinfo').then(response=>{
        if(response.data.status==0){
          this.city=response.data.data.city
          this.swiperList=response.data.data.swiperList
          this.iconList=response.data.data.iconList
          this.jipiao=response.data.data.jipiao
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted(){
    this.getHomeInfo()    
  }
}
</script>


<style>
</style>
