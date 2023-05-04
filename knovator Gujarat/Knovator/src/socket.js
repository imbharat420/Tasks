import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: '*',
  },
});

let rooms = {};

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('join', (room) => {
    if (!rooms[room]) {
      rooms[room] = [];
    }
    rooms[room].push(socket.id);

    socket.join(room);
    console.log(rooms);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('active', ({ x, y }) => {
    socket.broadcast.emit('updatemouse', { x, y });
  });

  socket.on('post', ({ x, y }) => {
    socket.broadcast.emit('updatemouse', { x, y });
  });

  socket.on('delete', ({ x, y }) => {
    socket.broadcast.emit('updatemouse', { x, y });
  });

  socket.on('update', ({ x, y }) => {
    socket.broadcast.emit('updatemouse', { x, y });
  });

  socket.on('inactive', (image) => {
    console.log('socket', image);
    socket.broadcast.emit('update-image', image);
  });
});

export default io;
