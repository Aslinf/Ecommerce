import { useState, useContext } from "react";
import { CartContext } from "./Context/CartContext";
import "../stylesheets/ProductInfo.scss";

function ProductInfo({ info }){
  const item = info[0];
  const [image, setImage] = useState(item.img);
  const [price, setPrice] = useState(item.price);
  const { addToCart } = useContext(CartContext);

  const changeImage = (e) => {
    setImage(e.target.src)
  }

  const handleQuantity = (e) => {
    if(e === "add"){
      item.quantity = item.quantity + 1;
      setPrice(price + item.price);
    } else if (e === "less"){
      item.quantity = item.quantity - 1;
      setPrice(price - item.price);
    }
  }

  return(
    <div className="product-container">
      <h2 className="product-title">{item.name}</h2>
      <div className="product-information">

        <div className="product-info-left">
          <div className="big-img">
            <img src={image} alt="Product image" />
          </div>
          <div className="small-imgs">
            <img src={item.img} alt="Product image" onMouseOver={changeImage} />
            {item.otherImgs.map((img, index) => {
              return <img key={index} src={img} alt="Product image" onMouseOver={changeImage} />
            })}
          </div>
        </div>

        <div className="product-info-right">
          <p className="product-description">{item.specs}</p>
          <div className="product-quantity">
            <p>Quantity</p>
            <div className="product-quantity-buttons">
              <button onClick={() => handleQuantity("less")}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleQuantity("add")}>+</button>
            </div>
            <p>{price} $</p>
          </div>
          <div className="product-buy">
            <button onClick={() => addToCart(item)}>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>

      <div className="product-specs">
        <div className="product-spec">
          <p className="spec-title">Texture</p>
          <p>{item.texture}</p>
        </div>

        <div className="product-spec">
          <p className="spec-title">Weight</p>
          <p>{item.weight}</p>
        </div>

        <div className="product-spec">
          <p className="spec-title">Size</p>
          <p>{item.size}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;