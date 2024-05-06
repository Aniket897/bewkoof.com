import { Heart, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import Profile from "../Profile";
import { useCart } from "../../contexts/cartContext";
import SearchBox from "../SearchBox";

const mainNav = [
  {
    title: "MEN",
    href: "/men",
  },
  {
    title: "WOMEN",
    href: "/women",
  },
  {
    title: "MOBILE COVERS",
    href: "/mobile covers",
  },
];

const Navbar = () => {
  const auth = useAuth();
  const cart = useCart();

  return (
    <div className=" py-3 border-b text-xs">
      <div className="w-[95%] lg:w-[80%] mx-auto flex justify-between">
        <div className="flex gap-x-8 items-center">
          <Link to={"/"}>
            <img
              className="w-[150px] -mt-2"
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              alt=""
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-5">
            {mainNav.map((item, index) => (
              <li className="relative group" key={index}>
                <Link to={item.href}>{item.title}</Link>
                <div className="absolute inset-x-0 -bottom-4 h-1 bg-[#fdd835] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-x-8">
          <SearchBox />
          <div className="flex gap-x-5">
            {!auth.token && (
              <button>
                <Link to={"/login"} className="max-lg:hidden">
                  Login
                </Link>
              </button>
            )}
            {auth.token && <Profile />}
            <button>
              <Link to={"/wishlist"}>
                <Heart size={20} />
              </Link>
            </button>
            <button className="relative">
              <Link to={"/cart"}>
                <ShoppingBag size={20} />
              </Link>
              <p className="w-4 h-4 text-[10px] rounded-full absolute -right-2 text-white top-0 bg-red-500">
                {cart.cart.length}
              </p>
            </button>
            <button className="lg:hidden">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
