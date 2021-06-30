import './App.css';
import React,{useState} from "react"

function App() {

  const [user,setUser] = useState({
    name: '',pass:'',img:''
  })
  // user.img = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg"
  
  let name,value
  const handleInputs = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({...user,[name]:value})
  }

  const PostData = async(e)=>{
    e.preventDefault()
    const {name,pass,img} = user
    console.log(img);
    await fetch("/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name ,pass,img
      })
    })
  }

  return (
    <>
      <form method = "POST">
        <input placeholder="Enter your name" name="name" value={user.name} onChange={handleInputs}/>
        <input placeholder="Enter password" name="pass" value={user.pass} onChange={handleInputs}/>
        <button onClick={PostData}>Submit</button>
        <img src={user.img} alt="" id="img" name="img"/> 
      </form>
      <br/><br/>
      <a href="/check"><button>Enter OTP</button></a>
    </>
  );
}

export default App;