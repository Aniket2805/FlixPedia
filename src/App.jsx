import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './index.css'
import { AppContext } from './context/contextAPI';
import Feed from './components/Feed';
import CategoryPage from './components/CategoryPage';
import MoiveDetail from './components/MoiveDetail';
import SearchResultPage from './components/SearchResultPage';
import Watchlist from './components/Watchlist';
import LoginPage from './components/LoginPage';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            theme='dark'
          />
          <Header></Header>
          <Routes>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/movies/:category" element={<CategoryPage />}></Route>
            <Route path="/searchResult/:searchQuery" element={<SearchResultPage />}></Route>
            <Route path="/movie/:id" element={<MoiveDetail />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/movies/watchlist" element={<Watchlist />}></Route>
          </Routes>
          <span className='bg-black text-white py-3 text-center text-base sm:text-lg font-semibold'>Copyright © 2023 | Flixpedia</span>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
