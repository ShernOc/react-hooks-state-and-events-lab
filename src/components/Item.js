import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setinCart]=useState(false); 

  // event handler 
  
  const  handleClick=()=>{
    setinCart(!inCart); 
  }
  
  return (
    <li className={inCart? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick}  className={inCart? "remove" : "add"} 
       >{inCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
