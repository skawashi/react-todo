import React from "react";

const SearchWord = (props) => {
  const { searchWord, onChange } = props;
  return (
    <div>
      <input
        placeholder="Search Keyword"
        value={searchWord}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchWord;
