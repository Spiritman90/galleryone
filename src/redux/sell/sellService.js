import axios from "axios";

const CREATE_URL =
  "https://gallery-one-app.herokuapp.com/api/multiple/createProduct";

//Sell an item
const itemUpload = async (data) => {
  const response = await axios.post(CREATE_URL, data);
  if (response.data) {
    localStorage.setItem("item", JSON.stringify(response.data));
  }

  // console.log(response);
  return response.data;
};

const sellService = {
  itemUpload,
};

export default sellService;
