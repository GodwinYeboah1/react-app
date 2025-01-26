import { useState, MouseEventHandler } from "react";

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
      <h1>{heading}</h1>
      { getMessage()}
      <ul className="list-group">
        {items.map((city, index) => (
            <li
                className={
                    selectedCity === index ? "list-group-item active" : "list-group-item"
                }
                key={city}
                onClick={() => {
                    setSelectedCity(index);
                    onSelectedItem(city);
                }}
            >
                {city}
            </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
