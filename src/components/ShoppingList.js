import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [Choice, setChoice] = useState('All');

  const handleOnChange = (e) => {
    setChoice(e.target.value);
  }

const Newlist = Choice == 'All' ? items : items.filter((items) => items.category === Choice);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value = {Choice} onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {Newlist.map((items) => (
          <Item key={items.id} name={items.name} category={items.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
