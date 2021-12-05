import React from "react";

const SearchWord = (props) => {
  const { keyWord, onChange } = props;
  return (
    <section className="common-area">
      <input
        className="keyword-area"
        type="text"
        placeholder="Search Keyword"
        value={keyWord}
        onChange={onChange}
      />
    </section>
  );
};

export default SearchWord;
