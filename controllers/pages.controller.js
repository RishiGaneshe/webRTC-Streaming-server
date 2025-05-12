const path= require('path')


exports.handleGetHtmlVideoPage= async(req, res)=>{
    try{
        const file= path.resolve(__dirname, '..', 'public', 'broadcaster.html')
        return res.status(200).sendFile(file)
    }catch(err){
        console.log(err)
        return res.status(500).json({ success: false, message : 'Internal Server Error'})
    }
}


exports.handleGetHtmlViewerPage= async(req, res)=>{
    try{
        const file= path.resolve(__dirname, '..', 'public', 'viewers.html')
        return res.status(200).sendFile(file)
    }catch(err){
        console.log(err)
        return res.status(500).json({ success: false, message : 'Internal Server Error'})
    }
}