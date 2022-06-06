<template>
  <div class="list-wrapper">
     <div class="title">门票推荐</div>
     <div class="menpaio-lists">
       <div class="list-card clearfix" v-for="(item,index) in menpiao" :key="index" >
         <div class="list-left">
           <div class="mp-title">{{item.title}}</div>
           <div class="mp-describe">{{item.mpdescribe}}</div>
         </div>
         <div class="list-right">
           <div class="mp-score">￥{{item.price}}</div>
           <div class="mp-yudin">立即预定</div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: ['menpiao'],
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.list-wrapper{
  padding-left: .1rem;
}
 .title{
    font-size: @font-recommend-size;
    color: @font-recommend;
    font-weight: 600;
}
.menpaio-lists{
  width: 100%;
  padding: .1rem 0;
  .list-card{
    padding: .32rem ;
    height: 1.6rem;
    .list-left{
      float: left;
      .mp-title{
        color: #333;
        height: .48rem;
        padding:  0  0 .12rem 0;
        font-size: .32rem;
        line-height: .36rem;
      }
      .mp-describe{
        color: #00bcd4;
        height: .48rem;
        padding:  0  0 .12rem 0;
        font-size: .24rem;
        line-height: .36rem;
      }
    }
    .list-right{
      float: right;
      padding-left: .3rem;
      .mp-score{
        color: @price-color;
        height: .36rem;
        font-size: .36rem;
        line-height: .36rem;
        padding-bottom: .08rem;
        text-align: center;
      }
      .mp-yudin{
        width: 1.48rem;
        height: .42rem;
        line-height: .42rem;
        text-align: center;
        border-radius: .74rem;
        color: #fff;
        font-size: .24rem;
        background-color:@price-color;
      }
    }
  }
}
</style>