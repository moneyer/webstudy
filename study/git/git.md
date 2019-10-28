# git学习

## 上传项目到GitHub

### 方法一

1.**在本地新建一个空文件夹xxxxx(仓库名)**

2.**进入xxxxx仓库文件夹,鼠标右键打开 Git Bash Here ,执行 `git init`,初始化为git仓库**

3.**把项目文件复制进xxxxx仓库文件夹**

4.

```powershell
#接下来依次输入以下代码即可完成其他操作
git add .    #此操作把仓库文件夹下的文件都添加到缓存区
git commit -m "提交信息"  #把缓存区的文件保存到本地仓库 "提交信息"换成备注,如"first commmit"
```

5.在自己 GitHub 主页新建同名仓库xxxxx,使用`git remote add origin git@github.com:xxx/xxxxx`把本地仓库与远程仓库关联

6.把本地仓库的所有内容推送到远程库上`git push -u origin master`即可

### 方法二 

参考链接https://www.cnblogs.com/cxk1995/p/5800196.html

1. **进入 GitHub 首页,点击 New repository 新建一个项目(假定你已经安装了 git 工具并且拥有 GitHub 账户且已经绑定了ssh)**

2. **填写仓库名(其他信息可以不填)后点击 Create repository 即可**

3. **点击 Clone or dowload会出现一个地址，copy这个地址备用。**

4. **接着在本地操作,右键鼠标选择 Git Bash Here ,进入 git 命令行界面**

5. **`git clone git@github.com:xxx/xxxxx` 后面是复制的仓库连接,xxx为用户名,xxxxx为仓库名**

6. **`cd xxxxx`进入仓库文件夹,把你的项目复制进此文件夹**

7. ```powershell
   #接下来依次输入以下代码即可完成其他操作
   git add .    #此操作把仓库文件夹下的文件都添加到缓存区
   git commit -m "提交信息"  #把缓存区的文件保存到本地仓库 "提交信息"换成备注,如"first commmit"
   git push -u origin master   #把项目从本地仓库 push 到 GitHub 上
   
   ```


## git clone

### git clone 现有仓库

克隆仓库的命令格式为

```shell
git clone [url]
```

比如要克隆 task_management_system 仓库，可以使用下面的命令。

```shell
git clone git@gitee.com:hozensoft/task_management_system.git
```

在当前目录新建一个 task_management_system 目录，其中包含一个 `.git` 的目录，用于保存下载下来的所有版本记录，然后从中取出最新版本的文件拷贝。如果进入这个新建的 `grit` 目录，你会看到项目中的所有文件已经在里边了，准备好后续的开发和使用。如果希望在克隆的时候，自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：

```shell
git clone git@gitee.com:hozensoft/task_management_system.git TaskManagement
```

唯一的差别就是，现在新建的目录变成了 TaskManagement ，其他的都和上面一样。