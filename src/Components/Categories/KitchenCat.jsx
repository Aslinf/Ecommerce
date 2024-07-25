import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function KitchenCat(){

  const itemsFiltered = items.filter((item) => item.category === "kitchen");

  return(
    <div>
      <ProductsDisplay itemsFiltered={itemsFiltered} />
    </div>
  )
}

export default KitchenCat;