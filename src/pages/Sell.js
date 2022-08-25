import React, { useState, useEffect } from "react";
// import file from "../assets/file.jpg";
import Verify from "./Verify";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { itemUpload, reset } from "../redux/sell/sellSlice";

const Sell = () => {
  const [changeView, setChangeView] = useState(0);
  const [data, setData] = useState({
    item: "",
    price: "",
    category: "",
    description: "",
  });

  const inputChangehandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [images, setImages] = useState([]);
  // const [item, setItem] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { items, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.sell
  );

  // const data = {
  //   images,
  //   item,
  //   price,
  //   category,
  //   description,
  // };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Upload is successful");
    }

    dispatch(reset());
  }, [items, isError, isSuccess, message, dispatch]);

  const onImageHandler = (e) => {
    const [file] = e.target.files;

    setImages((prev) => [...prev, file]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image));
    const dataKeys = Object.keys(data);

    dataKeys.forEach((key) => formData.append(key, data[key]));

    // if (images.length === 5) {
    //   setData((prev) => ({ ...prev, images: [...images] }));
    // }

    dispatch(itemUpload(formData));
    // dispatch(reset());
    // console.log(images);
    // console.log(item);
    // console.log(price);
    // console.log(category);
    // console.log(description);
  };

  return (
    <>
      {changeView === 0 && (
        <div className='sell__information'>
          <div className='sell__padding'>
            <h4 className='sell__heading'>Item Information</h4>
            <div className='sell__container'>
              {/* <ImageUploading
                multiple={true}
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey='data_url'
                acceptType={["jpg", "gif", "png"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <>
                    <div className='upload__image-wrapper'>
                      <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        {" "}
                        Click or Drop here
                      </button>
                      &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button>
                    </div>
                    <div className='image-container'>
                      {imageList.map((image, index) => (
                        <div key={index}>
                          <div className='image-item'>
                            <img src={image.data_url} alt='' width='100' />
                          </div>
                          <div className='image-item__btn-wrapper'>
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </ImageUploading> */}
            </div>
            <div className='sell__form'>
              <form onSubmit={handleSubmit} className='sell__block'>
                <label className='sell__labels'>
                  <span>Add Image</span>
                  <input
                    type='file'
                    placeholder='add image'
                    className='sell__inputs'
                    onChange={onImageHandler}
                    // value={item}
                  />
                </label>
                <label className='sell__labels'>
                  <input
                    type='text'
                    placeholder='Item name'
                    className='sell__inputs'
                    onChange={inputChangehandler}
                    value={data.item}
                    name='item'
                  />
                </label>

                <label className='sell__labels'>
                  <input
                    type='text'
                    pattern='^[0-9]*$'
                    placeholder='Item price'
                    className='sell__inputs'
                    onChange={inputChangehandler}
                    value={data.price}
                    name='price'
                  />
                </label>
                <label className='sell__labels'>
                  <input
                    type='text'
                    placeholder='Item category'
                    className='sell__inputs'
                    onChange={inputChangehandler}
                    value={data.category}
                    name='category'
                  />
                </label>

                <label className='sell__labels'>
                  <textarea
                    placeholder='Item description'
                    className='sell__textarea'
                    onChange={inputChangehandler}
                    value={data.description}
                    name='description'
                  ></textarea>
                </label>
              </form>
              <div className='sell__next'>
                {/* <button className='sell__btn' onClick={() => setChangeView(1)}>
                  Next
                </button> */}
                {!isLoading && (
                  <button
                    className='sell__btn'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Upload
                  </button>
                )}
                {isLoading && (
                  <button
                    disabled
                    className='sell__btn'
                    type='submit'
                    // onClick={handleSubmit}
                  >
                    Uploading...
                  </button>
                )}
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
