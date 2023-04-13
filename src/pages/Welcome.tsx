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
    <div className="welcome-page">
      <h1 className="welcome-page__title">Welcome to my app!</h1>
      <p className="welcome-page__subtitle">
        This is a beautiful welcome page for your app.
      </p>
      <Link to="/" className="welcome-page__button">
        Get Started
      </Link>
    </div>
  );
};

export default Welcome;
