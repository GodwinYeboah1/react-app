
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import {useState} from 'react';
import styled from "styled-components";
import Like from "./components/Like";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import { Form } from "./components/Form/Form";
import {FilterTable} from "./components/FilterTable/FilterTable";

// const tableData = [{name: 'Mark', age: 23}, {name: 'Jacob', age: 34}, {name: 'Larry', age: 45}];

function App() {
  const tableData = [{name: 'Mark', age: 23}, {name: 'Jacob', age: 34}, {name: 'Larry', age: 45}, {name: 'godwin', age: 30}];

  return ( 
    <>
      <FilterTable data={tableData} />
    </>
  )
}

export default App;