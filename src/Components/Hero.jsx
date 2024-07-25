import { Link } from "react-router-dom";
import "../stylesheets/hero.scss";

function Hero(){
  return(
    <>
      <div className="home-container">
        <div className="home-grid-container">
          
          <div className="feature-grid-1">
            <Link to={"categories/all"}>
              <div className="feature-overlay">
                <p className="feature-name">Home</p>
              </div>
            </Link>
          </div>

          <div className="feature-grid-2">
            <Link to={"categories/lamps"}>
              <div className="feature-overlay">
                <p className="feature-name">Lamps</p>
              </div>
            </Link>
          </div>

          <div className="feature-grid-3">
            <Link to={"categories/kitchen"}>
              <div className="feature-overlay">
                <p className="feature-name">Kitchen</p>
              </div>
            </Link>
          </div>

          <div className="feature-grid-4">
            <Link to={"categories/electronics"}>
              <div className="feature-overlay">
                <p className="feature-name">Electronics</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero;