import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const Account = (props) => {
    const {cartCount, wishCount} = props
  return (
    <div>
        <Navbar cartCount={cartCount} wishCount={wishCount} />
        <Link to="/login">Log out</Link>
    </div>
  )
}

export default Account