import { userAPI } from "../utilities";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

const SignUp = ()=>{
    const[email,setEmail]= useState("")
    const[password, setPassword]= useState("")
    const navigate = useNavigate();
    const {user,setUser}= useOutletContext()

    const signUp= async(e)=>{
        e.preventDefault()
        let response= await userAPI.post("SignUp/",{
            email:email,
            password:password,
        })

        if (response.status===201){
            console.log(response.data)
            setUser(response.data.Email)
            localStorage.setItem("token", response.data.token)
            userAPI.defaults.headers.common[
                "Authorization"
            ] = `Token ${response.data.token}`
            navigate("/")
        }
        else {
            alert("Something went wrong.")
        }
    }
    
    return (
        <Form id="signupForm" onSubmit={(e) => signUp(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
             style={{width:"25rem"}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
             style={{width:"25rem"}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      );
    };
    
    export default SignUp;
  
