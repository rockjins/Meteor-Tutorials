> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

### 7.在组件状态中存储临时的用户界面数据

在这一章节，我们将在app中添加客户端数据过滤功能，以便用户选择只查看未完成的任务。我们将学习怎样使用React的component state去存储只在客户端用到的临时数据。

首先，我们需要增加一个复选框到`App`组件：

```javascript
//imports/ui/App.jsx

<header>
  <h1>Todo List</h1>
//新添加内容
  <label className="hide-completed">
    <input
      type="checkbox"
      readOnly
      checked={this.state.hideCompleted}
      onClick={this.toggleHideCompleted.bind(this)}
    />
    Hide Completed Tasks
  </label>
//新添加内容
```

你可以看到它从`this.state.hideCompleted`读取数据。React有一个特殊的字段叫`state`，你可以把组件数据存储和封装在里面。我们需要在组件的构造器中初始化`this.state.hideCompleted`的值：

```javascript
//imports/ui/App.jsx

class App extends Component {
  //新添加的内容
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }
  //新添加的内容
}
```

我们可以事件管理器中调用`this.setState`去更新`this.state`，这将异步更新state属性，并重新渲染组件：

```javascript
//imports/ui/App.jsx

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  //新添加的内容
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
//新添加的内容
}
```

当`this.state.hideCompleted`为true时，我们需要更新`renderTasks`方法去过滤已经完成的任务：

```javascript
//imports/ui/App.jsx

renderTasks() {
  let filteredTasks = this.props.tasks;
  if (this.state.hideCompleted) {
    filteredTasks = filteredTasks.filter(task => !task.checked);
  }
  return filteredTasks.map((task) => (
    <Task key={task._id} task={task} />
  ));
}
```

如果你现在选择复选框，任务列表不会再展现已经完成的任务了。

#### 新的特性：显示未完成任务的数目

现在我们要写一个查询条件，用来过滤掉已经完成的任务。我们也可以用相同的查询来显示已完成的任务总数。为此，我们需要在我们的数据容器中拿到一个计数，并在`render`方法中添加一行代码。因为我们已经有客户端集合中的数据，增加这个额外的计数不需要向服务端发起任何请求。

```javascript
//imports/ui/App.jsx

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    //新添加的的内容
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    //新添加的的内容
  };
}, App);
```

```javascript
//imports/ui/App.jsx

return (
  <div className="container">
    <header>
      //新添加的的内容
      <h1>Todo List ({this.props.incompleteCount})</h1>
      //新添加的的内容
      <label className="hide-completed">
        <input
//...省略一些代码...

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  //新添加的的内容
  incompleteCount: PropTypes.number.isRequired,
  //新添加的的内容
};
)
```

上一节：[Running on mobile(在移动端运行)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/06-Running-on-mobile.md)

下一节：[Adding user accounts(添加用户账号)待翻译]()
