import axios from "axios";

const FUND_URL =
  "https://gallery-one-app.herokuapp.com/api/transaction/initialize";
// "http://localhost:5000/api/transaction/initialize";

//Fund Wallet
const fundWallet = async (token, data) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const response = await axios.post({
    url: FUND_URL,
    data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.data) {
    localStorage.setItem("walletBalance", JSON.stringify(response.data));
  }
  return response.data;
};

const walletService = {
  fundWallet,
};

export default walletService;

// const response = await axios({
//   url: 'https://api.paystack.co/transaction/initialize', method: "post",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearer ${process.env.PAYSTACK_SECRETKEY}`
//   },
