import React,{useState} from 'react'
import {c} from "./App"

const Check = () => {
  const [user,setUser] = useState({
    name: '',pass:''
  }) 
  let name,value
  const handleInputs = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({...user,[name]:value})
  }
  const Otp = async()=>{
    const{otp} = user
    console.log(c);
        const res = await fetch("/check",{
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              otp,c
            })
          })
          const data = await res.json()
          if(data.status===200){
            window.alert("Successful")
            console.log("Successful");
          }
          else{
            window.alert("UnSuccessful")
            console.log("UnSuccessful");
          }
    }
    return (
        <div>
          <form method="POST">
          <input name = "secret" value={c}/>
            <input placeholder="Enter otp" name="otp" value={user.otp} onChange={handleInputs}></input>
            <button onClick = {Otp}>Check</button>
          </form>
        </div>
    )
}

export default Check
