import { FaSearch } from "react-icons/fa";
import { BiBell, BiEnvelope } from "react-icons/bi";

const SearchField = () => {
  return (
    <div className="flex items-center py-2 pl-4 ml-3 space-x-3 ">
      <div className="flex items-center px-1 py-2 space-x-4 bg-pink-100 rounded-full l">
        <FaSearch
          style={{ color: "rgba(105, 112, 119, 1)" }}
          className="mr-1"
        />

        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-gray-400 placeholder-gray-400 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center px-4 py-2 space-x-4 bg-pink-100 rounded-full l">
        <BiBell className="text-xl text-gray-700 cursor-pointer" />
        <BiEnvelope className="text-xl text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchField;
