import React from 'react';   //创建组件、虚拟DOM元素，生命周期

// 第一种创建组件的方式
export default function Hello(props){
  // 如果在一个组件中 return 一个 null 。则表示此组件是空的，什么都不会渲染
  // return null;
  // 在组件中，必须 返回一个 合法的 JSX 虚拟DOM元素


  console.log(props);
  return <div>这是 Hello 组件--{ props.name }</div>
}

// 把组件暴露出去
// export default Hello
