import React,{useState} from 'react'
import loginImage from "../assets/img/login.png"
import {useNavigate} from "react-router-dom"


function Login() {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState()
  const navigate = useNavigate();

  async function login(e){
    e.preventDefault();
    let item={email,password}

    let result= await fetch("http://bookbuzz.cronhex.com/api/v1/account/login",{
      method:"POST",
      headers:{
        "Access-Control-Allow-Origin" : "*",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(item)
    });

    result=await result.json();
    let jwt=result.result['jwt']
    localStorage.setItem("login",jwt)
    navigate("/products");
  }
  
  return (
    <div id="login">
        <div className='container'>
        <div className="login-image">
            <h1>BookBuzz</h1>
            <img width='300px' src={loginImage} alt="login-image" />
        </div>
        <div className="login-form">
            <div className="login-form-row">
            <h2>Log In</h2>
            <form>
                <label htmlFor="">Email</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter your email"/>
                <label htmlFor="">Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password"/>
                <button onClick={login} >Log In</button>
            </form>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Login