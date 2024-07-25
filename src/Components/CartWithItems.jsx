import { useEffect, useState } from "react";
import "../stylesheets/navbar.scss";
import CartItem from "./CartItem";

function CartWithItems({ cartItems, deleteItem }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const prices = document.getElementsByClassName("item-cart-price");

    let calculatedPrice = 0;
    for(let i = 0; i < prices.length; i++){
      let num = prices[i].innerHTML.replace(/\D/g, "");
      calculatedPrice += Number(num);
    }
    const finalPrice = String(calculatedPrice).slice(0, -2) + "." + String(calculatedPrice).slice(-2);
    return  finalPrice;
  }

  useEffect(() => {
    setTotalPrice(calculateTotalPrice);
  }, [cartItems])


  return(
    <div className="full-cart-container">
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem item={item} index={index} deleteItem={deleteItem} />
        ))}
      </div>

      <div className="subtotal-div">
        <div className="subtotal-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice} $</p>
        </div>
        <button>Go to Checkout</button>
      </div>
    </div>
  )
}

export default CartWithItems;