import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [value, setValue] = useState<string>(() => localStorage.getItem('search') ?? '');

  useEffect(() => {
    localStorage.setItem('search', value);
  }, [value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className="box">
      <div className="searchBar">
        <i>
          <BsSearch />
        </i>
        <input type="text" onChange={handleChange} placeholder="Search bar" value={value} />
      </div>
    </div>
  );
};

export default SearchBar;
