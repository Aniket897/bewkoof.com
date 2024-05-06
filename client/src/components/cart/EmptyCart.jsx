const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-4 min-h-[500px]">
      <div>
        <img
          src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
          alt=""
          className="w-[100px]"
        />
      </div>
      <p>Nothing in bag</p>
      <button className="border border-[#fdd835] p-3 rounded-md  text-[#fdd835] w-[400px] mt-7 max-w-[90vw]">
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
