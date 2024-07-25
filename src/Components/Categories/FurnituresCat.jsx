import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function FurnituresCat(){

  const itemsFiltered = items.filter((item) => item.category === "furniture");

  return(
    <div>
      <ProductsDisplay itemsFiltered={itemsFiltered} />
    </div>
  )
}

export default FurnituresCat;