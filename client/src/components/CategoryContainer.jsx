const CategoryContainer = ({ images = [] }) => {
  return (
    <div className="overflow-x-scroll no-scrollbar">
      <div className="flex items-center justify-evenly w-full mx-auto">
        {images.map((item, index) => (
          <img src={item} key={index} alt="" />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
