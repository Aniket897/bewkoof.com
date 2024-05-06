const Footer = () => {
  return (
    <div className="bg-black text-white p-9 flex flex-col gap-y-6">
      <div>
        <p className="text-[#FDD835] text-2xl font-bold">Bewkoof</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p className="text-[#FDD835] pb-3">Customer service</p>
          <ul>
            <li>contact us</li>
            <li>track order</li>
            <li>Return order</li>
            <li>Cancel order</li>
          </ul>
        </div>
        <div>
          <p className="text-[#FDD835] pb-3">company</p>
          <ul>
            <li>About us</li>
            <li>We're Hiring</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <p className="text-[#FDD835] pb-3">conenct with us</p>
          <ul>
            <li>4.7 People like this</li>
            <li>1M Followers</li>
          </ul>
        </div>
        <div>
          <p className="text-[#FDD835] pb-3">Keep up to date</p>
          <div>
            <input
              className="p-1 bg-transparent border-b border-b-[#FDD835]"
              type="text"
            />
            <button className="bg-[#FDD835] text-black py-1 px-3">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p>15 Days return policy*</p>
          <p>Cash on delivery*</p>
        </div>
        <div>
          <p className="text-[#FDD835] pb-3">Download the app</p>
          <div>
            <img
              src="https://images.bewakoof.com/web/app_android_v1.png"
              alt=""
            />
            <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
          </div>
        </div>
        <div>
          <p className="text-[#FDD835] pb-3">100% secure payment</p>
          <img
            src="https://images.bewakoof.com/web/secure-payments-image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
