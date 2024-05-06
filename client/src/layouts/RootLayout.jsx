import { Toaster } from "react-hot-toast";
import CategoryBanner from "../components/CategoryBanner";
import TopBanner from "../components/TopBanner";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = ({ children, showTopBanner = true, showCategoryBanner }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="sticky top-0 left-0 z-20 bg-white">
        {showTopBanner && <TopBanner />}
        <Navbar />
        {showCategoryBanner && <CategoryBanner />}
      </div>
      {children}
      <div className="mt-[100px]">
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
