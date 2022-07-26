import axios from "axios";

const FUND_URL = "";

//Fund Wallet
const fundWallet = async (amount) => {
  const response = await axios.post(FUND_URL, amount);
  if (response.data) {
    localStorage.setItem("walletBalance", JSON.stringify(response.data));
  }
  return response.data;
};

const walletService = {
  fundWallet,
};

export default walletService;
