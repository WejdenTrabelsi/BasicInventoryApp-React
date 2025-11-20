import { useState } from "react";

import AddItem from "./AddItem";
import SearchBar from "./SearchBar";
import ItemsDisplay from "./ItemsDisplay";

import styled from "styled-components";
const Title = styled.h1`
  color: ${props => (props.color ? props.color : "black")};
`;

function App() {
  // Give Filters explicit defaults so checks are simpler
  const [Filters, setFilters] = useState({
    name: "",
    price: 0,
    type: "",
    brand: ""
  });

  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    // merge with previous filters so missing keys don't get wiped out
    setFilters(prev => ({ ...prev, ...searchParams }));
    // helpful debug:
    // console.log("updateFilters called:", searchParams);
  };

  const addItemToData = (item) => {
    // Normalize incoming item (ensure numeric price, etc.)
    const newItem = {
      ...item,
      // give a stable id (use current length or timestamp)
      id: data.items.length, 
      price: typeof item.price === "string" ? Number(item.price) : item.price
    };

    // Do not mutate existing state: create a new array
    setData(prev => ({ items: [...prev.items, newItem] }));

    // If you want to inspect the new list, use an effect or setTimeout / callback
    // setTimeout(() => console.log("new data:", data), 0);
  };

  const filterData = (items) => {
    // If items is falsy or not an array, guard
    if (!Array.isArray(items)) return [];

    // If no filters at all, return original list
    const noFilters =
      !Filters.name && !Filters.price && !Filters.type && !Filters.brand;
    if (noFilters) return items;

    // Use Array.filter — easier & readable
    return items.filter((item) => {
      // if filter value exists, check it; otherwise ignore
      if (Filters.name && item.name !== Filters.name) return false;

      // price: treat 0 or empty as "no filter" — if Filters.price is 0 we skip
      if (Filters.price && Number(item.price) > Number(Filters.price))
        return false;

      if (Filters.type && item.type !== Filters.type) return false;
      if (Filters.brand && item.brand !== Filters.brand) return false;

      return true;
    });
  };

  // compute filtered items once per render
  const visibleItems = filterData(data.items);

  // debug: uncomment to inspect in console
  // console.log("Filters:", Filters, "All items:", data.items, "Visible:", visibleItems);

  return (
    <div className="container">
      <Title color="red">Test</Title>

      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>

      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>

      <div className="row mt-3">
        {/* Pass the filtered list */}
        <ItemsDisplay items={visibleItems} />
      </div>
    </div>
  );
}

export default App;
