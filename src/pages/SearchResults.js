import React from "react";
import { useSelector } from "react-redux";
import ProductImage from "../components/ProductImage";

const SearchResults = () => {
  const { searchedProducts } = useSelector((state) => state.products);

  console.log(searchedProducts);
  return (
    <section className='search-result'>
      <div className='search-result__lead'>
        <h2 className='search-result__heading'>Search Results</h2>
        <p className='search-result__text'>
          4,400+ <span>results for</span> “Macbook Pro”
        </p>
      </div>
      <div className='search-result__products'>
        {searchedProducts?.map((product) => (
          <div className='search-result__wrapped' key={product._id}>
            <ProductImage
              title={product.title}
              price={product.price}
              ImageSource={product.avaterMainUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
