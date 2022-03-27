import React from 'react'
import Nav from '../Navbar'

const Cart = (props) => {
  const { cartCount, wishCount } = props;
  return (
    <div>
      <Nav cartCount={cartCount} wishCount={wishCount}/>
    </div>
  )
}

export default Cart