import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import ScrollToTop from "./Components/ScrollToTop";
import AboutUsPage from './Pages/AboutUs/AboutUsPage';
import PolicyPage from './Pages/Policy/Policy';
// import  Contact from "./Pages/Contactpage/Contactpage";
// import Productpage from "./Pages/Productpage/Productpage";
function App() {
  const [load] = useState(true);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
