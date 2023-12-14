
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Pages/Signin/Signin';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Signup from './Pages/Signup/Signup';
function App() {
  return (
    <div className="app">
    <Navbar/>
    <Signup/>
  </div>
  );
}

export default App;
