const mongoose=require('mongoose');
const url="mongodb+srv://chiragTak:Wm20RH8RKauN6Ok4@cluster0.gdvfvax.mongodb.net/StarBucks?retryWrites=true&w=majority"

async function mongoConnect(req,res){
    mongoose.set("strictQuery", false);
    mongoose.connect(url,{
        useNewUrlParser:true,useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Connected")
    })
    .catch((error)=>{
        console.log(error);
    })
}
module.exports=mongoConnect

// Wm20RH8RKauN6Ok4