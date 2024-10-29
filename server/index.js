require('dotenv').config();
const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.listen(3000,(req,res)=>{
    console.log('server started on port 3000')

})