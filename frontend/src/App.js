import './App.css';
// import Signup from './Pages/Signup/Signup';
// import Navbar from './Components/Navbar/Navbar';
// import Homepage from './Pages/Homepage/Homepage';
<<<<<<< Updated upstream
import Signin from './Pages/Signin/Signin';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
function App() {
    return (
        // <Homepage />
        // <Navbar />
        // <Signup />
        // <ForgotPassword />
        // <Login />
        <Signin />
    );
=======
import Payment from './Pages/Payment/Payment'; // Đảm bảo bạn import trang Policy từ đúng đường dẫn

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <Navbar />
      {/* <Policy/> */}
      <Payment/>


      {/* <Footer /> */}

    </div>
  );
>>>>>>> Stashed changes
}

export default App;
