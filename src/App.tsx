
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import {useState} from 'react';
import styled from "styled-components";
import Like from "./components/Like";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";

function App() {
  const [products, setProducts] = useState(['product 1', 'product 2', 'product 3']);
  function handleAddProduct() {
    let productNumber = products.length + 1;
    let productList = [...products, 'product ' + productNumber];
    setProducts(productList);
  }
  // 'pepperoni'
  const [pizza, setPizza] = useState({
    name: 'spicy pepperoni',
    toppings: ['mushrooms'],
  });

  const handleP  = () => {
    setPizza ({
      ...pizza,
      toppings: [...pizza.toppings, 'pepperoni']
    });
  }

  const [cart, setCart] = useState({
    discount: 0,
    items: [
      {id: 1, title: 'product 1', quantity: 1},
      {id: 2, title: 'product 2', quantity: 1},
    ],
  })


  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => item.id == 1 ? {...item, quantity: item.quantity + 1} : item)
    });
  }





  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'messi',
  //   }});

  //  const handleClick = () => {
  //   setGame({
  //     ...game,
  //     player: {
  //       ...game.player,
  //       name: 'ronaldo'
  //     }
  //   });
  //  }






  return ( 
    <>
    <Navbar cartItems={products.length}/>
      <Cart addItems={handleAddProduct} OnClear={()=> setProducts([])} cartItems={products}/>
    </>
  )
}

export default App;