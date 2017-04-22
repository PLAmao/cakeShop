"use strict";var express=require("express"),router=express.Router(),adminController=require("../controllers/adminController.js");router.get("/list",adminController.listGet),router.post("/list",adminController.search),router.get("/add",adminController.addGet),router.post("/add",adminController.addPost),router.get("/edit/:id",adminController.editGet),router.post("/edit",adminController.editPost),router.get("/del/:id",adminController.delGet),module.exports=router;