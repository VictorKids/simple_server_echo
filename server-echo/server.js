const WebSocket = require('ws');
const PORT = 5000;
const wsServer  = new WebSocket.Server({
    port: PORT
});


wsServer.on('connection', function (socket){
    // Some feedback on the console
    console.log("A client just connected");
    // Attach some behavior to the incoming socket
    socket.on('message', function (msg){
        console.log("Recieved message from client: " + msg);
        // Pseudo-echo behavior
        socket.send("Take this back: " + msg);
        // Bradcast that message to all connected clients
        wsServer.clients.forEach(function (client) {
            client.send("Someone said: " + msg);
        });


    });
});


console.log(new Date() + " Servidor is listening on port "+ PORT);