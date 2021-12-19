const express=require("express");
const app=express();
const cors=require("cors");
const helmet=require("helmet")
const cookieparser=require("cookie-parser")
const {sign,verify}=require("./libs/jwt");

app.use(helmet())
app.use(cors());
app.use(cookieparser())

app.get("/",verify,(req,res)=>{
    res.send("Welcome to the Home Page");
});

app.get("/getjwtkey",sign)

app.listen(8000)

