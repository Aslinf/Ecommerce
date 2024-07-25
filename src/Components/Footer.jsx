import { Link } from "react-router-dom";

function Footer(){
  return(
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <p>About</p>
          <p>FAQs</p>
          <p>Store locator</p>
          <p>News</p>
          <p>Carrers</p>
          <p>Contact</p>
        </div>
        <p>Design by <Link to="https://github.com/Abderraouf-Rahmani" target="_blank">Abderraouf</Link></p>
      </div>
    </footer>
  )
}

export default Footer;