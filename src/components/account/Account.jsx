import React from 'react';
import Navbar from '../Navbar';

const Account = (props) => {
    const {cartCount, wishCount} = props
  return (
    <div>
        <Navbar cartCount={cartCount} wishCount={wishCount} />
        Account
    </div>
  )
}

export default Account