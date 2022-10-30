const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({port:9000});

wss.on("connection",(socket)=>{
    socket.send("hey! how are you");
    console.log('hello i am here');

    socket.on('message',(msg)=>{
             console.log(msg.toString('utf-8'));
             socket.send("");
    })
    
})