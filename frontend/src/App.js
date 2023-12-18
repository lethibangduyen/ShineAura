import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
// import Signup from './Pages/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import ScrollToTop from "./Components/ScrollToTop";
// import Signin from './Pages/Signin/Signin';
// import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
// import Policy from './Pages/Policy/Policy';
function App() {
    const [load] = useState(true);
    return (
        <Router>
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      );
    }
export default App;
