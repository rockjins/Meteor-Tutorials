> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

*译者注：因为我是MAC本，如果你是windows系统，阅读本文，可能会产生一些问题，不过按照官方来说，在METEOR下是不会出现兼容问题的，但谁又知道呢？*

### 1.创建你的第一个APP(Creating your first app)

在这个教程中，我们会创建一个简单的APP去管理一个待办事项列表并和其他人合作完成任务。先创建APP，打开命令行，键入以下命令：

*译者注：前提是你安装了meteor,具体安装步骤可以[参考这里](http://guide-zh.ourmeteor.com/index.html#quickstart)*

```
meteor create simple-todos
```

它会创建一个名叫`simple-todos`的文件夹，里面包含我们开发meteor APP所需要的文件:

```
client/main.js        # 在客户端的JavaScript入口文件
client/main.html      # 定义视图容器
client/main.css       # 定义APP样式
server/main.js        # 服务端的JavaScript入口文件
package.json          # 用于安装和管理NPM包
.meteor               # Meteor的内部文件
.gitignore            # git的管理文件
```

运行这个新创建的APP：

```
cd simple-todos
meteor npm install
meteor
```

打开你的浏览器并输入`http://localhost:3000`查看APP是否运行。

在我们教程正式开始之前，你可以看看这个APP的内部组成。比如，用你惯用的编辑器修改`client/main.html`中的`<h1>`内的文字。当你修改完毕保存文件时，浏览器会自动更新并展示新的内容，我们叫它`热更新(hot code push)`。

#### ES2015特性

如果你还没有尝试过下个版本的JavaScript特性，初始APP内的代码语法，还有整个教程使用的语法，都会让你感到怪异。这是因为Meteor支持大部分ES2015的特性，也就是下个版本的JavaScript。常用的特性包括：

1. 箭头函数：`(arg) => {return result;}`

2. 简写方法：`render() { ... }`

3. `const`和`let`取代`var`

你可以在[ecmascript docs](https://docs.meteor.com/packages/ecmascript.html)查看Meteor支持的新特性。更多关于ES2015的信息可以查看下面几篇文章：

- [Luke Hoban's "ES6 features"](http://git.io/es6features)

- [Kyle Simpson's "You don't know JS: ES6 and beyond"](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)

- [Nikolas C. Zakas "Understanding ECMAScript 6"](https://github.com/nzakas/understandinges6)

现在你有一些经验如何去编辑Meteor APP了，让我们开始创建一个待办事项列表应用程序吧，如果你在这个教程中发现了bug或是错误，请发起一个`issue`或`PR`在[GitHub](https://github.com/rockjins/Meteor-Tutorials)上。

下一节：[Components(组件)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/02-Defining-views-with-React-components.md)
