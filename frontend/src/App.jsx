//
// import Home from "./home/Home";
import Header from "./home/containers/Header";
import Footer from "./home/containers/Footer";
// import ProductDetails from "./productDetails/ProductDetails";
import { Outlet } from "react-router-dom";
import "./App.css";
import SignUp from "./signup/SignUp";
import { useState } from "react";
const App = () => {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <>
      <Header />
      {/* <ProductDetails /> */}

      {isSignUp === true ?<> <Outlet />    <Footer /> </> : <SignUp setSignUp= {setSignUp} />}

  
    </>
  );
};

export default App;
