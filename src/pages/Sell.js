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
