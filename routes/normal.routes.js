const express= require('express')
const router= express.Router()
const { handlePostDataForSignUp }= require('../controllers/registration/signUp.controller')
const { handlePostOTPSubmission }= require('../controllers/registration/otpVerification.controller')
const { handlePostLogin }= require('../controllers/registration/login.controller')



router.post("/sign-up", handlePostDataForSignUp )

router.post("/sign-up/otp", handlePostOTPSubmission)

router.post("/login", handlePostLogin)


module.exports= router;










module.exports= router