import { SwiperSlide } from "swiper/react";
import PrimarySlider from "../PrimarySlider";
import SingleImageBanner from "../SingleImageBanner";
import CategoryContainer from "../CategoryContainer";
import Section from "../Section";
import Slider from "../Slider";

import {
  homeMainSliderImages,
  mainCategories,
  trendingCategorieaGirls,
  trendingCategoriesBoys,
} from "../../data";
import TrendingProducts from "./TrendingProducts";

const MainSection = () => {
  return (
    <div>
      <div className="mt-4">
        <PrimarySlider>
          {homeMainSliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img loading="lazy" src={image} alt="" />
            </SwiperSlide>
          ))}
        </PrimarySlider>
      </div>
      <div className="overflow-x-scroll mt-7">
        <div className="flex items-center justify-center gap-x-3 md:gap-x-5">
          {mainCategories.map((item, index) => (
            <img className="w-[120px]" key={index} src={item} />
          ))}
        </div>
      </div>
      <SingleImageBanner img="https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif" />
      <Section title={"Trending categories"}>
        <CategoryContainer images={trendingCategoriesBoys} />
        <CategoryContainer images={trendingCategorieaGirls} />
      </Section>
      <SingleImageBanner
        img={
          "https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop---journey-1714055282.png"
        }
      />
      <Section title={"Bewakoof Originals"}>
        <Slider>
          {homeMainSliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img loading="lazy" src={image} alt="" />
            </SwiperSlide>
          ))}
        </Slider>
      </Section>
      <Section title={"Trending products"}>
        <TrendingProducts />
      </Section>
      {/* TOO HOT TO BE MISSED */}
      <Section title={"Bewakoof Originals"}>
        <div className="grid grid-cols-2 gap-4 w-[95vw] mx-auto">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/ezgif-1-560088d03f--4--1714543290.gif"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-superloose-tees--3--1714543289.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/DESKTOP---MID-SIZE-BANNER---twice-as-nice---7--1713937209.png"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/DESKTOP---MID-SIZE-BANNER-ezgif-com-optimize--3--1714392907.gif"
            alt=""
          />
        </div>
      </Section>
      {/* CATEGORY TO BAG */}
      <Section title={"Category to bag"}>
        <CategoryContainer images={trendingCategoriesBoys} />
      </Section>
      <SingleImageBanner
        img={
          "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
        }
      />
      <SingleImageBanner
        img={
          "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
        }
      />
    </div>
  );
};

export default MainSection;
