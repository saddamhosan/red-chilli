import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart/Cart';
import Breakfast from './Component/Home/Breakfast';
import Dinner from './Component/Home/Dinner';
import Home from './Component/Home/Home';
import Lunch from './Component/Home/Lunch';
import SignIn from './Component/Register/SignIn';
import SignUp from './Component/Register/SignUp';
import RequireAuth from './Component/RequireAuth';
import Footer from './Component/Shared/Footer';
import Header from './Component/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Breakfast />} />
          <Route path="dinner" element={<Dinner />} />
          <Route path="lunch" element={<Lunch />} />
        </Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
