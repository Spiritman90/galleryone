import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AuthWrapper from "./components/AuthWrapper";
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
import ForgotPasswordTwo from "./pages/ForgotPasswordTwo";
import EmailSuccess from "./pages/EmailSuccess";
import EmailFailure from "./pages/EmailFailure";
import AddToCart from "./pages/AddToCart";
import EmailVerification from "./pages/EmailVerification";
import { useSelector } from "react-redux";
import SearchResults from "./pages/SearchResults";
import PaymentConfirmation from "./pages/PaymentConfirmation";
// import { useState } from "react";

function App() {
  const { user } = useSelector((state) => state.auth);
  // const user = localStorage.getItem("token");
  // const [userSignedIn, setUserSignedIn] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route
              path='/liveauction'
              element={user ? <LiveAuction /> : <Navigate to='/signup' />}
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/success' element={<Success />} />
            <Route
              path='/payment-confirmation'
              element={<PaymentConfirmation />}
            />
            <Route path='/search-results' element={<SearchResults />} />
            <Route
              path='/product-details/:id'
              element={user ? <ProductDetails /> : <Navigate to='/signup' />}
            />
            <Route
              path='/buy-now'
              element={user ? <BuyNow /> : <Navigate to='/signup' />}
            />
            <Route
              path='/cart'
              element={user ? <AddToCart /> : <Navigate to='/signup' />}
            />

            <Route path='/sell' element={<SellerWrapper />}>
              <Route
                path='sell_form'
                element={user ? <Sell /> : <Navigate to='/signup' />}
              />
              <Route
                path='profile'
                element={user ? <Personal /> : <Navigate to='/signup' />}
              />
              <Route
                path='history'
                element={user ? <History /> : <Navigate to='/signup' />}
              />
              <Route
                path='inbox'
                element={user ? <Inbox /> : <Navigate to='/signup' />}
              />
            </Route>
          </Route>
          <Route element={<AuthWrapper />}>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgotpasswordone' element={<ForgotPasswordOne />} />
            <Route path='/forgotpasswordtwo' element={<ForgotPasswordTwo />} />
            <Route path='/email-verification' element={<EmailVerification />} />
            <Route path='/email-success' element={<EmailSuccess />} />
            <Route path='/email-failure' element={<EmailFailure />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
