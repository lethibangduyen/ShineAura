import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UserDetail from "./Pages/UserDetail/UserDetail";

function App() {
  const [load] = useState(true);
  return (
    <Router>
      <Navbar/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<UserDetail />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;