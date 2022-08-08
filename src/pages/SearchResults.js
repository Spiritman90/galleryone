import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductImage from "../components/ProductImage";

const SearchResults = () => {
  const { searchedProducts } = useSelector((state) => state.products);

  return (
    <section className='search-result'>
      <div className='search-result__lead'>
        <h2 className='search-result__heading'>Best deals for you</h2>
        <p className='search-result__text'>
          {searchedProducts?.length - 1}+ <span>results for</span> "
          {searchedProducts?.[0]?.title}"
        </p>
      </div>
      <div className='search-result__products'>
        {searchedProducts?.map((product) => (
          <div className='search-result__wrapped' key={product._id}>
            <Link to={`/product-details/${product._id}`}>
              <ProductImage
                title={product.title}
                price={product.price}
                ImageSource={product.avaterMainUrl}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
