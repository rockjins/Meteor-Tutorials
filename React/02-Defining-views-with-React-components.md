> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

### 2.使用React Components定义视图(Defining views with React components)

我们把React用作视图库，让我们增加一些NPM packages让我们能使用React进行开发。打开一个新的terminal在你的App根目录下，键入以下命令：

```
meteor npm install --save react react-dom
```

#### 替换初始化的代码

在开始前，我们要替换创建App时的初始代码。接着我们讨论要做些什么。

第一步，替换初始化的HTML中的内容：

```html
<head>
  <title>Todo List</title>
</head>

<body>
  <div id="render-target"></div>
</body>
```

第二步，删除`client/main.js`，并创建三个新文件：

```javascript
// ./client/main.jsx

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
})
```

```javascript
// ./imports/ui/App.jsx

import Reacr, { Component } from 'react';

import Task from './Task.jsx';

//App组件 —— 代表整个App
export default  class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks(){
    return this.getTasks().map.((task) => {
      <Task key={task._id} task={task} />
    });
  }

  render(){
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
```

```javascript
// ./imports/ui/Task.jsx

import React, {Component, PropTypes} from 'react';

// Task组件 —— 代表一个单独的todo条目
export  default class Task extends Component {
  render(){
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  //这个组件通过React prop去得到并显示任务
  //我们可以用propTypes去指明哪些是必须的
  task:PropTypes.object.isRequired,
}
```

我们仅在我们的App中做了3件事：

1. 一个`App` React component

2. 一个`Task` React component

3. 一些初始化代码(在`client/main.jsx`客户端JavaScript入口文件中)，在`Meteor.startup`代码块中，我们知道当页面加载完毕后会执行里面的代码。这段代码加载其他组件，并渲染`#render-target`元素。

你还可以在[Application Structure article](https://guide.meteor.com/structure.html)中了解import是如何工作的，还有如何组织你的代码。

在接下来的教程中，我们增加或更改代码，都会涉及到这些组件。

#### 检查结果

在浏览器中，我们的app应该看起来像这个样子：

> Todo List
>
> - This is task 1
>
> - This is task 2
>
> - This is task 3

如果你的app看起来不是这样，可以去[GitHub下载代码](https://github.com/meteor/tutorials)，并和你自己的代码对比，找出不同的地方。

#### HTML文件定义静态内容

Meteor会解析你app目录下的所有HTML文件，并识别三个顶级标签`<head>`,`<body>`和`<template>`。`<head>`标签内的所有内容会发送到客户端HTML的`head`标签，`<body>`标签内的所有内容也会发送到客户端HTML的`body`标签内，就和正常的HTML文件一样。

任何`<template>`标签内的内容会编译成Meteor Templates，你可以在HTML中用`{{>templateName}}`去调用，或在JavaScript中用`Template.templateName`去调用。在这个教程中，我们不会用到Meteor提供的模板特性，因为我们将用React去定义所有视图组件。

#### 用React定义视图组件

在React中，视图组件是`React.Component`的子类(当我们用`import { Component } from 'react'`的方式引入时)。你可以自由的在组件上添加方法，但有几个特殊的方法是不行的，比如`render`方法。组件通过其父组件的`props`属性，也可以接收数据。在这个教程中，我们会重温一些React的通用特性。你也可以查看[React官方教程](https://facebook.github.io/react/tutorial/tutorial.html)。

#### 重新审视JSX中的render方法

在每个React Component中最重要的方法就是`render()`，它会访问React并得到被描述的HTML，然后把组件显示出来。这个HTML内容用JavaScript扩展语法写成，叫`JSX`,他看起来像写HTML一样去写JavaScript。你可以看到一些显而易见的差异：在JSX中，你要用`className`去代替`class`属性。还有一件很重要的事，它不是像Spacebars和Angular一样的模板语言，实际上它是直接编译成正常的JavaScript。[查看更多JSX的信息](https://facebook.github.io/react/docs/jsx-in-depth.html)。

JSX支持`ecmascript`扩展包，所以它默认支持所有Meteor app的扩展包。

```css
/*./client/main.css*/
body {
  font-family: sans-serif;
  background-color: #315481;
  background-image: linear-gradient(to bottom, #315481, #918e82 100%);
  background-attachment: fixed;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0;
  margin: 0;

  font-size: 14px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  min-height: 100%;
  background: white;
}

header {
  background: #d2edf4;
  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
  padding: 20px 15px 15px 15px;
  position: relative;
}

#login-buttons {
  display: block;
}

h1 {
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 10px;
  display: inline-block;
  margin-right: 1em;
}

form {
  margin-top: 10px;
  margin-bottom: -10px;
  position: relative;
}

.new-task input {
  box-sizing: border-box;
  padding: 10px 0;
  background: transparent;
  border: none;
  width: 100%;
  padding-right: 80px;
  font-size: 1em;
}

.new-task input:focus{
  outline: 0;
}

ul {
  margin: 0;
  padding: 0;
  background: white;
}

.delete {
  float: right;
  font-weight: bold;
  background: none;
  font-size: 1em;
  border: none;
  position: relative;
}

li {
  position: relative;
  list-style: none;
  padding: 15px;
  border-bottom: #eee solid 1px;
}

li .text {
  margin-left: 10px;
}

li.checked {
  color: #888;
}

li.checked .text {
  text-decoration: line-through;
}

li.private {
  background: #eee;
  border-color: #ddd;
}

header .hide-completed {
  float: right;
}

.toggle-private {
  margin-left: 5px;
}

@media (max-width: 600px) {
  li {
    padding: 12px 15px;
  }

  .search {
    width: 150px;
    clear: both;
  }

  .new-task input {
    padding-bottom: 5px;
  }
}
```

添加上面的CSS代码到你的项目中，这个首页看起来会很棒。在你的浏览器中检查样式是否加载进去了。

上一节：[Creating an app(创建一个APP)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/01-creating-your-first-app.md)

下一节：[Collections(集合)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/03-Storing-tasks-in-a-collection.md)
