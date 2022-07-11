import React, { useState } from "react";
import ProductImage from "../components/ProductImage";
import sim2 from "../assets/sim2.png";
import sim3 from "../assets/sim3.png";
import sim4 from "../assets/sim4.png";
import Modal from "../components/Modal";
import Bid from "../components/Bid";
import ReviewCard from "../components/ReviewCard";
import ReviewYellow from "../customicons/ReviewYellow";
import ReviewGray from "../customicons/ReviewGray";
import { useNavigate, useParams } from "react-router";
import useObject from "../hooks/useObject";
import Spinner from "../components/Spinner";
import Error from "../pages/Error";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBidModaL, setShowBidModal] = useState(false);
  const hideModal = (ele) => {
    ele === "bid" ? setShowBidModal(!Bid) : setShowBidModal(showBidModaL);
  };

  const dispatch = useDispatch();

  const [data, isPending, error] = useObject(
    `https://fakestoreapi.com/products/${id}`
  );

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    // navigate("/cart");
  };

  return (
    <section className='pdetails'>
      <div className='pdetails__container'>
        {isPending && <Spinner />}
        {error && <Error />}
        <div className='pdetails__image-container'>
          <img src={data.image} alt='detail' className='pdetails__image' />
          <p className='pdetails__text'>{data.title}</p>
          <p className='pdetails__price'>NGN {data.price}</p>
        </div>
        <img src={data.image} alt='item' className='pdetails__photo' />
        <img src={data.image} alt='item' className='pdetails__photo' />
        <img src={data.image} alt='item' className='pdetails__photo' />
        <img src={data.image} alt='item' className='pdetails__photo' />
        <div className='pdetails__buttons'>
          <button
            className='pdetails__buybtn'
            onClick={() => navigate("/buy-now")}
          >
            Buy Now
          </button>
          <button
            className='pdetails__bidbtn'
            onClick={() => setShowBidModal(!showBidModaL)}
          >
            Make a bid
          </button>
          {showBidModaL && (
            <Modal comp={"bid"} hideModal={hideModal}>
              <Bid />
            </Modal>
          )}

          <button
            className='pdetails__add'
            onClick={() => handleAddToCart(data)}
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className='pdetails__description'>
        <div className='pdetails__lead'>
          <h3 className='pdetails__describe'>Description</h3>
        </div>
        <div className='pdetails__body'>
          <p className='pdetails__info'>{data.description}</p>
        </div>
      </div>

      <div className='pdetails__similars'>
        <h3 className='pdetails__products'>Similar Products</h3>

        <div className='pdetails__goods'>
          <ProductImage
            ImageSource={sim4}
            title='Apple IPad Mini 6 Wi-Fi + 
            Cellular - 256Gb - Space Grey 
             - 2021'
            price='535,000'
          />
          <ProductImage
            ImageSource={sim2}
            title='Apple MacBook Air 13" 
            Intel Core I7 16GB Ram 
            512GB 2020 Model - Gold'
            price='750,000'
          />
          <ProductImage
            ImageSource={sim3}
            title='Hp Envy 15 X360 11th Gen, 
            Intel Core I7 (16GB RAM,1TB 
            SSD) - FP Reader -Wins 11'
            price='779,200'
          />
          <ProductImage
            ImageSource={sim4}
            title='Asus Zenbook 14 
            Intel Core I7-10510U, 
            16GB RAM 512GB SSD Wins 10'
            price='629,900'
          />
        </div>
      </div>

      <div className='pdetails__reviews'>
        <div className='pdetails__comment'>
          <h3 className='pdetails__rave'>Reviews</h3>
        </div>
        <div className='pdetails__reviewed'>
          <ReviewCard
            name='Ada Babalola'
            starSrc={<ReviewYellow />}
            statement='This is a fantastic product, I love that I bought it with a pen
              and it was delivered altogether.'
          />
          <ReviewCard
            name='Alex Chuka'
            starSrc={<ReviewGray />}
            statement='I love my macbook pro, as a designer and illustrator, I can
             do whatever I want with great ease.'
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
