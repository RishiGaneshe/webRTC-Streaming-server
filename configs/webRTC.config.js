
exports.handleWebRTCConnection= async(io)=>{
    try{
        const broadcasters = new Map()

        io.on('connection', socket => {
          console.log('🔌 New client connected')
      
          socket.on('broadcaster', roomID => {
            socket.join(roomID)
            broadcasters.set(roomID, socket.id)
            console.log(`📡 Broadcaster joined room: ${roomID}`)
          })
      
          socket.on('watcher', roomID => {
            socket.join(roomID)
            const broadcasterId = broadcasters.get(roomID)
            if (broadcasterId) {
              io.to(broadcasterId).emit('watcher', socket.id)
            }
            console.log(`👁️ Viewer joined room: ${roomID}`)
          })
      
          socket.on('offer', (viewerSocketId, offer) => {
            io.to(viewerSocketId).emit('offer', socket.id, offer)
          })
      
          socket.on('answer', (broadcasterSocketId, answer) => {
            io.to(broadcasterSocketId).emit('answer', socket.id, answer)
          })
      
          socket.on('candidate', (targetSocketId, candidate) => {
            io.to(targetSocketId).emit('candidate', socket.id, candidate)
          })
      
          socket.on('disconnect', () => {
            console.log('❌ Client disconnected')
          })
        })
        
    }catch(err){
        console.log(err)
    }
}