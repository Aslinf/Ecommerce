import "../stylesheets/pages/home.scss";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProductsDisplay from "../Components/ProductsDisplay";
import TrendingItems from "../Components/TrendingItems";
import Banner from "../Components/Banner";
import Newsletter from "../Components/Newsletter";
import { items } from "../ecommerceDB/AllData";
import Footer from "../Components/Footer";

function Home(){
	const itemsFiltered = items.filter((item) => item.id <= 8);

	return(
		<>
			<Navbar />
			<Hero />
			<ProductsDisplay
				itemsFiltered={itemsFiltered} 
				category={"Products"}
			/>
			<Banner />
			<TrendingItems />
			<Newsletter />
			<Footer />
		</>
	)
}

export default Home;