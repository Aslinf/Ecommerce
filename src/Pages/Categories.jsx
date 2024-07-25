import { Outlet } from "react-router-dom";
import CategoriesMenu from "../Components/CategoriesMenu";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

function Categories(){
  return(
    <>
      <Navbar />
      <CategoriesMenu />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Categories;