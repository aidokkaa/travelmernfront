import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="navContainer">
       <Link to ="/" style={{ color: "inherit", textDecoration: "none" ,fontSize:"22px"}}>
        <span className="logo">EmirTravel</span></Link>
      </div>
    </div>
  );
};

export default NavBar