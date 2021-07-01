import './App.css';
import React,{useState} from "react"

function App() {  
  var twofactor = {}

  const [user,setUser] = useState({
    name: '',pass:''
  })  
  
  let name,value
  const handleInputs = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({...user,[name]:value})
  }

  const PostData = async(e)=>{
    e.preventDefault()
    const {name,pass} = user
    const res = await fetch("/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name ,pass
      })
    })
    const data = await res.json()
    twofactor = data
    console.log(twofactor.dataURL);
  }

  return (
    <>
      <form method = "POST">
        <input placeholder="Enter your name" name="name" value={user.name} onChange={handleInputs}/>
        <input placeholder="Enter password" name="pass" value={user.pass} onChange={handleInputs}/>
        <img src="data:image/png;base64,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" alt="hju"/> 
        <button onClick={PostData}>Submit</button>
      </form>
      <br/><br/>
      <a href="/check"><button>Enter OTP</button></a>
    </>
  );
}

export default App;