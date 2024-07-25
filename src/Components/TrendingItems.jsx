import "../stylesheets/trendingItems.scss";
import { items } from "../ecommerceDB/AllData";
import ProductCard from "../Components/ProductCard";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

function TrendingItems(){
  const itemsFiltered = items.filter((item) => item.id >= 14);

  const leftButton = () => {
    let trendingContainer = document.getElementById("trending-items");
    trendingContainer.scrollLeft -= 500;
  };

  const rigthButton = () => {
    let trendingContainer = document.getElementById("trending-items");
    trendingContainer.scrollLeft += 500;
  };

  return(
    <div className="trending">
      <div className="trending-container">
        <div className="trending-title">
          <p>Trending Now</p>
          <div className="trending-buttons">
            <button onClick={leftButton} ><IoMdArrowBack /></button>
            <button onClick={rigthButton} ><IoMdArrowForward /></button>
          </div>
        </div>
        <div id="trending-items" className="trending-items">
          {itemsFiltered.map((item, index) => (
            <ProductCard
              key={index} 
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingItems;