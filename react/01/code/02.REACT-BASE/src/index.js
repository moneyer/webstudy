// 1. 导入包
// import React,{Component} from 'react';   //创建组件、虚拟DOM元素，生命周期
import React from 'react';  // 如果这样导入  后面继承必须 extends React.Component   如果第一种导入方式 则可以直接继承 Component
import ReactDOM from 'react-dom';    //把创建好的 组件 和虚拟DOM 放到页面上展示的

// 使用 function 构造函数, 定义普通的无状态组件
function CommentsItem(props) {
  return <div>
    <h1>评论人: {props.user}</h1>
    <p>评论内容: {props.content}</p>
  </div>
}


// 使用 class 关键字, 定义父组件
class CommentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: '张三', content: '哈哈,沙发' },
        { id: 2, user: '李四', content: '哈哈,板凳' },
        { id: 3, user: '王五', content: '哈哈,凉席' },
        { id: 4, user: '赵六', content: '哈哈,砖头' },
        { id: 5, user: '田七', content: '哈哈,楼下智障' }
      ]
    }
  }

  render() {
  return <div>
    <h1>这是评论列表组件</h1>

    {this.state.CommentList.map(item =>
      <CommentsItem {...item} key={item.id}></CommentsItem>)}
  </div>;
  }
}


// 3. 使用 ReactDOM 把虚拟DOM 渲染到页面上
ReactDOM.render(<div>
  <CommentsList>
  </CommentsList>
</div>,document.getElementById('app'));
