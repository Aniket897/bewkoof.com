import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import ProductCard from "../components/product/productCard";
import RootLayout from "../layouts/RootLayout";

const WishList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = useAuth();

  useEffect(() => {
    fetchWhishList();
  }, []);

  const fetchWhishList = async () => {
    try {
      const response = await axiosInstance.get("/user/wishlist", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });

      console.log(response);
      setProducts(response.data.wishlist);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!auth.token) {
    return <Navigate to={"/login"} />;
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error Occure...</p>;
  }

  return (
    <RootLayout>
      {products.length && (
        <div className="p-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:w-[90vw] mx-auto">
          {products.map((item) => (
            <ProductCard {...item} key={item._id} />
          ))}
        </div>
      )}
    </RootLayout>
  );
};

export default WishList;
