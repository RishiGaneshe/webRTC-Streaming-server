const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const PAGES= require('./routes/pages.routes')
const { handleWebRTCConnection }= require('./configs/webRTC.config')



const app = express()
const server = http.createServer(app)
const io = socketIO(server)


app.use(express.static(__dirname + '/public'))
app.use('/', PAGES)
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
handleWebRTCConnection(io)
const rooms = {}

// io.on('connection', socket => {
//   console.log('🔌 New client connected');

//   socket.on('join', roomID => {
//     socket.join(roomID)
//     const clients = io.sockets.adapter.rooms.get(roomID)

//     const isInitiator = clients.size === 1
//     socket.emit('joined', isInitiator)

//     console.log(`👥 User joined room: ${roomID}, Total: ${clients.size}`)
//   })

//   socket.on('offer', offer => {
//     socket.to(getRoom(socket)).emit('offer', offer)
//   })

//   socket.on('answer', answer => {
//     socket.to(getRoom(socket)).emit('answer', answer)
//   })

//   socket.on('candidate', candidate => {
//     socket.to(getRoom(socket)).emit('candidate', candidate)
//   })

//   socket.on('disconnect', () => {
//     console.log('❌ Client disconnected')
//   })

//   function getRoom(socket) {
//     const rooms = [...socket.rooms].filter(r => r !== socket.id)
//     return rooms[0]
//   }
// })




// Start server
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`🚀 Signaling server running on http://localhost:${PORT}`)
});
