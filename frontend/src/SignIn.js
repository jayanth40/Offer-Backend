import React, { useState } from "react";
import axios from "axios";
function SignIn(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await axios.post("http://localhost:8080/signin",{
            username,
            email,
            password
        })
        console.log("Signup successful",response.data)
        
    }
    return(<>
    <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
        <br />
        <label htmlFor="name">Email</label>
        <input type="email" id="name" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <br />
        <label htmlFor="name" onChange={(e)=>{
            setPassword(e.target.value)
        }}>Password</label>
        <input type="password" id="name"/>
        <button type="submit">SignIn</button>
    </form>
    </>)
}
export default SignIn