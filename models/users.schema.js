const mongoose= require('mongoose')
const Roles= ['student', 'teacher', 'admin']


const userSchema= new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    username: {type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8, select: false },
    role: { type: String, enum: Roles, required: true },
    isActive: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })


module.exports= mongoose.model('User',userSchema)