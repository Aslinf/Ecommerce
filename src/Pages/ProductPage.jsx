import { useParams } from "react-router-dom";
import { items } from "../ecommerceDB/AllData";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import TrendingItems from "../Components/TrendingItems";
import ProductInfo from "../Components/ProductInformation";

function ProductPage(){

  const { id } = useParams();
  const itemInfo = items.filter((item) => item.id == id);

  return(
    <>
      <Navbar />
      <ProductInfo
        info={itemInfo} 
      />
      <TrendingItems />
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductPage;