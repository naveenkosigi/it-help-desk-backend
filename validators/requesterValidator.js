const requester=require('../schemas/requester');

module.exports=async(id,opts) => {
    console.log("Called validator",this ,id,opts);
    const user=await requester.findById(id);
    if(user)return true;
    return false;
}