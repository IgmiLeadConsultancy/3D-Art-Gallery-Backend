const mongoose=require('mongoose');
let yourDate = new Date()
yourDate.toISOString().split('T')[0]
const ArtCollectionsSchema=new mongoose.Schema({
    collection_title:String,
    artCollectionss_name:String,
    artCollectionss_short_desc:String,
    artCollectionss_category:String,
    artCollectionss_price:Number,
    auction_EndDate:String,
    collectionsImg:String,
    userData:String,
    USEReMAIL:String,
    type:{
        type:String,default:"Fixed Price"
    },
    selling_type:{
        type:String,default:"First TIme Sell"
    },
    bid_amount_in_usd: {
        type:String,default:"N/A"
    },
    status: {
        type:String,default:"Upcomming"
    },
    created_on:{
        type:Date,default:yourDate
    }
    
});

const arts=new mongoose.model("arts",ArtCollectionsSchema);
module.exports=arts;





