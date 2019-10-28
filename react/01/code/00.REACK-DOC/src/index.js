import React from 'react';  // 如果这样导入  后面继承必须 extends React.Component   如果第一种导入方式 则可以直接继承 Component
import ReactDOM from 'react-dom';    //把创建好的 组件 和虚拟DOM 放到页面上展示的

import BindInputValue from '@/components/BindInputValue';



// 使用 ReactDOM 把虚拟DOM 渲染到页面上
ReactDOM.render(<div>
  <BindInputValue>

  </BindInputValue>
</div>,document.getElementById('root'));
