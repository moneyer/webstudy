// 假设 index.js 还是我们的入口文件
// console.log('ok');
// webpack-dev-server 打包好的 main.js 是托管在内存中；

// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';    //把创建好的 组件 和虚拟DOM 放到页面上展示的

// 第一种创建组件的方式
function Hello(props){
  // 如果在一个组件中 return 一个 null 。则表示此组件是空的，什么都不会渲染
  // return null;
  // 在组件中，必须 返回一个 合法的 JSX 虚拟DOM元素


  console.log(props);
  return <div>这是 Hello 组件--{ props.name }</div>
}

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
