> [本文源代码可以在这里找到](https://github.com/meteor/simple-todos-react)

> 如果你有成为全栈的梦想，METEOR是个不错的平台。

---

### 6.在Android或iOS上运行app

> 目前，Meteor并不支持在Windows上进行移动端打包。如果你是Windows用户，请忽略这一章节。

目前为止，我们构建了我们的app，并在浏览器上对它进行测试，但是Meteor是为了跨平台而设计的——只需要几句命令，就可以把你的待办事项列表网站构建成Android或iOS应用。

Meteor可以轻松的设置所有构建app所需的工具，但是下载所有程序可能需要一段时间——Android大约300M，iOS要安装Xcode大约2GB，如果你不希望下载这些工具，你可以调到下一个章节。

#### 在iOS模拟器上运行

如果你有Mac，你可以运行在iOS模拟器上运行app。

进入到app目录并键入：

```
meteor install-sdk ios
```

它会安装你构建iOS app所要用到的所有所有配置。当上面安装完成，键入：

```
meteor add-platform ios
meteor run ios
```

你会看到iOS模拟器弹出，并且你的app在里面运行。

#### 在Android模拟器上运行

在terminal中进入你的app目录并键入：

```
meteor install-sdk android
```

它会安装你构建Android app所要用到的所有所有配置。当上面安装完成，键入：

```
meteor add-platform android
```

同意协议条款，键入：

```
meteor run android
```

在一些初始化后，我们将看到一个Android模拟器弹出，你的app在原生生Android容器里运行。

模拟器运行可能会有一些慢，所以如果你想看到应用真实的情况，还得到真实设备上使用。

#### 在Android设备上运行

首先，完成上述的所有Android设置步骤。然后，确定你的设备有[USB调试模式](https://developer.android.com/studio/run/device.html#developer-device-options)而且手机插进了电脑的USB插口。此外，你必须在真机运行前关闭安卓模拟器。

接下来，键入以下命令：

```
meteor run android-device
```

你的app将会构建并安装到你的设备上。

#### 在iPhone或iPad上运行（只限Mac：要有苹果开发者账号）

如果你有苹果开发者账号，你也可以在iOS设备上运行你的app。键入以下命令：

```
meteor run ios-device
```

这将会为你的iOS app项目打开Xcode。你可以使用Xcode让app运行在任何Xcode支持的设备或模拟器上。

现在我们看到了在移动端运行我们的app多么容易，让我们给app再添加一些特性。

上一节：[Update and remove(更新和移除)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/05-Update-and-remove.md)

下一节：[Temporary UI state(临时界面状态)](https://github.com/rockjins/Meteor-Tutorials/blob/master/React/07-Temporary-UI-state.md)
