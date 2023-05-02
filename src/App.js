import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Footer from "./Components/Share/Footer";
import Navbar from "./Components/Share/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Share/NotFound";
import Home from "./Components/Pages/Home/Home/Home";
import RequireAuth from "./Components/Login/RequireAUth";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import AddItem from "./Components/Pages/Dashboard/AddItem/AddItem";
import ManageItems from "./Components/Pages/Dashboard/ManageItem/ManageItems";
import Buy from "./Components/Pages/Home/Buy/Buy";
import Bucks from "./Components/Pages/Home/Bucks/Bucks";
import BookBooks from "./Components/Pages/Dashboard/BookBooks/BookBooks";
import BuyBooks from "./Components/Pages/Dashboard/BuyBooks/BuyBooks";

function App() {
  return (
    <div>
      {/* <CreateAccount /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/buy/:id" element={<Buy />}></Route>
        <Route path="/bucks/:id" element={<Bucks />}></Route>
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

      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
