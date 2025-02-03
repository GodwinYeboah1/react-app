import React from 'react'
interface CartProps {
    OnClear: () => void;
    cartItems: string[];
    addItems: () => void;
}
const Cart = ({OnClear, cartItems, addItems}: CartProps) => {
    // need to be handle by parent component
  // const [products, setProducts] = useState(['product 1', 'product 2', 'product 3']);
  // function handleAddProduct() {
  //   let productNumber = products.length + 1;
  //   let productList = [...products, 'product ' + productNumber];
  //   setProducts(productList);
  // }
  // // 'pepperoni'
  // const [pizza, setPizza] = useState({
  //   name: 'spicy pepperoni',
  //   toppings: ['mushrooms'],
  // });

  // const handleP  = () => {
  //   setPizza ({
  //     ...pizza,
  //     toppings: [...pizza.toppings, 'pepperoni']
  //   });
  // }

  // const [cart, setCart] = useState({
  //   discount: 0,
  //   items: [
  //     {id: 1, title: 'product 1', quantity: 1},
  //     {id: 2, title: 'product 2', quantity: 1},
  //   ],
  // })



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