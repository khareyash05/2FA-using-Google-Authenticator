import './App.css';
import React,{useState} from "react"
import Check from './Check';

function App() {  
  var twofactor = {dataURL : '',secret  :''}

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
        name,pass
      })
    })
    const data = await res.json()
    console.log(data);
    twofactor = data
    window.a = twofactor.dataURL
    window.b = twofactor.secret
    console.log(window.a);
    console.log(window.b);
    var c = window.b
  }
  return (
    <>
      <form method = "POST">
        <input placeholder="Enter your name" name="name" value={user.name} onChange={handleInputs}/>
        <input placeholder="Enter password" name="pass" value={user.pass} onChange={handleInputs}/>
        <img src={window.a} alt="qrcode appears here"/> 
        <button onClick={PostData}>Submit</button>
      </form>
      <br/><br/>
      <a href="/check"><button>Enter OTP</button></a>
    </>
  );
}

export {c}
export default App;