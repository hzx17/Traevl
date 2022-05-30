<template>
  <div>
    <ul class="wrapper-alphabet" ref="alphabet" >
      <li v-for="(item,key) in letters" 
      :key="key" 
      :ref="item"
      @touchstart="handlerlettertouch"
      @touchmove="handlerlettermove"
      @touchend="handlerletterend"
      @click="handlerletterclick">{{item}}</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name:'Cityalphabet',
  data(){
    return{
      cities:'',
      touchstatus:false,
      timer:null,
      startY:'',
      topY:''
    }
  },
  updated(){
    this.startY=this.$refs[this.letters[0]][0].offsetTop;
    this.topY=this.$refs.alphabet.offsetTop;
  },
  methods:{
    handlerletterclick(e){
      this.$bus.$emit('change',e.target.innerText)
      console.log(e.target.innerText)
    },
    /* 触摸函数开始 */
    handlerlettertouch(){
      this.touchstatus=true
    },
    /* 触摸移动 */
    handlerlettermove(e){
      if(this.touchstatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.tiemr= setTimeout(() => {
           const clientY=e.touches[0].clientY
           const letterY=clientY-this.startY- this.topY
           const index =Math.floor(letterY / 18)
           if(index >=0 && index<this.letters.length){
             this.$bus.$emit('change', this.letters[index]) 
           }
        }, 16);
      }
    },
    /* 触摸结束 */
    handlerletterend (){
      this.touchstatus=false
    }
  },
  computed:{
    letters (){
       const letters=[]
       for(let i in this.cities ){
          letters.push(i)
       }
       return letters;

    }
  },
   mounted (){
     this.$bus.$on('citydata',data=>{
        if(data.status==200){
         this.cities=data.data.cities
        }
      })
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
.wrapper-alphabet{
  position: absolute;
  right: 0;
  display: flex;
  width: .36rem;
  flex-direction: column;
  justify-content: center;
  top: 1.58rem;
  bottom: 0;
  // background-color: red;
  li{
    color: @color-bg;
    height: .36rem;
    text-align: center;
    padding:.04rem .1rem .04rem .02rem;
    font-size: @font-icon;
  }
}
</style>