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
        </Route>
        <Route element={<AuthWrapper />}>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
