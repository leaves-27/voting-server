#架构

1.浏览器端：React------提供界面
2.服务器端：Node-------处理投票逻辑
3.1、2之间的通信采用WebSockets
4.使用Redux来组织应用代码：即管理应用的状态。
  (1)Redux如何来管理应用状态：Redux应用的状态树是不可变的数据结构。一旦你得到了一棵状态树，它就不会在改变了。任何用户行为改变应用状态，你都会获取一棵映射应用改变后新状态的完整状态树。任何连续的状态（改变前后）都被分别存储在独立的两棵树。你需要通过调用一个函数来从一种状态转入下一个状态。
  (2)Redux通过不可变状态树来管理应用状态的好处：
    1)回退方便；
    2)debug方便；
    3)使代码简单；即只需使用纯函数编程(只接受参数，然后返回数据)。

5.使用Immutable数据结构来处理应用的state.

#服务端
1.写代码前的准备：
(1)考虑redux的状态树在整个应用状态变化期间的结构：
  entries:
  vote:
    pair:
    tally:

 (2)写具体的逻辑代码前的项目安排：
  package.json：
  babel：
  mocha：
  chai、chai-immutable：
  immutable：

2.基于纯函数实现应用逻辑：
  (1)setEntries：加载条目(用来提供应用的初始化状态)
  (2)next：开始投票(在状态树创建中一个投票map，该map有拥有一个 pair 键，值为投票条目中的前两个元素，并从之前的条目列表中清除这两个元素).
  (3)vote:投票(当用户产生投票行为后，每当用户给某个条目投了一票后， vote 将会为这个条目添加 tally 信息)

3.初识Actions和Reducers：
4.尝试Reducer协作

5.初识Redux Store

6.配置Socket.io服务
7.用Redux监听器传播State

8.接受远程调用Redux Actions

#客户端

1.项目创建
2.单元测试支持
3.React和react-hot-loader
4.实现投票界面
5.不可变数据和纯粹渲染
6.投票结果页面和路由实现
7.初识客户端的Redux Store
8.让React从Redux中获取数据
9.设置socket.io客户端
10.接受来自服务器端的actions
11.从react组件中指派actions
12.使用Redux Middleware发送actions到服务端
