import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AuthWrapper from "./components/AuthWrapper";
import { useState } from "react";
import Error from "./pages/Error";
import About from "./pages/About";
import LiveAuction from "./pages/LiveAuction";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Sell from "./pages/Sell";
import SellerWrapper from "./components/SellerWrapper";
import Personal from "./pages/Personal";
import History from "./pages/History";
import Inbox from "./pages/Inbox";
import Success from "./pages/Success";
import ForgotPasswordOne from "./pages/ForgotPasswordOne";
import ProductDetails from "./pages/ProductDetails";
import BuyNow from "./pages/BuyNow";
// import ForgotPasswordTwo from "./pages/ForgotPasswordTwo";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={userSignedIn ? <Layout /> : <Navigate to='/login' />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
          <Route path='/liveauction' element={<LiveAuction />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/success' element={<Success />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/buy-now' element={<BuyNow />} />

          <Route path='/sell' element={<SellerWrapper />}>
            <Route path='sell_form' element={<Sell />} />
            <Route path='profile' element={<Personal />} />
            <Route path='history' element={<History />} />
            <Route path='inbox' element={<Inbox />} />
          </Route>
        </Route>
        <Route element={<AuthWrapper />}>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpasswordone' element={<ForgotPasswordOne />} />
          {/* <Route path='/forgotpasswordtwo' element={<ForgotPasswordTwo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
