import { useState } from 'react';

import AddItem from './AddItem';
import SearchBar from './SearchBar';
import ItemsDisplay from './ItemsDisplay';

import styled from "styled-components";
const Title=styled.h1 `
  color: ${props => props.color ? props.color:"black"};
`



function App() {
  const [Filters,setFilters]=useState({});
  const [data,setData]=useState({items:[]});

  const updateFilters = (searchParams)=> {
    setFilters(searchParams);
  }; 
  const addItemToData=(item)=>{
    let items = data["items"];
    item.id = items.length;
    items.push(item)
    setData({items:items});
    console.log(data);

  };




  return (
    <div className="container">
          <Title color="red">Test</Title>
          
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters}/>
      </div>
      
      <div className="row mt-3">
      
        <AddItem addItem={addItemToData}/>
      </div>
        <div className="row mt-3">
        <ItemsDisplay items={data.items} />
      </div>

      
      
      
      
      

    </div>
  );
}

export default App;
