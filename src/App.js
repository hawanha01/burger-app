import React, { useState } from "react";
import "./App.css";
import Burger from "./components/burger/burger";
import Footer from "./components/footer/footer";
import MyNavbar from "./components/navbar/navbar";
function App() {
  const [items, setItems] = useState([
    { id: 1, name: "lettuce", quantity: 0, price: 3 },
    { id: 2, name: "bacon", quantity: 0, price: 5 },
    { id: 3, name: "cheese", quantity: 0, price: 4 },
    { id: 4, name: "meat", quantity: 0, price: 6 },
  ]);

  const increaseItem = (i) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === i.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseItem = (i) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === i.id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const resetState = () => {
    setItems([
      { id: 1, name: "lettuce", quantity: 0, price: 3 },
      { id: 2, name: "bacon", quantity: 0, price: 5 },
      { id: 3, name: "cheese", quantity: 0, price: 4 },
      { id: 4, name: "meat", quantity: 0, price: 6 },
    ]);
  };
  return (
    <div className="App">
      <MyNavbar />
      <div className="BurgerBody">
        <Burger items={items} />
      </div>
      <div className="footerBody">
        <Footer
          items={items}
          increaseItem={increaseItem}
          decreaseItem={decreaseItem}
          resetState={() => resetState()}
        />
      </div>
    </div>
  );
}

export default App;
