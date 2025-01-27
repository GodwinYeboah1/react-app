
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import {useState} from 'react';
import styled from "styled-components";
import Like from "./components/Like";
interface ButtonProps {
  onCLick: () => void;
}
function App() {
    const  [alertVisibility , setalertVisibility] = useState(false);
    const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
    
  return ( 
    <>
    {/* {
      alertVisibility && 
      <Alert onclick={ ()=> setalertVisibility(false)}/>
    }
     <Button 
     onCLick={()=> setalertVisibility(true)}>
        Click me !
      </Button> */}
      {/* <ListGroup 
      items={cities} 
      heading="Cities" 
      onSelectedItem={()=> cities}/> */}

      {/* <Button onCLick={() => {}}>Click me !</Button> */}
      <Like onClick={() => {}} />

    </>
  )
}

export default App;