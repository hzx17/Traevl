# traevl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 项目初始化
 
 ## 在index.html中的meta标签中添加移动端不可通过手指放大缩小
 ## 引入重置样式表 
 ## 解决移动端高像素1px边框问题
 ## 解决移动端点击300ms延时
     npm i fastclick --save  安装fastclick第三方包
     在main.js文件中引入,调用
     ```javascript
     import fastClick from 'fastclick'
     fastClick.attach(document.body)
    ```
 ## 在阿里巴巴矢量图库创建项目

 # 5月26日总结
      完成了项目的搭建，完成了home组件下的header，
  

# 编写home-swiper
      * 安装vue-awesome-swiper:  npm install swiper@5 vue-awesome-swiper@2.6.7 --save   
      (需要指定swiper与vue-awesome-swiper版本)
      * 全局引入
      * 编写组件

# 编写home-icons
     * 默认设置为两排，用swiper组件轮播，利用计算属性计算pages[]数组


## 5月27日总结
   完成了轮播图与图标组件的编写

## 5月28日总结
    1. 完成了机票推荐组件，使用axios请求数据，props传参
    2. 完成了城市页面布局，采用axios请求数据，全局事件总线传参（在main.js中设置全局事件总线，为传参组件触发一个事件，接收参数的组件绑定事件）
    3.scroll使用别人写好的组件better-scroll