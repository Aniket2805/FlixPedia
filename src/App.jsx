import React from 'react';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import './index.css'
import { AppContext } from './context/contextAPI';
import Feed from './components/Feed';
import CategoryPage from './components/CategoryPage';
import MoiveDetail from './components/MoiveDetail';
import SearchResultPage from './components/SearchResultPage';
function App() {
  return (
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header></Header>
            <Routes>
              <Route path="/" element={<Feed/>}></Route>
              <Route path="/movies/:category" element={<CategoryPage/>}></Route>
              <Route path="/searchResult/:searchQuery" element={<SearchResultPage/>}></Route>
              <Route path="/movie/:id" element={<MoiveDetail/>}></Route>
            </Routes>
            <span className='bg-black text-white pb-5 text-center text-lg sm:text-xl font-semibold'>Copyright © 2023 | Flixpedia</span>
          </div>
        </BrowserRouter>
      </AppContext>
  )
}

export default App
