import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "../customicons/SearchIcon";
import { useSelector, useDispatch } from "react-redux";
import { searchResult } from "../redux/productSlice";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";

const SearhBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allProducts } = useSelector((state) => state.products);

  const searchedProduct = allProducts?.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      searchTerm !== ""
    );
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm !== "") {
      dispatch(searchResult(searchedProduct));
    }

    if (searchTerm === "") {
      navigate("/");
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search-results");
    // setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className='search-label'>
      <label>
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
