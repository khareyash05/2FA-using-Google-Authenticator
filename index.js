const speakeasy = require("speakeasy")
const qrcode = require("qrcode")
const express = require("express")
const app = express()

app.get("/generateqrcode",(req,res)=>{
    var secret1 = speakeasy.generateSecret({
        name : req.body.name 
    })
    console.log(secret1);
    
    qrcode.toDataURL(secret.otpauth_url,function(err,data){
        console.log(data); // need to send the secret.otpauth_url as img tag in JS
    })
})

app.get("/check",(req,res)=>{
    res.send("Check")
})

app.post("/check",(req,res)=>{
    var verified = speakeasy.totp.verify({
        secret : secret1.ascii,
        encoding : 'ascii',
        token : req.body.otp 
    })
    if(verified){
        return res.status(200).send("Login SUccessful")
    }
    else{
        return res.status(422).send("Login UnSUccessful")
    }
})