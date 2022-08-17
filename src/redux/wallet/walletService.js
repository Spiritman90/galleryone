import { makeGetRequest, makePostRequest, makePutRequest } from "../../service";

//Fund Wallet
const fundWallet = async (data) => {
  const response = await makePostRequest("transaction/initialize", data);

  return response;
};

//confirm payment
const confirmPayment = async (reference) => {
  const response = await makePostRequest("transaction/verify", reference);

  return response;
};

// Get balance
const getBalance = async () => {
  const response = await makeGetRequest("walletBalance");

  return response;
};
const makePayment = async (data) => {
  const response = await makePutRequest("buyProduct", data);

  return response;
};

const walletService = {
  fundWallet,
  confirmPayment,
  getBalance,
  makePayment,
};

export default walletService;
