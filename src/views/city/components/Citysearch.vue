<template>
  <div class="wrapper">
    <div class="search-wrapper">
      <input type="text" v-model="keyWord" class="input-search"  placeholder="请输入城市名">
    </div>
     <div class="search-result" ref="searchwrapper" v-show="keyWord"  >
        <ul >
          <li class="item-search" v-for="(item,index) of list" :key="index">{{item}}</li>
          <li class="item-search" v-show="!list.length">未找到该城市，请重新输入！</li>
        </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Citysearch',
  data(){
    return{
      timer:null,
      cities:'',
      keyWord:'',
      list:''
    }
  },
  watch:{
    keyWord(){
      if(this.timer){
        clearTimeout(this.timer)
      };
       if(this.keyWord){
          this.timer =setTimeout(() => {
          const results=[];
          for (let i  in this.cities) {
            this.cities[i].forEach(value => {
              if(value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord)> -1){
                results.push(value.name)
              }
            });
          }
          this.list=results
        }, 50);
        return this.list
      }else{
        return this.list=[]
      }
    
    }
  },
  updated(){
    this.scroll.refresh()
  },
  mounted (){
    this.scroll = new BScroll(this.$refs.searchwrapper);
     this.$bus.$on('citydata',data=>{
        if(data.status==200){
          this.cities=data.data.cities
        }
      })
  },
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
.search-wrapper{
  height: .72rem;
  background-color: @color-bg;
  padding: 0.1rem .4rem;
  .input-search {
    box-sizing: border-box;
    width: 100%;
    height: .50rem;
    line-height: .50rem;
    text-align: center;
    margin: 0;
    padding: 0;
    border-radius:.08rem;
    font-size: .28rem;
  }
}
.search-result{
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color:#fff;
  .item-search{

    padding: .12rem;
    // border-bottom: .01rem #666 solid ;
    color: #666;
  }

}
</style>