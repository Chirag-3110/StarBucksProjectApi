const mongoose=require('mongoose');
const MSchema=mongoose.Schema;

const CoffeeItems=new MSchema({
    name:String,
    price:Number
})

module.exports=mongoose.model("coffeedatas",CoffeeItems);