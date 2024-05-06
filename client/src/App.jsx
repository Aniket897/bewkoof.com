import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import Category from "./pages/Category";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
