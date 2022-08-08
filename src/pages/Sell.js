import React, { useState } from "react";
import file from "../assets/file.jpg";
import Verify from "./Verify";

const Sell = () => {
  const [changeView, setChangeView] = useState(0);

  return (
    <>
      {changeView === 0 && (
        <div className='sell__information'>
          <div className='sell__padding'>
            <h4 className='sell__heading'>Item Information</h4>
            <div className='sell__container'>
              <div className='sell__border'>
                <p className='sell__upload'>Upload File</p>
                <div className='sell__dotted'>
                  <form className='sell__form'>
                    <div className='sell__image'>
                      <img src={file} alt='file' className='sell__file' />
                      <p className='sell__drag'>Drag and Drop here</p>
                      <p className='sell__drag'>Or</p>
                      <p className='sell__drag'>Browse</p>
                    </div>
                    <input
                      type='file'
                      accept='image/*'
                      style={{ display: "none" }}
                      required
                    />
                  </form>
                </div>
                <button className='sell__button'>Upload Photo</button>
              </div>

              {/* <div className='sell__radio'>
                <form className='sell__check'>
                  <div className='sell__item'>
                    <input
                      type='radio'
                      value='regular'
                      name='auction'
                      style={{ accentColor: "#eb861e" }}
                    />
                    <label className='sell__label'>Regular</label>
                    <p className='sell__text'>
                      Your item will be verified and shared with everyone{" "}
                    </p>
                  </div>
                  <div className='sell__item'>
                    <input
                      type='radio'
                      value='live-auction'
                      name='auction'
                      style={{ accentColor: "#eb861e" }}
                    />
                    <label className='sell__label'>Live Auction</label>
                    <p className='sell__text'>
                      {" "}
                      Your item will be considered by a panel for live auction{" "}
                    </p>
                  </div>
                </form>
              </div> */}
            </div>
            <div className='sell__form'>
              <form className='sell__block'>
                <label className='sell__labels'>
                  <input
                    type='text'
                    placeholder='Item name'
                    className='sell__inputs'
                  />
                </label>

                <label className='sell__labels'>
                  <input
                    type='text'
                    placeholder='Item price'
                    className='sell__inputs'
                  />
                </label>
                <label className='sell__labels'>
                  <input
                    type='text'
                    placeholder='Item category'
                    className='sell__inputs'
                  />
                </label>

                <label className='sell__labels'>
                  <textarea
                    placeholder='Item description'
                    className='sell__textarea'
                  ></textarea>
                </label>
              </form>
              <div className='sell__next'>
                <button className='sell__btn' onClick={() => setChangeView(1)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {changeView === 1 && <Verify />}
    </>
  );
};

export default Sell;
