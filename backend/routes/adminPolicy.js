const express = require("express");
const router = express.Router();
const adminpolicies = require("../models/admin-policy");

router.post("/AdminPolicy",async(req,resp)=>{
    // const AdminPolicyData=new adminpolicies({
    //     adminPolicy:req.body.adminPolicy,    
    // });
    // // console.log(AboutUsData);
    //  const AdminPolicyResult=AdminPolicyData.save((err,docs)=>{
    //     if(err){resp.json(err)}else(resp.json(docs))
    //  });
    try {
        let adminPolicyUpdate=await adminpolicies.updateOne(
            {_id:"63c91da2a3128a2394a2abf1"},
            {$set:{adminPolicy:req.body.adminPolicy}}
        );
        resp.json({status:"Ok",adminPolicyUpdate})
    } catch (error) {
        resp.json(error)
    }

});

module.exports=router;