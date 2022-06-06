<template>
  <div class="wrapper-detail">
    <DetailBanner :spotname="spotname" :imgsarray="imgsarray" :imgbanner="imgbanner"/>
    <DetailHeader/>
    <DetailAbout :pingjia="pingjia" :loc="loc" :tongzhi="tongzhi"/>
    <DetailList :menpiao="menpiao" />
    <!-- <div class="context"></div> -->
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailAbout from './components/DetailAbout.vue'
import DetailList from './components/DetailList.vue'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailAbout,
    DetailList
  },
  data(){
    return{
      spotname:'',
      imgsarray:'',
      imgbanner:'',
      pingjia:'',
      loc:'',
      tongzhi:'',
      menpiao:''
    }
  },
  methods:{
    getdetaiinfo(){
      axios.get('http://127.0.0.1:5000/api/Detailinfo?id=',{params:{
        id:this.$route.params.id
      }}).then(response=>{
        if(response.data.status==0){
         this.spotname=response.data.data.spotname
         this.imgsarray=response.data.data.imgsarray
         this.imgbanner=response.data.data.imgbanner
         this.pingjia=response.data.data.pingjia
         this.loc=response.data.data.loc
         this.tongzhi=response.data.data.tongzhi
         this.menpiao=response.data.data.menpiao
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted(){
    this.getdetaiinfo()
  }
}
</script>

<style lang='less' scoped>
</style>