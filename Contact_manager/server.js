const express=require("express");
const dotenv=require("dotenv").config();
const app=express();
const port=3000;

app.use("/api/contacts",require("./routes/contactsRoutes"));





app.listen(port,()=>{
    console.log(`server started at ${port}`);
});
