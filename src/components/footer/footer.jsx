import React, { useState } from "react";
import './footer.css';
import Menu from "./Menu/menu";
const BUN_PRICE = 3;

function Footer({items,increaseItem,decreaseItem}) {
  const [price,setPrice] = useState()
  const handlePriceChange=(price)=>{
    setPrice(price)
  }
  return (
    <div className="Footer">
      <div className="PriceTag">
        <p>Current Price:{price}</p>
      </div>
      <div className="MenuTag">
        <Menu handlePrice={handlePriceChange} increase={increaseItem} decrease={decreaseItem} items={items} bunPrice={BUN_PRICE}/>
      </div>
      <div className="SignUp">
        <button>SIGN UP TO ORDER</button>
      </div>
    </div>
  );
}

export default Footer;
