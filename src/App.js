import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import PaymentSuccess from './components/PaymentSuccess';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
