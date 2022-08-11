import axios from "axios";

const FUND_URL =
  "https://gallery-one-app.herokuapp.com/api/transaction/initialize";
const CONFIRM_PAYMENT =
  "https://gallery-one-app.herokuapp.com/api/transaction/verify";
const GET_BALANCE = "https://gallery-one-app.herokuapp.com/api/walletBalance";

//Fund Wallet
const fundWallet = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(FUND_URL, data, config);
  if (response.data) {
    localStorage.setItem("walletBalance", JSON.stringify(response.data));
  }
  // console.log(response.data);
  return response.data;
};

//confirm payment
const confirmPayment = async (token, reference) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(CONFIRM_PAYMENT, reference, config);
  if (response.data) {
    localStorage.setItem("payment", JSON.stringify(response.data));
  }

  return response.data;
};

//Get balance
// const getBalance = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.get(GET_BALANCE, config);
//   if (response.data) {
//     localStorage.setItem("userBalance", JSON.stringify(response.data));
//   }
//   console.log(response.data);
//   return response.data;
// };

const walletService = {
  fundWallet,
  confirmPayment,
  // getBalance,
};

export default walletService;
