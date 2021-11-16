import { SearchIcon } from "src/icons";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [input, setInput] = useState<string | number>("");
  const handleSearch = () => {
    router.push(`/search/${input}`);
  };
  return (
    <div className="relative">
      <input
        className="w-36 p-3 bg-red-500 rounded-lg placeholder-white sm:w-32 xl:w-48"
        placeholder="Seach here..."
        onChange={(e) => setInput(e.target.value)}
        required
      />

      <button className="absolute bottom-4 right-3 w-5 h-5" onClick={handleSearch}>
        <SearchIcon  />
      </button>
    </div>
  );
};

Search.propTypes = {};

export default Search;
