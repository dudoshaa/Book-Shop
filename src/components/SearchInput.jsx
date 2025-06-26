import React from "react";

function SearchInput({ query, onQueryChange }) {
  return (
    <label className="input flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
      <svg
        className="h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </g>
      </svg>
      <input
        type="search"
        className="grow outline-none"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </label>
  );
}

export default SearchInput;
