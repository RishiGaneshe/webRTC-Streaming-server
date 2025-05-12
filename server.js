require('dotenv').config()
const cors= require('cors')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const PAGES= require('./routes/pages.routes')
const USER= require('./routes/normal.routes')
const { handleWebRTCConnection }= require('./configs/webRTC.config')
const { handleMongooseConnection, handleRedisConnection }= require('./services/connection.services')


const PORT =  3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)


handleRedisConnection()
handleWebRTCConnection(io)
handleMongooseConnection()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'))

app.use('/', PAGES)
app.use('/', USER)


server.listen(PORT, () => {
  console.log(`🚀 Signaling server running on http://localhost:${PORT}`)
});
