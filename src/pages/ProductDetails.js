import React, { useState } from "react";
import ProductImage from "../components/ProductImage";
import detail1 from "../assets/Detail1.png";
import detail2 from "../assets/Detail2.jpg";
import detail3 from "../assets/Detail3.jpg";
import detail4 from "../assets/Detail4.jpg";
import detail5 from "../assets/Detail5.jpg";
import sim1 from "../assets/sim1.png";
import sim2 from "../assets/sim2.png";
import sim3 from "../assets/sim3.png";
import sim4 from "../assets/sim4.png";
import Modal from "../components/Modal";
import Bid from "../components/Bid";
import ReviewCard from "../components/ReviewCard";
import ReviewYellow from "../customicons/ReviewYellow";
import ReviewGray from "../customicons/ReviewGray";
import { useNavigate } from "react-router";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [showBidModaL, setShowBidModal] = useState(false);
  const hideModal = (ele) => {
    ele === "bid" ? setShowBidModal(!Bid) : setShowBidModal(showBidModaL);
  };

  return (
    <section className='pdetails'>
      <div className='pdetails__container'>
        <div className='pdetails__photo'>
          <img src={detail1} alt='detail' className='pdetails__image' />
          <p className='pdetails__text'>Macbook Pro 2020</p>
          <p className='pdetails__price'>NGN 950,000</p>
        </div>

        <div className='pdetails__gallery'>
          <div className='pdetails__item'>
            <img src={detail2} alt='item' className='pdetails__photo' />
          </div>
          <div className='pdetails__item'>
            <img src={detail3} alt='item' className='pdetails__photo' />
          </div>
          <div className='pdetails__item'>
            <img src={detail4} alt='item' className='pdetails__photo' />
          </div>
          <div className='pdetails__item'>
            <img src={detail5} alt='item' className='pdetails__photo' />
          </div>

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

            <button className='pdetails__add'>Add to cart</button>
          </div>
        </div>
      </div>

      <div className='pdetails__description'>
        <div className='pdetails__lead'>
          <h3 className='pdetails__describe'>Description</h3>
        </div>
        <div className='pdetails__body'>
          <p className='pdetails__info'>
            Supercharged for pros The most powerful MacBook Pro ever is here.
            With the blazing-fast M1 Pro or M1 Max chip — the first Apple
            silicon designed for pros — you get groundbreaking performance and
            amazing battery life. Add to that a stunning Liquid Retina XDR
            display, the best camera and audio ever in a Mac notebook, and all
            the ports you need. The first notebook of its kind, this MacBook Pro
            is a beast.
          </p>
        </div>
      </div>

      <div className='pdetails__similars'>
        <h3 className='pdetails__products'>Similar Products</h3>

        <div className='pdetails__goods'>
          <ProductImage
            ImageSource={sim1}
            details='Apple IPad Mini 6 Wi-Fi + 
            Cellular - 256Gb - Space Grey 
             - 2021'
            price='535,000'
          />
          <ProductImage
            ImageSource={sim2}
            details='Apple MacBook Air 13" 
            Intel Core I7 16GB Ram 
            512GB 2020 Model - Gold'
            price='750,000'
          />
          <ProductImage
            ImageSource={sim3}
            details='Hp Envy 15 X360 11th Gen, 
            Intel Core I7 (16GB RAM,1TB 
            SSD) - FP Reader -Wins 11'
            price='779,200'
          />
          <ProductImage
            ImageSource={sim4}
            details='Asus Zenbook 14 
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
