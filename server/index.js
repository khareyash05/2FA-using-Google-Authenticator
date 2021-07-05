const speakeasy = require("speakeasy")
const qrcode = require("qrcode")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.post("/",(req,res)=>{
    secret1 = speakeasy.generateSecret({
        name : req.body.name 
    })
    console.log(secret1);
    
    qrcode.toDataURL(secret1.otpauth_url,function(err,data){
        console.log(data);      
        return res.json({
            dataURL: data,
            secret : secret1
        })
    })
    console.log("Here come name "+req.body.name);
})

app.post("/check",(req,res)=>{
    console.log(req.body.secret);
    var verified = speakeasy.totp.verify({
        secret : req.body.secret.ascii, // secret1 is not defined
        encoding : 'ascii',
        token : req.body.otp 
    })
    console.log(verified);
    if(verified){
        return res.status(200).send("Login SUccessful")
    }
    else{
        return res.status(422).send("Login UnSUccessful")
    }
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Server running");
})