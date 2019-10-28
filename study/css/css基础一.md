title: css基础一
date: 
categories:
  - 日志
  - css
tags:
  - css
---

  - 基础选择器
    * 标签选择器 （掌握）
    * 类选择器 （掌握）
    * ID 选择器 
    * 通配符选择器
  - 复合选择器 （交集选择器）
    * 标签指定样式选择器
    * 后代选择器
    * 子代选择器
    * 并集选择器
    * 属性选择器
    * 伪类选择器

<!--more-->


# css基础一

## css新知识学习

### css整体的重点

+ 选择器
+ 盒子模型
+ 浮动
+ 定位
+ 动画，伸缩布局（c3部分）

### css概念

+ 作用：
  - 美化网页（通过 css 控制标签的样式）
  - 网页布局  (通过 css 控制标签的位置)

+ 概念：层叠样式表（Cascading Style Sheets）或者级联样式表
  - 层叠： css 的特性
  - css 是以 html 为基础的
+ 书写方式：
  - 内嵌式写法
    * 先准备一个 html 页面

    * 在 html 页面中，head 标签中添加一个 style 标签

    * 在 style 标签中写 css 代码
    ```html
    <head>
      <meta charset="UTF-8">
      <title>内嵌式</title>

      <!-- 内嵌式写法 -->
      <style type="text/css">
        css代码
      </style>
    </head>
    ```

  - 外联式写法
    * 首先新建一个单独的 css 文件 （在文件中不需要写 style 标签，直接写 css 代码就可以）
    * 通过 link 标签将该 css 文件引入到当前 html 页面中 ,**一个页面可以同时引用多个 css 文件**
    ```html
    <head>
      <meta charset="UTF-8">
      <title>外联式</title>
      <!-- 外联式写法 -->
      <link rel=stylesheet href="1.css">
    </head>
    ```
    * 行内式写法： 将 css 代码写入到 html 标签内部
    `<p style="color: red; font-size: 20px;">行内式写法</p>`

### css 语法

+ 选择器 {属性 : 值;.....}
+ 选择器分类
  - 基础选择器
    * 标签选择器 （掌握）
    * 类选择器 （掌握）
    * ID 选择器 
    * 通配符选择器
  - 复合选择器 （交集选择器）
    * 标签指定样式选择器
    * 后代选择器
    * 子代选择器
    * 并集选择器
    * 属性选择器
    * 伪类选择器

### 标签选择器

+ html 标签名 {属性: 值;}
+ 作用:
  - 通过 html 标签名选中需要设置的样式的标签

```html
  <style type="text/css">

    /* 将页面中所有的 p 标签选中 */
    p {
      color: red;
    } 

    div {
      color: red;
      width: 200px;
      height: 200px;
      background-color: green;
    }
  </style>
```

### 类选择器 

.自定义类名 {属性: 值;....}  定义
类样式的调用:
  标签通过 class 属性去调用定义好的类样式
  例如:
    .test {color: red;}
    <p class="test">文字</p>

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style type="text/css" media="screen">
    /* 选中 class 名是 test 的标签 */
    .test {color: red;}
  </style>
</head>
<body>
  <p class="test">String</p>
  <p>Sting2</p>
</body>
</html>
```

+ 类样式的特点:
  - 一个标签可以同时调用多个类样式
  - 一个类样式可以被多个标签同时调用

### 命名规范

+ 自定义类名不能使用纯数字或者以数字开头
+ 不推荐使用汉字定义类名
+ 建议: 不推荐使用标签名作为类名
+ 一般我们用据用一定语义的单词去定义一个类名

### ID选择器
定义:
    `#自定义id名称 {属性: 值;}`
调用:
    标签通过id属性调用id样式表

```html
#test {color: red;}
<p id=" test"></p>
```

ID选择器与类选择器的区别:
  - 语法定义有区别  (.   #)
  - 在 id 选择器中, 一个标签只能调用一个 id 样式.
  - 一个类样式可以被多个标签同时调用,但是一个 id 样式最好只被一个标签调用 (否则, 不符合编程规则)

### 通配符选择器 (了解)

> 语法:
>     * {属性: 值;...}
>  特点:
>    将页面中所有的标签都选中

### 补充属性

> + 单位
>     px: 像素
>     em: 1em === 1个文字的大小
>     rem
>     
> + 颜色的表示方式:
>   - red, green
>   - 使用十六进制表颜色 (#000-fff)
>   - rgb(三原色) red green blue (0-255)
>   - rgba: 可以实现颜色半透明效果    a ==> alpha   (0-1)
>   - opacity ==> 实现半透明效果(包括背景  文字)  (0-1)
>  
>  + 文本修饰
>    text-shadow: 设置文字阴影.
>    
>    text-shadow: 0px 0px 10px red;
>    

### font 属性介绍

> + font-size: 设置文字大小
> + font-family: 设置文字字体
> + font-weight: 设置字体是否加粗显示  normal==400 |bold(加粗)==700 不带单位
> + font-style: 设置文字是否斜体显示   normal| italic
> + line-height: 设置文件行高 (暂时理解文字的高度) 通过该属性可以改变文字的上下间距

### font 属性联写

`font: 700 italic 30px/20px "微软雅黑";`
> 总结:
> - 在 font 属性联写中 必须设置 font-size 和 font-family
> - 在 font 属性联写中, font-size 必须 设置在 font-family 之前
> - 如果要设置行高, 那么行高也必须设置到 font-size 之后

### 复合选择器

> + 标签指定式选择器
>   标签名.类名 {属性: 值;}
>   标签指定式选择器符合 : 既 .... 又 .... 的关系
>   
> + 后代选择器
>   选择器 选择器 {属性: 值;}
>   总结:
>       - 后代选择器标签之间的结构关系必须是嵌套结构
>       - 后代选择器中只能选中所有的后代元素 (直接子元素和间接子元素)
>       - 后代选择器中, 选择器与选择器之间必须使用空格隔开
> 
> + 子代选择器
>    选择器>选择器 {属性: 值;}
>    `div>span { color: red;}`
>    总结:
>       - 子代选择器只能选中直接子元素
>       - 子代选择器不能选中父元素
>       - 子代选择器的标签的结构必须是嵌套结构
> 
> + 并集选择器
>     选择器,选择器 {属性; 值;}
>     注意:
>         - 首先并集选择器可以选中所有符合条件的标签
>         - 并集选择器与标签的结构无关
>         - 并集选择器一般在 css 样式初始化的时候会使用
>     
> + 结构伪类选择器
>   :first-child {属性: 值;} 选中父元素的第一个子元素
>   :last-child {属性: 值;} 选中父元素的最后一个子元素
>   :nth-child(n) {属性: 值;} 选中父元素的第 n 个子元素
>       - n 可以取一个正整数 (取值可以取到数字 0)
>       - n 可以设置一个关键字 odd(奇数个数)|even (偶数个数)
>       - n 可以是一个表达式  an + b   a 和 b 可以设置正数和负数
>   
>   :nth-laast-child(n) {属性: 值;} 选中倒数第n个子元素


### 常见属性总结

|属性名|作用|
|-----|---|
|color|设置文字颜色|
|background-color|设置背景颜色|
|font-size: 20px;|设置文字大小为20像素|
|width,height|宽度,高度|
|text-align: left,center,right;**(只能用在块级元素中)**|设置内容的对齐方式(文字,图片)|
|text-indent: 20px ,2em;**(只能用在块级元素中)**|设置文件首行缩进(em代表汉字大小)|



