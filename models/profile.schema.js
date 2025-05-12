const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  fullname: { type: String, maxlength: 100, default: '' },
  bio: { type: String, maxlength: 1000, default: '' },
  avatarUrl: { type: String, default: '' },
  gender: { type: String, enum: ['male', 'female', 'other'], default: 'other' },
  DateOfBirth: { type: Date, default: '' },
  phone: { type: String, match: /^[0-9]{10,15}$/, default: '' },
  address: { type: String, default: '' },
  socialLinks: { type: Map, of: String, default: {} }, // e.g., { linkedin: '...', github: '...' }
  skills: { type: [String], default: [] },
  languages: { type: [String], default: [] },
  roleMeta: {
    student: {
      enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    },
    teacher: {
      expertiseAreas: { type: [String], default: [] },
      experienceYears: { type: Number, min: 0, default: 0 },
      taughtCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
    }
  }
}, { timestamps: true })

module.exports = mongoose.model('Profile', profileSchema)
