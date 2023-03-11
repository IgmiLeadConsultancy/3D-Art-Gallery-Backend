const express = require("express");
const router = express.Router();
const arts = require("../models/productmodel");

router.delete("/deleteMyAuctionCollection/:id",async(req,resp)=>{
    try {
        const {id}=req.params;
        const deleteArtCollections=await arts.findByIdAndDelete({_id:id})
        resp.json({success:"Art Collection Has Been Deleted Successfullly",deleteArtCollections});
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;