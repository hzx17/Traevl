<template>
  <div class="wrapper-citylist" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">你的位置</div>
        <div class="button-lists clearfix">
          <div class="button-wrapper">
            <div class="button">成都</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-lists clearfix">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="buttonhot">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div  class="area" v-for="(item,index) in cities" 
      :key="index"
      :ref="index"
      >
        <div class="title">{{index}}</div>
        <ul class="item-lists" v-for="itemInner in item" :key="itemInner.id">
          <li class="city-list">{{itemInner.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Citychinacity',
  data(){
    return{
      hotCities:'',
      cities:'',
      letter:''
    }
  },
  watch:{
    letter(){
      if(this.letter){
        const element =this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  beforeCreate (){
      this.$bus.$on('citydata',data=>{
        if(data.status==200){
         this.hotCities=data.data.hotCities
         this.cities=data.data.cities
        }
      })
  },
  updated(){
    this.scroll.refresh()
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
    this.$bus.$on('change',data=>{
      this.letter=data
    })
  },
}
</script>

<style lang='less' scoped>
@import '../../../assets/styles/commom.less';
.wrapper-citylist{
  overflow: hidden;
  position:absolute;
  top:1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  
}
.title{
  padding: .1rem .2rem;
  line-height: .4rem;
  // padding-left: .2rem;
  background-color: #eee;
  color: #666;
  // border-bottom:.02rem #333 solid ;
}
.clearfix:before,.clearfix:after {

  content: "";

  display: block;

  clear: both;

}
.button-lists{
  padding: .1rem .4rem 0rem .2rem;
  width: 100%;
  // display: flex;
  // flex-flow:row wrap ;
  .button-wrapper{
    float: left;
    width: 33%;
    padding: .06rem;
    .button{
      width: 2.0rem;
      border: .03rem @color-bg solid;
      text-align: center;
      font-weight: 600;
      padding: .04rem;
      border-radius: .08rem;
      color: @color-bg;
    }
    .buttonhot{
      width: 2.0rem;
      border: .03rem #888 solid;
      text-align: center;
      font-weight: 600;
      padding: .06rem;
      border-radius: .08rem;
      color: #888;
    }
  }
}
.item-lists{
  .city-list{
    padding: .12rem;
    // border-bottom: .01rem #666 solid ;
    color: #666;
  }
}
</style>