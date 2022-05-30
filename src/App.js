import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AuthWrapper from "./components/AuthWrapper";
import { useState } from "react";
import Error from "./pages/Error";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={userSignedIn ? <Layout /> : <Navigate to='/login' />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<AuthWrapper />}>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
