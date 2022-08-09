import axios from "axios";

const FUND_URL =
  "https://gallery-one-app.herokuapp.com/api/transaction/initialize";

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

  return response.data;
};

const walletService = {
  fundWallet,
};

export default walletService;
