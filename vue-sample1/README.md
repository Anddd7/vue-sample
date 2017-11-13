### 安装

```shell
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

### Vue开发

先看一遍官网教程 ,熟悉基本用法.组件和动画部分可以等实践的时候再联系起来看.

参考[VUE系列教程目录](http://www.jianshu.com/p/6251ed0719c4)构建了第一个Vue的工程 ,做了一些小的改动.直接使用Axios作为http框架.

以NodeJs中国社区提供的Api展示出文章的列表和详情

> 对前端开发的认识还停留在好几年前，相比之下使用vue的开发感觉非常好，使用import去导入各种依赖是很后端的写法。熟悉过后整个开发、维护的成本都会更低。

### Element.UI 开发

集成饿了么的UI框架。

```shell
npm i element-ui -S

```
