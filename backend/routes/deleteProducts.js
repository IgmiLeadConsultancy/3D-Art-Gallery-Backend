const express = require("express");
const router = express.Router();
const arts=require("../models/productmodel");



router.delete("/deletearts/:id",async(req,resp)=>{
    try {
        const {id}=req.params;
        const deletearts=await arts.findByIdAndDelete({_id:id})
        resp.json({success:"Arts Collection Has Added Successfully",deletearts});

    } catch (error) {
        console.log(error);
    }
});


router.delete("/deletearts2/:id",async(req,resp)=>{
    try {
        const {id}=req.params;
        const deletearts=await arts2.findByIdAndDelete({_id:id})
        resp.json({success:"Arts Collection Has Added Successfully",deletearts});

    } catch (error) {
        console.log(error);
    }
});


router.delete("/deletearts3/:id",async(req,resp)=>{
    try {
        const {id}=req.params;
        const deletearts=await arts3.findByIdAndDelete({_id:id})
        resp.json({success:"Arts Collection Has Added Successfully",deletearts});

    } catch (error) {
        console.log(error);
    }
});


router.delete("/deletearts4/:id",async(req,resp)=>{
    try {
        const {id}=req.params;
        const deletearts=await arts4.findByIdAndDelete({_id:id})
        resp.json({success:"Arts Collection Has Added Successfully",deletearts});

    } catch (error) {
        console.log(error);
    }
});





module.exports=router;