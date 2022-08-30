import React, { useEffect, useState } from "react";
import DeleteIcon from "../customicons/DeleteIcon";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import { BsArrowLeft } from "react-icons/bs";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  clearCart,
} from "../redux/cart/cartSlice";

import { makePayment, reset } from "../redux/wallet/walletSlice";

const AddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.wallet
  );

  const [productId, setProductId] = useState(cart?.cartItems[0]?._id);
  const [amount, setAmount] = useState(cart?.cartTotalAmount + 500);

  // console.log(productId);
  // console.log(amount);

  const data = {
    productId,
    amount,
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (isSuccess) {
    //   // toast.success("Payment successful");
    //   navigate("/success");
    // }
  }, [isError, isSuccess, message, dispatch, navigate]);

  const handlePayment = () => {
    dispatch(reset());
    dispatch(makePayment(data));
    dispatch(clearCart());
    navigate("/success");

    setProductId("");
    setAmount("");
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
    dispatch(getTotals());
  };
  return (
    <section className='cart'>
      {cart.cartItems.length === 0 ? (
        <div className='cart__empty'>
          <h2>Your cart is currently empty</h2>
          <div className='cart__shopping'>
            <Link to='/'>
              <BsArrowLeft style={{ color: "white" }} />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className='cart__flex'>
          <div className='cart__a'>
            <p className='cart__header'>My cart</p>
            {cart.cartItems.map((cartItem) => (
              <React.Fragment key={cartItem._id}>
                <div className='cart__details'>
                  <div className='cart__parent'>
                    <img
                      src={cartItem.avaterMainUrl}
                      alt='cart'
                      className='cart__photo'
                    />
                    <div className='cart__info'>
                      <p className='cart__text'>{cartItem.title}</p>
                      <p className='cart__price'>
                        NGN {cartItem.price * cartItem.cartQuantity}
                      </p>
                      <div className='cart__buttons'>
                        <button
                          className='cart__btn'
                          onClick={() => handleDecreaseCart(cartItem)}
                        >
                          -
                        </button>
                        <p className='cart__unit'>{cartItem.cartQuantity}</p>
                        <button
                          className='cart__btn'
                          onClick={() => handleIncreaseCart(cartItem)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className='cart__icon'
                    onClick={() => handleRemoveFromCart(cartItem)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className='cart__b'>
            <div className='cart__container'>
              <div className='cart__total'>
                <div className='cart__subtotal'>
                  <p className='cart__sub'>Total Item Cost</p>
                  <p className='cart__sum'>NGN{cart.cartTotalAmount}</p>
                </div>
                <div className='buynow__subtotal'>
                  <p className='cart__sub'>Delivery fee</p>
                  <p className='cart__sum'>NGN 500</p>
                </div>
              </div>
              <hr className=' cart__line' />

              <div className='cart__grand'>
                <div className='cart__due'>
                  <p className='cart__fee'>Total Due</p>
                  <p className='cart__fee'>NGN {cart.cartTotalAmount + 500}</p>
                </div>

                <div className='cart__button'>
                  {!isLoading && (
                    <button className='cart__pay-btn' onClick={handlePayment}>
                      Pay {cart.cartTotalAmount + 500}
                    </button>
                  )}
                  {isLoading && (
                    <button
                      className='cart__pay-btn'
                      disabled
                      onClick={handlePayment}
                    >
                      Paying...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddToCart;
