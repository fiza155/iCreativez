import "./App.css";

// import Navbar from "./FirstTask/components/Navbar";
// import Footer from "./FirstTask/components/Footer";
import Login from "./dashboaard/pages/Login";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SignUp from "./dashboaard/pages/SignUp";
import Dashboard from "./dashboaard/pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./dashboaard/App/store";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    // <>
    //   {/* <Navbar />
    //   <br />
    //   <br />
    //   <Footer /> */}
    //   </>

    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {" "}
            <Route exact path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route exact path="/register" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
