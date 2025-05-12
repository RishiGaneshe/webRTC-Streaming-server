exports.setRoleStudent= async( req, res, next)=>{
    try{
        req.requiredRole = ['student']
        next()

    }catch(err){
        console.error("Error in Set Role student Middleware "+ err.message)
        return res.status(500).json({ success: false, message: "Internal Server Error."})
    }
}


exports.setRoleTeacher= async( req, res, next)=>{
    try{
        req.requiredRole = ['teacher']
        next()

    }catch(err){
        console.error("Error in Set Role teacher Middleware "+ err.message)
        return res.status(500).json({ success: false, message: "Internal Server Error."})
    }
}


exports.setRoleAdmin= async( req, res, next)=>{
    try{
        req.requiredRole = ['admin']
        next()

    }catch(err){
        console.error("Error in Set Role admin Middleware "+ err.message)
        return res.status(500).json({ success: false, message: "Internal Server Error."})
    }
}
