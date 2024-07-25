import "../stylesheets/productCard.scss";
import { Link } from "react-router-dom";

function ProductCard({ id, name, img, price }){

  return(
    <>
      <div className="product-card">
        <Link to={`/categories/product/${id}`}>
          <div className="product-card-header">
            <img src={img} alt={name} />
          </div>
          <div className="product-card-description">
            <p>{name}</p>
            <p className="product-price">{price} €</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard;