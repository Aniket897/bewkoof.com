import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    navigate(`/search?q=${text}`);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="relative border-r-2 pr-3 max-lg:hidden"
    >
      <Search color="gray" className="absolute left-3 top-2" size={20} />
      <input
        type="text"
        placeholder="Search by product, category or collection "
        className="p-3 rounded-md w-[300px] text-xs bg-neutral-100 pl-[40px] outline-[#fdd835]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
