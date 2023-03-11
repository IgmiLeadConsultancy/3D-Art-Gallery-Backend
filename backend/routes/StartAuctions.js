const express = require("express");
const router = express.Router();
const arts = require("../models/productmodel");


router.patch("/startAuctions/:id",async(req,resp)=>{
    try {
        const {id}=req.params;
        const startAuctions=await arts.findByIdAndUpdate(
            {_id:id},
            {$set:{status:"Ongoing"}}
        );
        resp.json({startAuctions:"User Activated Successfully",startAuctions})
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;