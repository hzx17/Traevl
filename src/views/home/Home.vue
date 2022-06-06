<template>
  <div>
    <Homeheader></Homeheader>
    <Homeswiper :swiperList="swiperList"/>
    <Homeicons :iconList="iconList"/>
    <Homespot :spot="spot"/>
    <Homerecommend :jipiao="jipiao"/>
  </div>
</template>

<script>
import  {mapState} from 'vuex'
import Homeheader from '../home/components/Homeheader.vue'
import Homeswiper from '../home/components/Homeswiper.vue'
import Homeicons from '../home/components/Homeicons.vue'
import Homerecommend from '../home/components/Homerecommend.vue'
import Homespot from '../home/components/Homespot.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components:{
    Homeheader,
    Homeswiper,
    Homeicons,
    Homerecommend,
    Homespot,
  },
  data(){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      jipiao:'',
      spot:''
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get(`http://localhost:5000/api/Homeinfo?city=${this.city}`).then(response=>{
        if(response.data.status==0){
          this.swiperList=response.data.data.swiperList
          this.iconList=response.data.data.iconList
          this.jipiao=response.data.data.jipiao
          this.spot=response.data.data.spot
        }
      }).catch(error=>{
        console.log(error)
      })
    },
  },
  activated(){
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      this.getHomeInfo()
    }
  },
  mounted(){
    this.getHomeInfo()  
    this.lastCity=this.city  
  }
}
</script>


<style>
</style>
