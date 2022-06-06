<template>
  <div class="about">
    <div class="about-cards">
      <div class="mp-card clearfix">
        <div class="mp-left">
          <div class="mp-score">
            <span class="mp-commentcard-score">{{pingjia.pingfen}}</span>
            <span class="mp-commentcard-text">分</span>
            <span class="mp-commentcard-desc">{{pingjia.haohuai}}</span>
          </div>    
          <div class="mp-total">
            <span class="mp-totalcommentnum">{{pingjia.pingjianumber}}条评论</span>
            <span class="mp-totalcommentnum2">{{pingjia.count}}条攻略</span>
          </div>
        </div>
        <div class="mp-right"><span class="iconfont">&#xe622;</span></div>
      </div>
      <div class="mp-card">
        <div class="mp-left">
          <div class="mp-score">
            景区简介
          </div>    
          <div class="mp-total">
            <span class="mp-totalcommentnum">景区开放提示-贴心提示</span>
          </div>
        </div>
        <div class="mp-right"><span class="iconfont">&#xe622;</span></div>
      </div>
    </div>
    <div class="about-loc">
      <div class="about-inner">
       <span class="iconfont">&#xe600;</span>&nbsp;{{loc}}
      </div>
      <div class="about-right"><span class="iconfont">&#xe622;</span></div>
    </div>
    <div class="about-warning clearfix" v-show="true">
      <div class="warning-inner">
         <span class="iconfont">&#xe609;</span>&nbsp;{{tongzhi}}
      </div>
      <div class="warning-right"><span class="iconfont">&#xe622;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailAbout',
  props:['tongzhi','loc','pingjia']
}
</script>

<style lang='less' scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.about{
  width: 100%;
  background-color: #fff;
  padding: .2rem;
  border-radius: .2rem 0.2rem 0 0;
}
.about-cards{
  width: 100%;
  display:flex;
  justify-content:space-between ;
  .mp-card{
    width: 49%;
  .mp-left{
    float: left;
    .mp-score{
        height: .6rem;
        padding: .1rem 0 .1rem 0;
        .mp-commentcard-score{
          font-size:@font-recommend-size ;
          color:@price-color ;
          margin-bottom:.1rem ;
          font-weight: 600;
        }
        .mp-commentcard-text{
          font-size:@font-icon;
          color:@price-color ;
        }
        .mp-commentcard-desc{
          padding-left:.8rem;
          font-size:@font-icon;
          color:@price-color ;
        }
    }
    .mp-total{
        height: .34rem ;
        padding: 0 0 .1rem 0;
        .mp-totalcommentnum{
           color: #999;
           font-size: .2rem;
        }
        .mp-totalcommentnum2{
          padding-left: .1rem;
           color: #999;
           font-size: .2rem;
        }
    }
    .mp-jianjie{
        height: .6rem;
        padding: .1rem 0 .1rem 0;
        line-height: .4rem;
        font-size:@font-recommend-size ;
        color:#333 ;
        margin-bottom:.1rem ;
        font-weight: 600;
    }
  }
   .mp-right{
    float: right;
    padding-right: .3rem;
    line-height: .94rem;
  }
  }
     .iconfont{
     color: #999;
   }
}
.about-loc{
  width: 100%;
  height: .8rem;
  margin: .08rem 0 0.08rem 0;
  .iconfont{
    font-size: .28rem;
    color: #999;
  }
  .about-inner{
    float: left;
    padding: .1rem;
    line-height: .6rem;
    color: #666;
    font-size: .28rem;
  }
  .about-right{
    float: right;
    padding-right: .3rem;
    line-height: .8rem;
  }
}
.about-warning :extend(.ellipsis){
  width: 100%;
  height: .8rem;
  background-color: #fff5e5;
  .iconfont{
    font-size: .28rem;
    color: #ff8500;
  }
  .warning-inner{
    float: left;
    padding: .1rem;
    line-height: .6rem;
    color: #ff8500;
    font-size: .28rem;
  }
  .warning-right{
    float: right;
    padding-right: .3rem;
    line-height: .8rem;
  }
}
</style>