import React from "react";

const FilterBox = ({ filter, setFilter }) => {
  return (
    <input
      className="filter-box"
      type="text"
      placeholder="Filter by name..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default FilterBox;
