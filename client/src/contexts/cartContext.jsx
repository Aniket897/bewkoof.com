import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  function addProductToCart(product) {
    const alredyHave = cart.some((item) => item.product._id == product._id);
    if (alredyHave) return alert("Alredy added");
    const newProduct = {
      product,
      count: 1,
    };
    const updatedCart = [...cart, newProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <cartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </cartContext.Provider>
  );
}
