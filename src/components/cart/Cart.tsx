import React from 'react'
interface CartProps {
    OnClear: () => void;
    cartItems: string[];
    addItems: () => void;
}
const Cart = ({OnClear, cartItems, addItems}: CartProps) => {
    

  return (
    <>
    <h1>Cart</h1>
     {
        cartItems.map((item, index)=> {
            return <p key={index}> {item}</p>
        })
     }
    <button onClick={OnClear}>Clear Cart Items</button>
    <button onClick={addItems}>Add Cart Items</button>
    </>
  )
}

export default Cart