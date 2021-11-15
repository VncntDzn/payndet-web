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
    <div className="relative" onClick={() => console.log(23)}>
      <SearchIcon
        onClick={handleSearch}
        className="absolute bottom-3 right-3"
      />
      <input
        className="w-32 p-3 bg-red-500 rounded-lg placeholder-white md:w-48"
        placeholder="Seach here..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
