// 假设 index.js 还是我们的入口文件
// console.log('ok');
// webpack-dev-server 打包好的 main.js 是托管在内存中；

// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react';   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';    //把创建好的 组件 和虚拟DOM 放到页面上展示的

// 2. 创建虚拟DOM元素
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2： 是一个对象或 null，表示 当前这个 DOM 元素的属性
// 参数3： 子节点（包括 其他 虚拟DOM 获取其他 文本子节点）
// 参数n： 其他子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的子节点</h1>
// const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1'}, '这是个大大的H1');
// const mydiv = React.createElement('div', { id: 'div1', title: 'this is a div'}, '这是个div',myh1);

// 渲染 页面上的 DOM 结构，最好的方式就是写 HTML 代码
// const mydiv = <div id="mydiv" title="div aaa">这是一个div元素
//   </div>
let a = 10;
let str = '你好，中国';
let boo = false;
let title = '999';
const h1 = <h1>哈哈哈哈哈哈</h1>;
const arr = [
  <h2>这是H2</h2>,
  <h3>这是H3</h3>
]

const arrStr = ['毛利兰','柯南','小五郎','灰原哀'];

// const nameARrr = [];
// arrStr.forEach(item => {
//   const temp = <h5>{item}</h5>;
//   nameARrr.push(temp);
// });

// const result = arrStr.map(item => {
//   return item + '``';
// });

// console.log(result);

// 3. 使用 ReactDOM 把虚拟DOM 渲染到页面上
// 参数1： 要渲染的那个虚拟DOM元素
// 参数1： 指定页面上一个容器
ReactDOM.render(<div>
  { a + 2}
  <hr />
  {str}
  <hr />
  {boo ? '条件为真' : '条件为假'}
  <hr />
  {title}
  <hr />
  {h1}
  <hr />
  {/*{arr}*/}
  <hr />
  {/*{nameARrr}*/}
  <hr />
  {arrStr.map(item => <h3 key={item}> {item} </h3>)}
</div>,document.getElementById('app'));
