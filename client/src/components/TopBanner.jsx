const TopBanner = () => {
  return (
    <div className="bg-neutral-200 max-md:hidden ">
      <div className="w-[85%] mx-auto flex justify-between px-16 text-[10px] py-2 text-neutral-600">
        <ul className="flex items-center gap-x-6">
          <li>Offers</li>
          <li>Fanbook</li>
          <li>📱Download App</li>
          <li>TriBe Membership</li>
        </ul>
        <ul className="flex items-center gap-x-6">
          <li>Contact Us</li>
          <li>Track Order</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBanner;
