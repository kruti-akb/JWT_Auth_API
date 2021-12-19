const jwt=require("jsonwebtoken");
const { token } = require("morgan");
const jwtkey="key1";
const expsec=3000;

const sign=(req,res)=>{

    const token=jwt.sign({uname:"user1"},jwtkey,{algorithm:"HS256",expiresIn:expsec});
    res.cookie("token",token,{maxAge:expsec*1000})
    res.header('Access-Control-Allow-Credentials', true);
    res.send(token)
}

const verify=(req,res,next)=>{

    if(req.headers['authorization']){

        var auth=req.headers['authorization'].split(' ');
        var token=auth[1];

        jwt.verify(token,jwtkey);
        
        next();

    }else{
        res.send("Provide token");
    }

}

module.exports={sign,verify};










