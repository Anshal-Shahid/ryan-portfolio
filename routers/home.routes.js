const express=require("express")
const router=express.Router()

const {home}=require("../controllers/home.controller.js")
const {form}=require("../controllers/contact.controller.js")

router.get("/",home)
router.post("/contact/",form)

module.exports=router