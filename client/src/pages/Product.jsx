import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { useCart } from "../contexts/cartContext";
import { useAuth } from "../contexts/authContext";
import toast from "react-hot-toast";
import RootLayout from "../layouts/RootLayout";
import HomeLoading from "../components/laoding/HomeLoading";
import Error from "../components/Error";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [whishlistLoading, setWhishlistLoading] = useState(false);

  const cart = useCart();
  const auth = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axiosInstance.get(`/product/product/${productId}`);
      console.log(response);
      setProduct(response.data);
    } catch (error) {
      const ErrorMsg = error.response?.data.message
        ? error.response.data.message
        : error.message;
      console.log(ErrorMsg);
      setError(ErrorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    cart.addProductToCart(product);
    return toast.success("added to cart");
  };

  const handleAddToWishList = async () => {
    if (!auth.token) {
      toast.error("You need to login first");
      navigate("/login");
    }

    try {
      setWhishlistLoading(true);
      const response = await axiosInstance.post(
        `/user/wishlist/${product._id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      const errorMessaeg = error.response.data.message || error.message;
      toast.error(errorMessaeg);
      console.log(error);
    } finally {
      setWhishlistLoading(false);
    }
  };

  if (loading) {
    return <HomeLoading />;
  }

  return (
    <RootLayout>
      {error && <Error error={error} />}
      {product && (
        <div className="w-[90vw] max-sm:mt-2 md:w-[60vw] mx-auto flex max-md:flex-col md:mt-7 gap-8">
          <div className="flex-1">
            <img
              className="w-full"
              src={`https://images.bewakoof.com/t320/${product.thumbnailImage}`}
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-xl">{product.manufacturer_brand}</p>
            <p className="text-neutral-600">{product.name}</p>
            <p className="border w-fit px-2">⭐ 4.4</p>
            <div>
              <p className="font-bold text-2xl">₹{product.price}.00</p>
              <p className="text-xs text-neutral-500">inclusive of all taxes</p>
            </div>
            <div className="border-t-4 border-b-4 py-2">
              TriBe members get an extra discount of ₹40 and FREE shipping.Learn
              more
            </div>
            <p className="text-xs text-red-500">Few Left</p>
            <div className="w-full flex gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-[#FFD84D] uppercase font-bold p-4 mt-4 flex-1"
              >
                Add to Cart
              </button>
              <button
                disabled={whishlistLoading}
                onClick={handleAddToWishList}
                className="bg-neutral-200 uppercase font-bold p-4 mt-4 flex-1"
              >
                {whishlistLoading ? "Loading..." : "wishlist"}
              </button>
            </div>
          </div>
        </div>
      )}
    </RootLayout>
  );
};

export default Product;
