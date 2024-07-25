import "../stylesheets/banner.scss";
import { Link } from "react-router-dom";
import bannerimg from "../Assets/banner/banner2.jpg";

function Banner(){
  return(
    <div className="banner">
      <div className="banner-container">
        <div className="banner-info">
          <p>Comfortable & Elegante Living</p>
          <p>This products are all made to standard sizes so that you can mix and match them freely.</p>
          <Link to={"/categories/all"}>SHOP NOW</Link>
        </div>
        <img src={bannerimg}/>
      </div>
    </div>
  )
}

export default Banner;