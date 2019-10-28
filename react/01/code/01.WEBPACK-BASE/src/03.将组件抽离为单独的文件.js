// 假设 index.js 还是我们的入口文件
// console.log('ok');
// webpack-dev-server 打包好的 main.js 是托管在内存中；

// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';    //把创建好的 组件 和虚拟DOM 放到页面上展示的

// 导入 Hello 组件
// 默认, 如果不做单独配置的话, 不能省略 .jsx 后缀名
// import Hello from './components/Hello';

// 注意
import Hello from '@/components/Hello';

const dog = {
  name: '大黄',
  age: '3',
  gender: '雄'
}

// 3. 使用 ReactDOM 把虚拟DOM 渲染到页面上
// 参数1： 要渲染的那个虚拟DOM元素
// 参数1： 指定页面上一个容器
ReactDOM.render(<div>
  123
  {/*{ 直接把 组件的名称，以标签形式，丢到页面上即可}*/}
  {/*<Hello name={ dog.name } age={dog.age} gender={dog.gender}></Hello>*/}
  {/* ES6 语法 展开运算符*/}
  <Hello {...dog}></Hello>
</div>,document.getElementById('app'));
