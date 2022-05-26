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