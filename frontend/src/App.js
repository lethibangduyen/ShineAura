import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UserDetail from "./Pages/UserDetail/UserDetail";
import ScrollToTop from "./Components/ScrollToTop";
import Signin from './Pages/Signin/Signin';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Signup from './Pages/Signup/Signup';
// import Homepage from './Pages/Homepage/Homepage';
// import AboutUsPage from './Pages/AboutUs/AboutUsPage';
// import PolicyPage from './Pages/Policy/Policy';
// import  Contact from "./Pages/Contactpage/Contactpage";
// import Payment from "./Pages/Payment/Payment";
// import Productpage from "./Pages/Productpage/Productpage";

function App() {
  const [load] = useState(true);
  return (
    <Router>
      <Navbar/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>

          <Route path="/" element={<UserDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          {/* <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/policy" element={<PolicyPage />} /> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;