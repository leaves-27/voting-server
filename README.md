#架构

1.浏览器端：React------提供界面
2.服务器端：Node-------处理投票逻辑
3.浏览器端和服务器端之间的通信采用WebSockets。因WebSockets在各个浏览器端的兼容性，因此选用socket.io库作为WebSockets在各个终端的抽象实现。socket.io库提供了客户端在不支持WebSockets情况下的备用方案。

其他：
1.使用Redux来组织应用代码：即管理应用的状态。
  (1)Redux如何来管理应用状态：Redux应用的状态树是不可变的数据结构。一旦你得到了一棵状态树，它就不会在改变了。任何用户行为改变应用状态，你都会获取一棵映射应用改变后新状态的完整状态树。任何连续的状态（改变前后）都被分别存储在独立的两棵树。你需要通过调用一个函数来从一种状态转入下一个状态。
  (2)Redux通过不可变状态树来管理应用状态的好处：
    1)回退方便；
    2)debug方便；
    3)使代码简单；即只需使用纯函数编程(只接受参数，然后返回数据)。

2.使用Immutable数据结构来处理应用的state.

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
  (1)actions:描述应用状态发生变化的简单数据结构。
  (2)reducers:用来将当前action和核心业务逻辑函数映射起来的普通函数。
4.尝试Reducer协作：
  将整个state的局部拆分出来，给需要的核心业务函数。
5.初识Redux Store：负责将应用的所有组件关联起来。保存应用的当前状态、分派action、调用包含了业务逻辑的reducer。
  
6.配置Socket.io服务：
  开启一个websokte服务，并把store传给它。
7.用Redux监听器传播State：

8.接受远程调用Redux Actions:

