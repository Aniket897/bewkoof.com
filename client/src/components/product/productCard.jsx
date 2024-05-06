import { Link } from "react-router-dom";

const ProductCard = ({
  thumbnailImage,
  name,
  manufacturer_brand,
  price,
  _id,
}) => {
  return (
    <Link to={`/product/${_id}`}>
      <div className="w-full border shadow-sm rounded-md overflow-hidden cursor-pointer">
        <div>
          <img
            src={`https://images.bewakoof.com/t320/${thumbnailImage}`}
            alt=""
          />
        </div>
        <div className="p-2 text-xs">
          <p>{manufacturer_brand}</p>
          <p className="text-neutral-600">{name.slice(0, 17)}..</p>
          <p className="text-base">₹{price}.00</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
