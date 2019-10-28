# lbbc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 报错

### 滑动导航栏 mui报错

严格模式报错
'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

问题解决方式


50:0-3 "export 'default' (imported as 'mui') was not found in '../../lib/mui/js/mui.min.js'

问题解决方式
1. 安装babel-plugin-transform-remove-strict-mode
cnpm i babel-plugin-transform-remove-strict-mode -D
2. 在.babelrc文件的plugins节点中配置：
"transform-remove-strict-mode"

参考链接https://segmentfault.com/a/1190000017558699?utm_source=tag-newest
