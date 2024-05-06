import { Suspense, lazy } from "react";
import HomeLoading from "../components/laoding/HomeLoading";
import RootLayout from "../layouts/RootLayout";
const MainSection = lazy(() => import("../components/home/MainSection"));
const Home = () => {
  return (
    <RootLayout>
      <Suspense fallback={<HomeLoading />}>
        <MainSection />
      </Suspense>
    </RootLayout>
  );
};

export default Home;
