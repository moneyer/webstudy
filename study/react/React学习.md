# React学习

## React事件绑定机制

1.事件的名称都是React提供的,因此名称的首字母必须大写onClick、onMouseOver

2.为事件提供处理函数，必须是如下格式

```javascript
onClick = { function }
```

3.用的最多的事件绑定的形式为：

```js
<button onClick={ () => this.show('传参') }>按钮</button>

// 事件的处理函数，需要定义为 一个箭头函数，然后赋值给 函数名称
show = (arg1) => {
    console.log('show方法' + arg1);
}
```

