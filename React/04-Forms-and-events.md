> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

### 4.使用表单添加任务

在这一节，我们将增加一个表单字段，给用户在列表中添加任务。

首先，让我们增加一个表单域到`App`组件中：

```javascript
//imports/ui/App.jsx
<div className="container">
  <header>
    <h1>Todo List</h1>

    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
      <input
        type="text"
        ref="textInput"
        placeholder="Type to add new tasks"
      />
    </form>
  </header>

  <ul>
```

> 提示：JSX中添加注释的方法：{/\* ... \*/}

你可以看到`form`元素有一个`onSubmit`属性，它映射到组件的`handleSubmit`方法。在React中，你可以这样监听浏览器事件，就像表单上的submit事件。`input`元素有一个`ref`属性，它能让我们稍后轻松的访问到这个元素。

让我们添加`handleSubmit`放到到`App`组件里：

```javascript
//imports/ui/App.jsx

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
//...省略一些代码...

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // 通过React的ref拿到文本字段
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // 当前时间
    });

    // 清空表单
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  //...省略一些代码...
}
```

现在你的App有一个新的表单字段了。只需要在输入框输入文本，并按下回车键，就可以添加任务了。如果你打开一个新的浏览器窗口并再打开这个app，你会发现列表会自动自动在所有客户端同步。

#### 在React中监听事件

就如你看到的，你可以通过参考组件上切确的方法来管理DOM事件。在事件管理器内部，你可以通过使用`React.findDOMNode`去拿到带有`ref`属性的元素。查看更多React支持的事件类型，以及事件系统如何运行的，请参考[React文档](https://facebook.github.io/react/docs/events.html)。

#### 插入集合

在事件管理器内部，我们通过调用`Tasks.insert`添加了一个任务到`tasks`集合，因为我们不用为集合定义一个模式，所以可以添加任何属性到任务对象，比如创建时间。

客户端可以添加任何数据到数据库，这样并不安全，但目前来说一切都没问题。在第10节，我们将学习怎样安全并有限制的将数据插入到数据库中。

#### 储存我们的任务

目前，我们最新的任务在列表的最底下。这对任务列表来说不是很好，我们希望看到最新的任务在最前面。

我们可以通过使用`createdAt`字段自动排序来解决此问题。只需在包裹`App`组件的数据容器内的`find`方法调用时添加一个排序选项：

```javascript
//imports/ui/App.jsx
export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);
```

回到浏览器，并确认是否如期运行：任何新添加的任务都会出现在列表的最顶端，而不是底部。

在下一节，我们会增加一些十分重要的待办事项列表特性：关闭任务和删除任务。

上一节：[Collections(集合)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/03-Storing-tasks-in-a-collection.md)

下一节：[Update and remove(更新和移除)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/05-Update-and-remove.md)
