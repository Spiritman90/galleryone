import React from "react";
import Banner from "../components/Banner";
import ProductImage from "../components/ProductImage";
import Error from "../pages/Error";
import Cart from "../customicons/Cart";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, isPending, error] = useFetch(
    "https://fakestoreapi.com/products"
  );

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <header className='header'>
      <Banner />
      <section className='offers'>
        <p className='offers__heading'>Best Offers </p>
        <Link to='/cart' className='parent'>
          <div className='bag-container'>
            <Cart className='bag' />
            <span className='bag-quantity'>
              <span className='bag-unit'>{cartTotalQuantity}</span>
            </span>
          </div>
        </Link>
        {isPending && <Spinner />}
        {error && <Error />}
        <div className='offers__card'>
          {data &&
            data.map((product) => (
              <Link to={`/product-details/${product.id}`} key={product.id}>
                <ProductImage
                  ImageSource={product.image}
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
