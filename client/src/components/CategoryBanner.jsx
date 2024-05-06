import { categories } from "../data";

const CategoryBanner = () => {
  return (
    <div className="overflow-x-scroll px-5 no-scrollbar">
      <div className="flex items-center justify-center gap-x-3 w-[90%] mx-auto py-2 pl-[70px]">
        {categories.map((item, index) => (
          <div key={index} className="flex-1 uppercase">
            <p style={{ whiteSpace: "nowrap" }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
