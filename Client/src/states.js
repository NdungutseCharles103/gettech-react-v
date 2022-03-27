import React, { useState } from 'react'
import App from './App'

const States = () => {
  const [cartCount, setCartCount] = useState(1);
  const [wishCount, setWishCount] = useState(1);
  return (
    <div className="hidden">
        <App cart={cartCount} wishCount={wishCount}
              setCartCount={setCartCount} setWishCount={setWishCount}/>
    </div>
  )
}

export default States