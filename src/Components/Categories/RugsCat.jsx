import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function RugsCat(){

  const itemsFiltered = items.filter((item) => item.category === "rugs");

  return(
    <div>
      <ProductsDisplay itemsFiltered={itemsFiltered} />
    </div>
  )
}

export default RugsCat;