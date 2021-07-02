import React from 'react'

const Check = () => {
    const Otp = async()=>{
        const res = await fetch("http://localhost:5000/check",{
            mode  : 'no-cors',
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
            })
          })
          const data = await res.json()
          if(data.status(200)){
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
            <input placeholder="Enter otp" name="otp"></input>
            <button onClick = {Otp}>Check</button>
        </div>
    )
}

export default Check
