import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import { AppContext } from "./context/contextAPI";
import Feed from "./components/Feed";
import SearchResultPage from "./components/SearchResultPage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Copyright from "./components/Copyright";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
          />
          <Header></Header>
          <Routes>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/aboutus" element={<About />}></Route>
            <Route path="/contactus" element={<Contact />}></Route>
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResultPage />}
            ></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
          <Footer></Footer>
          <Copyright className="py-3 text-center text-base sm:text-lg font-semibold"></Copyright>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
