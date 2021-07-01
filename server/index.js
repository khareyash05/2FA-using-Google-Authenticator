const speakeasy = require("speakeasy")
const qrcode = require("qrcode")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.post("/",(req,res)=>{
    var secret1 = speakeasy.generateSecret({
        name : req.body.name 
    })
    console.log(secret1);
    
    qrcode.toDataURL(secret1.otpauth_url,function(err,data){
        console.log(data); // need to send the data as src in img tag in JS        
        return res.json({
            dataURL: data
        })
    })
    console.log("Here come name "+req.body.name);
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

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Server running");
})