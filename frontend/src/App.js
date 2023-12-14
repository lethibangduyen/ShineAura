import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import Homepage from './Pages/Homepage/Homepage';
import Policy from './Pages/Policy/Policy'; // Đảm bảo bạn import trang Policy từ đúng đường dẫn

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <Navbar />
      <Policy/>

      {/* <Route path="/" element={<Homepage />} /> */}
      {/* <Route path="/Policy" element={<Policy />} /> */}

      <Footer />

    </div>
  );
}

export default App;
