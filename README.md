# AngularWebpackDemo
====================

#### 环境构建方法
*  需要先安装NodeJS
1. npm install webpack -g
2. 本目录下npm install
3. npm start
4. 访问localhost:8888
#### 目的
--------------------
* 示范使用Webpack搭建Angular环境的方法
* 各种Angualar组件例子
* 实践[Angular风格指南](https://github.com/mgechev/angularjs-style-guide/blob/master/README-zh-cn.md)



#### 代码风格规范
--------------------
参考但不完全遵循
[Angular风格指南](https://github.com/mgechev/angularjs-style-guide/blob/master/README-zh-cn.md)


#### 目录结构
--------------------
目前在做的是基于angular的拖拽这一块,其他先不要管

/app/ngDraggable 拖放程序示例

/app/ngInject    angular三种常用注入方法

/app/imageLoad 测试image资源加载情况

#### 开发步骤
--------------------
通过修改index.js

```app.config(['$urlRouterProvider',
    function ($urlRouterProvider) {

        $urlRouterProvider.otherwise('/drag')
    }]);
````
