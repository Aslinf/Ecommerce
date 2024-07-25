import ProductsDisplay from "../ProductsDisplay";
import { items } from "../../ecommerceDB/AllData";

function AllCat(){

  return(
    <div>
      <ProductsDisplay itemsFiltered={items} />
    </div>
  )
}

export default AllCat;