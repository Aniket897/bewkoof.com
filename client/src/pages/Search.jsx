import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import RootLayout from "../layouts/RootLayout";
import ProductCard from "../components/product/productCard";
import Error from "../components/Error";
import HomeLoading from "../components/laoding/HomeLoading";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q");

  useEffect(() => {
    fetchProducts();
  }, [q]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setProducts([]);
      const response = await axiosInstance.get(`/product/search/${q}`);
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
          Searching for '{q}'
        </p>
        {loading && <HomeLoading />}
        {error && <Error error={error} />}
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

export default Search;
