const express = require("express")
const { postImage, getImage } = require("../controllers/Image")


const router =  express.Router()


router.post("/upload",postImage)


router.get("/upload",getImage)



module.exports = router