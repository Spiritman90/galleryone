import React from "react";
import Banner from "../components/Banner";
import ProductImage from "../components/ProductImage";
import offer from "../assets/offers.jpg";
import shine from "../assets/shining.jpg";
import aso from "../assets/aso.jpg";
import nike from "../assets/nike.jpg";
import apple from "../assets/apple.jpg";
import Applemac from "../assets/Applemac.jpg";
import hp from "../assets/hp.jpg";
import asus from "../assets/asus.jpg";
import samsung from "../assets/samsung.jpg";
import shirt from "../assets/shirt.jpg";
import samnew from "../assets/samnew.jpg";
import spider from "../assets/spider.jpg";
import Cart from "../customicons/Cart";

const Home = () => {
  return (
    <header className='header'>
      <Banner />
      <Cart />

      <section className='offers'>
        <p className='offers__heading'>Best Offers </p>
        <div className='offers__card'>
          <ProductImage
            ImageSource={offer}
            details='Macbook Pro 2020'
            price='950, 000'
          />
          <ProductImage
            ImageSource={shine}
            details='Shining Magenta Sequins -
            Aso Ebi - 5 Yards'
            price='20,500'
          />
          <ProductImage
            ImageSource={aso}
            details='Aso Ebi Silk African Lace 
            Fabric 2021 - 5 Yards'
            price='20,500'
          />
          <ProductImage
            ImageSource={nike}
            details='Nike MENS TRAINING SHOES'
            price='62,500'
          />
          <ProductImage
            ImageSource={apple}
            details='Apple IPad Mini 6 Wi-Fi + 
            Cellular - 256Gb - Space Grey 
            - 2021'
            price='535,000'
          />
          <ProductImage
            ImageSource={Applemac}
            details='Macbook Pro 2020'
            price='750,000'
          />
          <ProductImage
            ImageSource={hp}
            details='Hp Envy 15 X360 11th Gen, 
             Intel Core I7 (16GB RAM,1TB 
            SSD) - FP Reader -Wins 11'
            price='779,200'
          />
          <ProductImage
            ImageSource={asus}
            details='Asus Zenbook 14 
            Intel Core I7-10510U, 
            16GB RAM 512GB SSD Wins 10'
            price='629, 900'
          />
          <ProductImage
            ImageSource={samsung}
            details='Samsung Galaxy Tab A 8.0", 
             32GB, 5100mAh, 4G LTE
             GSM SM-T295 (Black)'
            price='112,000'
          />
          <ProductImage
            ImageSource={shirt}
            details='Nike The Nike Polo Mens
            Gold Space Dot Slim Fit Polo'
            price='29,250'
          />
          <ProductImage
            ImageSource={samnew}
            details='Samsung Galaxy A53, 
            6GB/128GB ROM, 64MP Quad 
            Camera, 5000mAh Battery'
            price='112,000'
          />
          <ProductImage
            ImageSource={spider}
            details='Marvels Spider-Man Miles 
             Morales (PS5)'
            price='19,500'
          />
        </div>
      </section>
    </header>
  );
};

export default Home;
