
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import {useState} from 'react';


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
      <ListGroup 
      items={cities} 
      heading="Cities" 
      onSelectedItem={()=> cities}/>
    </>
  )
}

export default App;