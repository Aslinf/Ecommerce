import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function ElectronicsCat(){

  const itemsFiltered = items.filter((item) => item.category === "electronic");

  return(
    <div>
      <ProductsDisplay itemsFiltered={itemsFiltered} />
    </div>
  )
}

export default ElectronicsCat;