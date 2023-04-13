import React, { useState } from "react";
import Input from "../components/shared/Input";
import Button from "../components/shared/button";
import { useDispatch,useSelector} from 'react-redux';
import { login } from "../redux/userActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Resolver, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
}




const Login = () => {
  const [password, setPasswords] = useState<any>("pistol");
  const [email, setEmail] = useState<any>("eve.holt@reqres.in");

  const dispatch = useDispatch<any>();

  const token = useSelector((state: any) => state?.auth?.token?.token);
  const navigate = useNavigate();
  console.log('token',token);


  

  

 
  

  const handleSubmit = (event:any) => {
    event.preventDefault();

    const user = {
     
      email: email as string,
      password: password as string,
    };

    dispatch(login(user));
    if(token){
      navigate('/welcome')
    }
    localStorage.setItem("token", JSON.stringify(token));
  };


 


  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label>Email</label>
        <Input
         
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>

        <Input
          type="password"
          onChange={(e) => setPasswords(e.target.value)}
          value={password}
        />
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default Login;
