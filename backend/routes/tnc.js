const express = require("express");
const router = express.Router();
const tncs = require("../models/tncmodel");

router.post("/TnC",async(req,resp)=>{
   //  const tncData=new tncs({
   //      tnc:req.body.tnc,    
   //  });
   //  // console.log(AboutUsData);
   //   const tncResult=tncData.save((err,docs)=>{
   //      if(err){resp.json(err)}else(resp.json(docs))
   //   });
      
      try {
         let tncUpdate=await tncs.updateOne(
            {_id:"63c91e5e167505308c32c4fb "},
            {$set:{tnc:req.body.tnc}}
         );
         resp.json({success:"Ok",tncUpdate})
      } catch (error) {
         resp.json(error)
      }

});

module.exports=router;