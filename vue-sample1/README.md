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
先看一遍官网教程 ,熟悉基本用法.组件和动画部分可以等实践的时候再联系起来看.
参考[VUE系列教程目录](http://www.jianshu.com/p/6251ed0719c4)构建了第一个Vue的工程 ,做了一些小的改动.直接使用Axios作为http框架.

调整了开发目录
- assets:图片/引用的js包等 ( 可移动到static中 )
- components:可复用vue组件
- config:全局配置文件
- frame:中间页面
- pages:各模块页面
- style:scss文件 ( 需要安装sass-loader和node-sass)
- App.vue:主页面组件
- main.js:主页控制器
