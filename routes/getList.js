const express=require('express');
const getList=express.Router();
const CoffeeItems=require('../models/CoffeeItems');
getList.get('/getCoffeeList',async(req,res)=>{
    const coffeallData = await CoffeeItems.find({});
    console.log(coffeallData);
    res.send("Hello Server");
})

module.exports=getList;