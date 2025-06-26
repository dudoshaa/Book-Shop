import React from "react";
import SearchInput from "./SearchInput";

function Search({ query, setQuery }) {
  return (
    <div className="w-full px-4 mb-6">
      <SearchInput query={query} onQueryChange={setQuery} />
    </div>
  );
}

export default Search;
