import React from 'react';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
    </div>
  );
};

export default SearchBar;
