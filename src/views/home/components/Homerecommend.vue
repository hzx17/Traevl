<template>
  <div class="wrapper-recommend">
    <div class="title">优惠机票</div>
    <div class="recommend-lists">
      <div class="list" v-for="item in jipiao" :key="item.id">
        <div class="img-icon-top">
          <div class="img-box">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="text-title">
             <div class="text-in">
              <p class="text1"><span>{{item.cityto}}</span></p>
              <p class="text2"><span>{{item.coupon}}</span></p>
            </div>
          </div>
        </div>
        <div class="list-text">
          <p class="list-describe"><span>{{item.describe}}</span></p>
          <p class="list-price">￥<span>{{item.price}}</span></p>
        </div>
      </div>
    </div>
    <div class="more">
      <span>更多机票特惠</span>
      <span class="iconfont">&#xe65f;</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'Homerecommend',
  data(){
    return{ 
    }
  },
  props:['jipiao']
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.wrapper-recommend{
  width: 100vw;
  .title{
    margin: .16rem .0rem .16rem .32rem;
    font-size: @font-recommend-size;
    color: @font-recommend;
    font-weight: 600;
  }
  .recommend-lists{
    padding: 0rem .2rem .2rem .2rem  ;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .list{
      width:3.48rem ;

      // height: 3.64rem;
      .img-icon-top{
        width: 3.48rem;
        height: 2.18rem;
        position: relative;
        .img-box{
          width: 100%;
          height: 100%;
          img{
            width: 100%;
               border-radius: .1rem;
          }
        }
        .text-title{
          position:absolute;
          bottom: 0;
          width: 100%;
          .text-in{ 
            width: 2.3rem;
            margin: 0 auto;
            padding: .1rem .24rem;
            background-color: rgba(00, 00, 00, .6);
          .text1:extend(.ellipsis){
            font-size: .28rem;
            text-align: center;
            color: #fff;
            padding-bottom:.16rem ;
          }
          .text2:extend(.ellipsis){
            font-size: @font-icon;
            color: #ffde00;
              text-align: center;
          }
        } 
        }
      }
      .list-text{
        padding: .1rem;
        .list-describe{
          font-weight: 200;
          font-size: .24rem;
          padding:0.1rem .01rem .1rem 0rem ;
        }
        .list-price{
          color: @price-color;
          font-weight: 600;
          padding:0.04rem .01rem .1rem 0rem ;
          font-size: .36rem;
        }
      }
    }
  }
  .more{
    margin: .2rem .2rem .4rem .2rem;
    height: .8rem;
    border-radius:.06rem ;
    line-height: .7rem;
    text-align: center;
    border: @color-bg .04rem solid;  
    color: @color-bg;
    .iconfont{
      font-size: .05rem;
    }
  }
}

</style>