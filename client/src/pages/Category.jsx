import { Navigate, useParams } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import HomeLoading from "../components/laoding/HomeLoading";
import Error from "../components/Error";
import ProductCard from "../components/product/productCard";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  if (!category) {
    return <Navigate to={"/"} />;
  }

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setProducts([]);
      const response = await axiosInstance.get(
        `/product/list?category=${category}`
      );
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      const errorMsg = error.response?.data.message ?? error.message;
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootLayout>
      <div>
        <p className="mx-auto w-[90vw] pt-6 font-extrabold text-xl">
          Searching for {category}
        </p>
        {loading && <HomeLoading />}
        {error && !loading && <Error error={error} />}
        {products.length == 0 && !loading && !error && (
          <Error error="Products not found" />
        )}
        {products.length && (
          <div className="p-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:w-[90vw] mx-auto">
            {products.map((item) => (
              <ProductCard {...item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default Category;
