import React from 'react'
interface CartProps {  
    cartItems: number;
}
const Navbar = ({cartItems}:CartProps) => {
  return (
    <div>Navbar {cartItems} </div>
  )
}

export default Navbar