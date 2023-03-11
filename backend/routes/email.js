const express = require("express");
const router = express.Router();
const emails = require("../models/emails");

router.post("/EMAILS",async(req,resp)=>{
    // const emailsData=new emails({
    //     EmailHost:req.body.EmailHost,
    //     EmailPort:req.body.EmailPort,
    //     EmailUsername:req.body.EmailUsername,
    //     EmailPassword:req.body.EmailPassword,
    //     MailEncryption:req.body.MailEncryption,
    //     MailFormAddress:req.body.MailFormAddress,
    // });
    // // console.log(emailsData);
    //  const emailsResult=emailsData.save((err,docs)=>{
    //     if(err){resp.json(err)}else(resp.json(docs))
    //  });

      try {
        let emailsUpdate=await emails.updateOne(
          {_id:"63bfb8cbaffe40235cddd1e1"},
          {$set:{EmailHost:req.body.EmailHost,
            EmailPort:req.body.EmailPort,
            EmailUsername:req.body.EmailUsername,
            EmailPassword:req.body.EmailPassword,
            MailEncryption:req.body.MailEncryption,
            MailFormAddress:req.body.MailFormAddress,}}
        );
        resp.json({status:"Ok",emailsUpdate})
      } catch (error) {
        resp.json(error)
      }
});

module.exports=router;