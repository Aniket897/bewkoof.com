import EmptyCart from "../components/cart/EmptyCart";
import { useCart } from "../contexts/cartContext";
import RootLayout from "../layouts/RootLayout";

const Cart = () => {
  const cart = useCart();
  return (
    <RootLayout>
      {cart.cart.length == 0 && <EmptyCart />}
      {cart.cart.length > 0 && (
        <div className="sm:w-[80vw] sm:mx-auto sm:pt-7">
          <p className="text-2xl font-extrabold py-4">Cart:</p>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.cart.map((item) => (
                  <tr className="bg-white" key={item.product._id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.product.name}
                    </th>
                    <td className="px-6 py-4">{item.count}</td>
                    <td className="px-6 py-4">{item.product.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold text-gray-900">
                  <th scope="row" className="px-6 py-3 text-base">
                    Total
                  </th>
                  <td className="px-6 py-3">
                    {cart.cart.reduce((acc, item) => acc + item.count, 0)}
                  </td>
                  <td className="px-6 py-3">
                    {cart.cart.reduce(
                      (acc, item) => acc + item.count * item.product.price,
                      0
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </RootLayout>
  );
};

export default Cart;
