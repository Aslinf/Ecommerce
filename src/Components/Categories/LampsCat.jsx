import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function LampsCat(){

  const itemsFiltered = items.filter((item) => item.category === "lamp");

  return(
    <div>
      <ProductsDisplay itemsFiltered={itemsFiltered} />
    </div>
  )
}

export default LampsCat;