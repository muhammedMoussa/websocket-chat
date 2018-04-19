const express = require('express')
const socket = require('socket.io')

//App Setup
const app = express()
const server = app.listen(4000, () => {
    console.log('works!')
})

//Static Files
app.use(express.static('public'))

//Socket Setup
const io = socket(server)
io.on('connection', (socket) => {
    //console.log('socket works!', socket.id)
    socket.on('chat', (data) => {
        //console.log(data)
        io.sockets.emit('chat', data)
    })
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})
