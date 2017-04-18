import Server from 'socket.io';

export function startServer(store) {
  const io = new Server().attach(8090);

  //当store的状态发生变化时，发送当前的状态给所有处于连接的客户端。
  store.subscribe(
    () => io.emit('state',store.getState().toJS())
  );

  io.on('connection', (socket) => {
    //每当新客户端连接服务器端时,发送当前的状态给该客户端。
    socket.emit('state', store.getState().toJS());
    
    //监听客户端触发的action事件，每当监听到action事件的时候，服务端将接受到的action交给Redux Store处理
    socket.on('action',store.dispatch.bind(store));
  });
}