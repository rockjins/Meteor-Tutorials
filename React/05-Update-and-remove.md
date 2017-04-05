> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

### 5.检查任务和删除任务

到目前为止，我们还仅仅只能插入文档。现在，我们将学习怎么去更新和删除它们。

让我们添加两个新元素到我们的组件，一个复选框和一个删除按钮，以及它们对应的时间管理器：

```javascript
import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
```

#### 更新

在上面代码中，我们调用`Tasks.update`去检查一个任务。

集合上的更新功能需要两个参数。第一个参数是标识集合子集的选择器，第二个是一个update参数，用来指定要对匹配对象做什么。

在这个例子中，选择器就是相对应的任务的`_id`，update参数用`$set`去切换`checked`字段，这将代表任务是否已经完成。

#### 删除

上面代码使用`Tasks.remove`去删除任务。`remove`函数只需要一个参数，一个选择器，用于确定要在集合中删除的项目。

上一节：[Forms and events(表单和事件)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/04-Forms-and-events.md)

下一节：[Running on mobile(在移动端运行)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/06-Running-on-mobile.md)
