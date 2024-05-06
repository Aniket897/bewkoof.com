import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import ProductCard from "../product/productCard";
import Error from "../Error";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingProducts();
  }, []);

  const fetchTrendingProducts = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await axiosInstance.get("/product/list?limit=5");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      const ErrorMsg = error.response?.data?.message
        ? error.response.data.message
        : error.message;
      console.log(ErrorMsg);
      setError(ErrorMsg);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Error error={`${error} failed to fetch products`} />;
  }

  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 w-[90vw] mx-auto">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
