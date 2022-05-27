<template>
  <div class="wrapper-icons">
    <ul class="inner-icons">
      <swiper>
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <li class="icon" v-for="item in page" :key='item.id'>
            <div class="icon-img">
              <img class="img-icon" :src="item.imgUrl" alt="">
            </div>
            <span>{{item.desc}}</span>
          </li>
        </swiper-slide>
      </swiper>
    </ul>
  </div>   
</template>

<script>
export default {
  name:'Homeicons',
  data(){
    return{
       "iconList": [
      {
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票景点间带你"
      },
      {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      },
      {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      },
      {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      },
      {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      },
      {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      },
      {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      },
      {
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        "desc": "一日游"
      },
      //   {
      //   "id": "0010",
      //   "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
      //   "desc": "一日游"
      // }
    ],
    }
  },
  computed:{
    pages(){
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const page=Math.floor( index / 8)
         if(!pages[page]){
          pages[page]=[]
         }
        pages[page].push(item)
      })
      return pages
    }
  }


}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/commom.less';
@import '../../../assets/styles/minix.less';
.wrapper-icons{
  overflow: hidden;
  width: 100vw;
  .inner-icons{
    padding: .1rem;
      height: 3.8rem;
    .icon :extend(.ellipsis){
      width: 25%;
      float: left;
      height: 1.9rem;
      padding: .1rem 0;
      color: @color-font;
      font-size: @font-icon;
      text-align: center;
      line-height: .4rem;
     
      .icon-img{
        width: 1.3rem;
        height: 1.3rem;
        margin: 0 auto;
        .img-icon{
          width: 100%;
        }
      }
    }
  }
}
</style>