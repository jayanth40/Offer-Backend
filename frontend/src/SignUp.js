import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigation } from 'react-router-dom';
function SignUp(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [flag,setFlag] = useState(false)
    // const navigation = useNavigation();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await axios.post("http://localhost:8080/signup",{
            username,
            email,
            password
        })
        setUsername('');
        setEmail('');
        setPassword('')
        console.log("Signup successful",response.data)
        setFlag(true)
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
        <br />
        <button type="submit">SignUp</button>

    </form>
    {flag?<Link to={'/signin'}><button>SignIn</button></Link>:""}
    </>)
}
export default SignUp