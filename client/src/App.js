import './App.css';
import React,{useState} from "react"

function App() {

  const [user,setUser] = useState({
    name: '', src:''
  })
  
  let name,value
  const handleInputs = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({[name]:value})
  }

  const PostData = async(e)=>{
    const {name,src} = user
    const res = await fetch("/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name , src
      })
    })
    const data = await res.json()
    if(data.status === 422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration");
    }
    else {
      window.alert("DOne Registration")
      console.log("DOne Registration");
    }
  }

  return (
    <>
      <div>
        <input placeholder="Enter your name" name="name" value={user.name} onChange={handleInputs}/>
        <input placeholder="Enter password"/>
        <button onClick={PostData}>Submit</button>
      </div>
      <br/><br/>
      <img src={user.src}alt="" id="img" name="img"/> 
      <h1 name="h">Hello</h1>
      <a href="/check"><button>Enter OTP</button></a>
    </>
  );
}

export default App;
