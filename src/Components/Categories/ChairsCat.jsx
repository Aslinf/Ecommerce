import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function ChairsCat(){

  const itemsFiltered = items.filter((item) => item.category === "chair");

  return(
    <div>
      <ProductsDisplay itemsFiltered={itemsFiltered} />
    </div>
  )
}

export default ChairsCat;