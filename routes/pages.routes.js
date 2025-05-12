const express= require('express')
const router= express.Router()
const PAGES= require('../controllers/pages.controller')


router.get("/broadcaster", PAGES.handleGetHtmlVideoPage)

router.get("/viewer", PAGES.handleGetHtmlViewerPage)

module.exports= router