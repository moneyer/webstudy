// 1. 导入包
import React,{Component} from 'react';   //创建组件、虚拟DOM元素，生命周期
// import React from 'react';  // 如果这样导入  后面继承必须 extends React.Component   如果第一种导入方式 则可以直接继承 Component
import ReactDOM from 'react-dom';    //把创建好的 组件 和虚拟DOM 放到页面上展示的

class Movice extends Component {
  constructor() {
    super();

    this.state = {
      msg: '大家好,我是 class 创建的 Movice 组件'
    }
  }

  render() {
    return <div>
      这是 Movice 组件
    </div>;
  }
}

const user = {
  name: 'jack',
  age: '20',
  gender: '男'
};

// 3. 使用 ReactDOM 把虚拟DOM 渲染到页面上
ReactDOM.render(<div>
  123
  <Movice {...user}></Movice>
</div>,document.getElementById('app'));
