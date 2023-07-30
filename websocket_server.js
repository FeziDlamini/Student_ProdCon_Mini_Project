const WebSocket = require('ws');
const {producer, consumer} = require("./index");
const ws = new WebSocket.Server({port: 9000});

ws.on('connection', async function connection(ws) {
    console.log('New consumer connected');


    setInterval(() => {
        ws.send('Producer: New Event Produced');
        producer();
    }, 2000);
    ws.on('message', function incoming(message) {
        console.log('received: %s', message)
    })

    ws.on('close', function close() {
        console.log('disconnected');
    })
})

const wss = new WebSocket('ws://localhost:9000');
wss.addEventListener('open', function open() {
    console.log('Consumer: Connected to a Producer');

    wss.on('message', async function incoming(message) {
        console.log('received: %s', message)
        wss.send('Consumer: New Event Consumed');
        await consumer();
        wss.send('Consumer: Waiting for consumption');
    })
})
