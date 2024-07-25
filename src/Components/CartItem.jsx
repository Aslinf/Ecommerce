import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function CartItem({ item, index, deleteItem }){
  const [price, setPrice] = useState(item.price * item.quantity);
  
  const handleQuantity = (operation) => {
    if(operation === "add"){
      item.quantity = item.quantity + 1;
      setPrice(price + item.price)
    } else if (operation === "less"){
      if(item.quantity > 1) {
        item.quantity = item.quantity - 1;
        setPrice(price - item.price);
      } 
    }
  }

  return(
    <div key={index} className="cart-item-container">
      <div className="item-cart-img">
      <img src={item.img} alt="product" />
      </div>

      <div className="item-cart-info">
        <p className="item-cart-name">{item.name}</p>
        <div className="item-cart-btns">
          <button onClick={() => handleQuantity("less")}>-</button>
          <p id="item-quantity" className="item-cart-quantity">{item.quantity}</p>
          <button onClick={() => handleQuantity("add")}>+</button>
        </div>
      </div>

      <div className="item-cart-right">
        <p className="item-cart-price">{price}.00 $</p> 
        <AiOutlineClose onClick={() => deleteItem(item.id)} />
      </div>
    </div>
  );
}

export default CartItem;