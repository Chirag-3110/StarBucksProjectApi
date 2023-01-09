const express=require('express');
const SendCoffeeData=express.Router();
const concat = require('concat-stream');
const CoffeeItem=require('../models/CoffeeItems');
SendCoffeeData.post('/sendCoffeeData',async(req,res)=>{
    // const addedItem=await CoffeeItem.insertMany([{name:"chirag",price:15}])
    console.log(req.body);
    res.send("Post data successful");
});

module.exports=SendCoffeeData;