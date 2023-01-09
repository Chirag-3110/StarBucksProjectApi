const express=require('express');
const app=express();
const mongoConnect=require('./mongoose');
const GetCoffeeList=require('./routes/getList');
const SendCoffeeData = require('./routes/sendCoffeeDetails');
const port=process.env.port || 8000;


//body parser
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

//routes
app.use(GetCoffeeList);
app.use(SendCoffeeData);

//main starting point
app.listen(port,()=>{
    console.log("Server started at "+port);
    mongoConnect();
})





