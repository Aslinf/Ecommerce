import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      let newCartItems;

      if (itemIndex !== -1) {
        newCartItems = [...prevItems];
        newCartItems[itemIndex].quantity += item.quantity;
      } else {
        newCartItems = [...prevItems, item];
      }
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
    
    setPopup(true);
  };
  

  const deleteItem = (id) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems, setCartItems, deleteItem, popup, setPopup }}>
      {children}
    </CartContext.Provider>
  );
};

