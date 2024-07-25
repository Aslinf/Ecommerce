import "./stylesheets/global.scss"
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from "./Pages/Categories";
import AllCat from "./Components/Categories/AllCat";
import FurnituresCat from "./Components/Categories/FurnituresCat";
import ElectronicsCat from "./Components/Categories/ElectronicsCat";
import LampsCat from "./Components/Categories/LampsCat";
import KitchenCat from "./Components/Categories/KitchenCat";
import ChairsCat from "./Components/Categories/ChairsCat";
import RugsCat from "./Components/Categories/RugsCat";
import ProductPage from "./Pages/ProductPage";
import { CartProvider } from "./Components/Context/CartContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {

  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path="categories" Component={Categories} >
          <Route path="all" Component={AllCat} />
          <Route path="furnitures" Component={FurnituresCat} />
          <Route path="electronics" Component={ElectronicsCat} />
          <Route path="lamps" Component={LampsCat} />
          <Route path="kitchen" Component={KitchenCat} />
          <Route path="chairs" Component={ChairsCat} />
          <Route path="rugs" Component={RugsCat} />
        </Route>
        <Route path="categories/product/:id" Component={ProductPage}/>
      </Routes>
    </CartProvider>
  );
}

export default App;
