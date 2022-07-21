import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "../customicons/SearchIcon";
import { useSelector, useDispatch } from "react-redux";
import { searchResult } from "../redux/productSlice";
import { useNavigate } from "react-router";

const SearhBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allProducts } = useSelector((state) => state.products);

  const searchedProduct = allProducts?.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(searchResult(searchedProduct));
  }, [searchTerm, dispatch, searchedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='search-label'>
        <input
          type='text'
          placeholder='Search'
          className='search-input'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
        />
        <SearchIcon className='search-icon' />
      </label>
    </form>
  );
};

export default SearhBar;
