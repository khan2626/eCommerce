// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Products from "./pages/Products";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";
import Footers from "./components/footer/Footer";
import menBanner from "./components/Assets/menBanner.jpg";
import womenBanner from "./components/Assets/womenBanner.jpg";
import kidsBanner from "./components/Assets/kidsBanner.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto items-center sm:mx-2 md:mx-6 lg:mx-8 xl:mx-10 px-2 md:px-6 lg:px-8 xl:px-10">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory banner={menBanner} category="men" />}
            />
            <Route
              path="/women"
              element={<ShopCategory banner={womenBanner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kidsBanner} category="kids" />}
            />
            <Route path="/product" element={<Products />}>
              <Route path=":productId" element={<Products />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
          </Routes>
          <Footers />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
