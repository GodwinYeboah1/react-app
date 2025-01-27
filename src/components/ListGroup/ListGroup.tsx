import { useState, MouseEventHandler } from "react";
import  "./ListGroup.css";
import styled from "styled-components";
import { FaBeer , FaCity } from 'react-icons/fa';


const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background-color: ${(props) => props.active ? "blue" : 'none'};
  color: ${(props) => props.active ? "white" : ''};
`;
interface Props {
    items: string[];
    heading: string;
    onSelectedItem: (city: string) => void
}

function ListGroup({items, heading, onSelectedItem}: Props) {

  let [selectedCity, setSelectedCity] = useState(-1);

  const getMessage = () => { 
    return   items.length === 0 &&  <p>No city found </p>
  };
     
  return (
    <>
      <h1>{heading} <FaCity color="red" size={100}/></h1>
      { getMessage()}
      <List>
        {items.map((city, index) => (
            <ListItem
                active={index === selectedCity}
                key={city}
                onClick={() => {
                    setSelectedCity(index);
                    onSelectedItem(city);
                }}
            >
                {city}
            </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
