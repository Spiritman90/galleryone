import axios from "axios";

const FUND_URL =
  "https://gallery-one-app.herokuapp.com/api/transaction/initialize";

//Fund Wallet
const fundWallet = async (data) => {
  const response = await axios.post(FUND_URL, data);
  console.log(response);
  if (response.data) {
    localStorage.setItem("walletBalance", JSON.stringify(response.data));
  }
  return response.data;
};

const walletService = {
  fundWallet,
};

export default walletService;
