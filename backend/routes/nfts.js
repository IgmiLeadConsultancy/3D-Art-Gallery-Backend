const express = require("express");
const router = express.Router();
const nfts = require("../models/nfts");

router.post("/NFTS", async (req, resp) => {
  // const nftsData=new nfts({
  // MoralisServerURL:req.body.MoralisServerURL,
  // MoralisApplicationID:req.body.MoralisApplicationID,
  // ContractAddress:req.body.ContractAddress,
  // AdminAddress:req.body.AdminAddress,
  // Fee:req.body.Fee,
  // collectionsImg:req.body.collectionsImg,
  // Chain:req.body.Chain,
  // ExplorerURL:req.body.ExplorerURL,
  // });
  // // console.log(nftsData);
  //  const nftsResult=nftsData.save((err,docs)=>{
  //     if(err){resp.json(err)}else(resp.json(docs))
  //  });

  try {
    let nftData = await nfts.updateOne(
      { _id: "63c0f342b8e62c35e03d0999" },
      {
        $set: {
          MoralisServerURL: req.body.MoralisServerURL,
          MoralisApplicationID: req.body.MoralisApplicationID,
          ContractAddress: req.body.ContractAddress,
          AdminAddress: req.body.AdminAddress,
          Fee: req.body.Fee,
          collectionsImg: req.body.collectionsImg,
          Chain: req.body.Chain,
          ExplorerURL: req.body.ExplorerURL,
        },
      }
    );
    resp.json({ status: "Ok", nftData });
  } catch (error) {
    resp.json(error);
  }
});

module.exports = router;
