import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAUth';
import AddItem from "./Components/Pages/Dashboard/AddItem/AddItem";
import BookBooks from './Components/Pages/Dashboard/BookBooks/BookBooks';
import BuyBooks from './Components/Pages/Dashboard/BuyBooks/BuyBooks';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageItems from './Components/Pages/Dashboard/ManageItem/ManageItems';
import Bucks from "./Components/Pages/Home/Bucks/Bucks";
import Buy from './Components/Pages/Home/Buy/Buy';
import Home from './Components/Pages/Home/Home/Home';
import SentContact from './Components/Pages/Home/HomeSection/Contact/SentContact';
import Navbar from './Components/Share/Navbar';
import NotFound from './Components/Share/NotFound';

function App() {
  return (
    <div>
      {/* <CreateAccount /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route
          path="/buy/:id"
          element={
            <RequireAuth>
              <Buy />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/bucks/:id"
          element={
            <RequireAuth>
              <Bucks />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/sentContact"
          element={
            <RequireAuth>
              <SentContact />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* Dashboard start */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<AddItem />} />
          <Route path="manageItem" element={<ManageItems />} />
          <Route path="bookBooks" element={<BookBooks />} />
          <Route path="buyBooks" element={<BuyBooks />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
