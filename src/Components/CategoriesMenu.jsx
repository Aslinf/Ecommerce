import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import "../stylesheets/categoriesHeader.scss";

function CategoriesMenu(){

  const [title, setTitle] = useState("ALL");
  
  function handleTitle(e){
    setTitle(e);
  }


  return(
    <div className="categories-header">
      <div className="categories-title">
        <Link to={"/"}><IoMdArrowBack /> Home</Link>
        <h2>{title}</h2>
      </div>
      <div className="categories-filters">
        <Link to={"all"} onClick={() => handleTitle("All")} >All</Link>
        <Link to={"furnitures"} onClick={()=> handleTitle("Furnitures")} >Furnitures</Link>
        <Link to={"electronics"} onClick={() => handleTitle("Electronics")} >Electronics</Link>
        <Link to={"lamps"} onClick={() => handleTitle("Lamps")} >Lamps</Link>
        <Link to={"kitchen"} onClick={() => handleTitle("Kitchen")} >Kitchen</Link>
        <Link to={"chairs"} onClick={() => handleTitle("Chairs")} >Chairs</Link>
        <Link to={"rugs"} onClick={() => handleTitle("Rugs")} >Rugs</Link>
      </div>
    </div>
  )
}
export default CategoriesMenu;