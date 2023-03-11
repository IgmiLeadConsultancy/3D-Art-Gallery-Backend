const express = require("express");
const router = express.Router();
const sliders = require("../models/sliders");

router.post("/SLIDERS", async (req, resp) => {
  // const slidersData=new sliders({
  // ShortDescription:req.body.ShortDescription,
  // LongDescriptionHead:req.body.LongDescriptionHead,
  // LongDescriptionMiddle:req.body.LongDescriptionMiddle,
  // LongDescriptionFooter:req.body.LongDescriptionFooter,
  // });
  // // console.log(slidersData);
  //  const slidersResult=slidersData.save((err,docs)=>{
  //     if(err){resp.json(err)}else(resp.json(docs))
  //  });

  try {
    let slidersUpdate = await sliders.updateOne(
      { _id: "63c1558db784e1046033d0a8" },
      {
        $set: {
          ShortDescription: req.body.ShortDescription,
          LongDescriptionHead: req.body.LongDescriptionHead,
          LongDescriptionMiddle: req.body.LongDescriptionMiddle,
          LongDescriptionFooter: req.body.LongDescriptionFooter,
        },
      }
    );
    resp.json({status:"Ok",slidersUpdate});
  } catch (error) {
    resp.json(error);
  }
});

module.exports = router;
