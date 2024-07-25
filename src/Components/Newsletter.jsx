import "../stylesheets/newsletter.scss";

function Newsletter(){
  return(
    <div className="newsletter">
      <div className="newsletter-container">
        <p>Subscribe to the newsletter!</p>
        <input placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;