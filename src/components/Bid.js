import React from "react";
import useObject from "../hooks/useObject";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import Error from "../pages/Error";

const Bid = () => {
  const { id } = useParams();
  const [data, isPending, error] = useObject(
    `https://gallery-one-app.herokuapp.com/api/getProductById/${id}`
  );

  return (
    <section className='bid'>
      <div className='bid__lead'>
        {isPending && <Spinner />}
        {error && <Error />}
        <h2 className='bid__heading'>Make a bid for {data?.title}</h2>
        <div className='bid__message'>
          <p className='bid__text'>
            This item has a minimum value of NGN {data?.price}
          </p>
        </div>

        <div className='bid__amount'>
          <form className='bid__form'>
            <label className='bid__label'>
              <input
                type='text'
                placeholder='Enter an amount'
                className='bid__input'
              />
            </label>
            <div className='bid__button'>
              <button className='bid__btn' type='submit'>
                Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bid;
