// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Products from "./pages/Products";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container w-50 m-6 px-11 items-center">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/kids" element={<ShopCategory category="kids" />} />
            <Route path="products" element={<Products />}>
              <Route path=":productId" element={<Products />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
