const http = require('http');
const express =require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
}); //for every incoming req

app.use((req,res,next)=>{
    console.log('In the another middleware');
    res.send('<h1>Hello from express</h1>');
});

app.listen(4000);