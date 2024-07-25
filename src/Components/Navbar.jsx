import { Link } from "react-router-dom";
import "../stylesheets/navbar.scss";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import cartEmpty from "../Assets/cart/empty-cart.png";
import { CartContext } from "./Context/CartContext";
import CartWithItems from "./CartWithItems";

function Navbar(){
	const [cart, setCart] = useState(false);
	const [menu, setMenu] = useState(false);
	const { cartItems, deleteItem, popup, setPopup } = useContext(CartContext);

	const openCart = () => {
		setCart(!cart);
	};

	const openMenu = () => {
		setMenu(!menu);
		console.log(menu);
	};

	popup && (
		setTimeout(() => {
			setPopup(false);
		}, 2000)
	)

	return(
		<>
			{/* overlay */}
			<div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-overlay" : "closed-overlay"}`}
      ></div>

			{/* cart */}
			<div className={`cart-container ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title">
          <p className="cart-full-h2">
            Your Shopping Cart ({ cartItems.length })
          </p>
          <AiOutlineClose onClick={openCart} />
        </div>

        <div className="cart-body">
          {cartItems.length < 1 ? (
            <div className="empty-cart-container">
							<img src={cartEmpty}  alt="empty cart image" />
							<p>Cart empty </p>
							<button onClick={openCart} >Keep Browsing </button>
						</div>
          ) : (
            <CartWithItems 
							cartItems={cartItems} 
							deleteItem={deleteItem}
						/>
          )}
        </div>
      </div>

			{/* navbar */}
			<div className="nav-container">
				<Link to="/">ASLIN'S SHOP</Link>
				<div className="nav-links">
					<Link to="/categories/all">CATEGORIES</Link>
					<span className="cart-icon-container" onClick={openCart}>
						<AiOutlineShoppingCart />
						{cartItems.length > 0 ? <span>{ cartItems.length }</span> : ""} 
					</span>
				</div>
				<div className="hamburger-menu" onClick={openMenu}>
					<AiOutlineMenu />
				</div>
			</div>

			{/* Hamburger menu */}
			<div className={`hamburger-menu-items ${menu ? "open-menu" : "closed-menu"}`}>
				<AiOutlineClose onClick={openMenu} />
				<Link to="/categories/all">CATEGORIES</Link>
				<span onClick={()=> {openCart(); openMenu();}}>
					CART 
				</span>
			</div>

			{/* POP-UP */}
			{popup ? (
				<div className={`popup-container ${popup ? "open-popup" : "closed-popup"}`}>
					<p>Item added to cart</p>
				</div>
			) : ("")}
			
		</>
	)
}

export default Navbar;