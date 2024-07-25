import "../stylesheets/productsDisplay.scss";
import ProductCard from "../Components/ProductCard";

function ProductsDisplay({ itemsFiltered, category }){

  return(
    <>
      <div className="Products-display">

        <h2>{category}</h2>
        <div className="products-display-container">
          {itemsFiltered.map((item) => (
            <ProductCard 
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsDisplay;