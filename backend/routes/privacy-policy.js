const express = require("express");
const router = express.Router();
const privacypolicies = require("../models/privacy-policy");

router.post("/PrivacyPolicy",async(req,resp)=>{
    // const PrivacyPolicyData=new privacypolicies({
    //     privacyPolicy:req.body.privacyPolicy,    
    // });
    // // console.log(AboutUsData);
    //  const PrivacyPolicyResult=PrivacyPolicyData.save((err,docs)=>{
    //     if(err){resp.json(err)}else(resp.json(docs))
    //  });

       try {
        let privacyUpdate=await privacypolicies.updateOne(
            {_id:"63c917528ff49935c0dfd693"},
            {$set:{privacyPolicy:req.body.privacyPolicy}}
        );
        resp.json({status:"Ok",privacyUpdate})
       } catch (error) {
        resp.json(error)
        
       }

});

module.exports=router;