import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "../customicons/SearchIcon";
import { useSelector, useDispatch } from "react-redux";
import { searchResult } from "../redux/productSlice";
import { useNavigate, useLocation } from "react-router";
// import { toast } from "react-toastify";

const SearhBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allProducts } = useSelector((state) => state.products);
  const { pathname } = useLocation();

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
  }, [searchTerm]);

  const onBlurHandler = () => {
    if (pathname === "/search-results" && searchTerm === "") {
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search-results");
  };

  return (
    <form onSubmit={handleSubmit} className='search-label'>
      <label>
        <input
          type='text'
          placeholder='Search'
          className='search-input'
          onBlur={onBlurHandler}
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
