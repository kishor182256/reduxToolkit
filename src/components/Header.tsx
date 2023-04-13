import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');


  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <header style={{ backgroundColor: '#f2f2f2' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
     
        <ul style={{ display: 'flex', listStyle: 'none' }}>
         {!token && <li style={{ margin: '0 1rem' }}>
            <Link to='/register'>Register</Link>
          </li>}
          <li style={{ margin: '0 1rem' }}>
            <Link to='/'>Login</Link>
          </li>

          <li style={{ margin: '0 1rem',cursor:'pointer' }} onClick={handleLogout}>
            LogOut
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
