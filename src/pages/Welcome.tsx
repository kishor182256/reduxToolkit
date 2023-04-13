import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
// import './WelcomePage.css';
import { useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { log } from 'console';


const Welcome: React.FC = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log('token',token);
    

    useEffect(() => {
      if(!token)
      {
        navigate('/')
      }
    },[token])

  return (
    <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
      <h1 >Welcome to my app!</h1>
      <p>
        This is a beautiful welcome page for your app.
      </p>
    </div>
  );
};

export default Welcome;
