## Vue.js Sample
学习Vue.js ,直接使用vue-cli搭建开发环境


### 安装
```
#工具
npm set registry https://registry.npm.taobao.org #注册淘宝npm镜像
npm install -g vue-cli
npm install -g webpack 

#项目初始化
vue init webpack <project-name>
cd <project-name>
npm install #自动安装所需组件包

#启动
npm run dev
```

### 开发
参考[VUE系列教程目录](http://www.jianshu.com/p/6251ed0719c4)

调整了开发目录
- assets:图片/引用的js包等 ( 可移动到static中 )
- components:可复用vue组件
- config:全局配置文件
- pages:vue页面
- style:scss文件 ( 需要安装sass-loader和node-sass)
- App.vue:主页面组件
- main.js:主页控制器
