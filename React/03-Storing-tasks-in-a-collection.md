> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

### 3.在集合中储存任务(Storing tasks in a collection)

Meteor使用集合(collections)储存持久化数据。在Meteor中，集合的特殊之处在于，可以同时在服务端和客户端读取数据，这让我们很容易编写视图层逻辑，而不需要编写太多服务端代码。集合会自动更新自身，所以一个视图组件配合集合，可以自动的显示最新的数据。

你可以在Meteor教程中阅读更多[有关集合的文章](http://guide.meteor.com/collections.html)。

创建一个集合很简单，只需要在你的代码中调用`MyCollection = new Mongo.Collection("my-collection");`。在服务端，这会创建一个名叫`my-collection`的MongoDB集合，它会创建一个缓存去链接服务端的集合。我们将在第12节了解更多客户端和服务端的区别，我们假设整个数据库都运行在客户端，并开始编写我们的代码。

我们创建一个Mongo集合来定义新的`tasks`模块，并导出它：

```javascript
//imports/api/tasks.js
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
```

注意，我们把这个文件放在了新的目录`imports/api`下。这是一个合适的位置，用于放置和API有关的文件。我们在这里抛出"collections"，之后读取它并添加一个"publications"，再用"methods"去编辑它。你可以在Meteor指南中了解更多有关如何[在APP中组织你的代码结构](http://guide.meteor.com/structure.html)。

我们需要在服务端导入这个模块（这将创建MongoDB集合，并设置管道得到数据给Client）：

```javascript
//server/main.js
import '../imports/api/tasks.js';
```

#### 在React component中使用集合数据

我们使用Atmosphere包:`react-meteor-data`，它会创建一个数据容器，把Meteor的响应式数据供给给React component。

我们要安装一个Meteor包，以及它要使用到的NPM包，`react-addons-pure-render-mixin`：

```
meteor npm install --save react-addons-pure-render-mixin
meteor add react-meteor-data
```

在使用`react-meteor-data`前，我们需要使用`createContainer`高阶组件把我们的组件包裹在一个容器中：

```javascript
//imports/ui/App.jsx
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

//App容器 - 代表整个App
class App extends  Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
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

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
```

这个被包裹的`App`组件从`Tasks`集合中提取tasks，并将它们用作App底层组件，它们被包装为`tasks` prop。它以响应的方式运行，当数据库内容改变，App会重新渲染，我们可以立刻看到！

当你对代码进行以上更改时，你会发现之前在代办列表中的任务消失了。因为我们现在的数据库是空的，我们需要插入一些任务。

#### 从服务端数据库控制台插入任务

我们称集合中的每一项为文档。使用服务端数据库控制台插入一些文档到我们的集合中。在一个新的terminal中进入你的app项目目录，并键入：

```
meteor mongo
```

这会在你app的本地开发数据库中打开一个控制台。键入下面的代码：

```
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
```

在浏览器中，你可以立刻看到用户界面更新并展示了这个新的任务。可以看到，我们不需要编写任何代码将服务端数据库连接到前端——一切都是自动的。

用同样的方法从数据库控制台添加一些不同的任务吧。在下一节，我们将了解怎样在app用户界面增加一些功能，比如不使用数据库控制台去增加任务。

上一节：[Components(组件)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/02-Defining-views-with-React-components.md)

下一节：[Forms and events(表单和事件)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/04-Forms-and-events.md)
