const express=require('express');
const app=express();
app.use(express.static(__dirname));
app.listen(3000,()=>console.log("lissening now"));
app.get('/',(req,res)=>res.sendFile(__dirname+'/index.html'))