import React, { useEffect } from "react";
import Banner from "../components/Banner";
import ProductImage from "../components/ProductImage";
import Error from "../pages/Error";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../redux/productSlice";

const Home = () => {
  const [data, isPending, error] = useFetch(
    "https://gallery-one-app.herokuapp.com/api/getAllProduct"
  );

  const dispatch = useDispatch();
  const { allProducts, searchedProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchAllProducts(data));
  }, [data]);

  return (
    <header className='header'>
      <Banner className='banner' />
      <section className='offers'>
        <p className='offers__heading'>Best Offers </p>
        {isPending && <Spinner />}
        {error && <Error />}
        <div className='offers__card'>
          {(searchedProducts || allProducts)?.map((product) => (
            <Link to={`/product-details/${product._id}`} key={product._id}>
              <ProductImage
                ImageSource={product.avaterMainUrl}
                title={product.title}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Home;
