import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../context/contextAPI';
import Loader from '../shared/loader';
import Logo from '../images/Logo.png'
import Logo2 from '../images/Logo2.png'
import { IoIosSearch } from "react-icons/io"
import { RiMenuUnfoldFill } from "react-icons/ri"
import { CgClose } from "react-icons/cg"
const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const { loading, mobileMenue, setSelectCategories, setMobileMenue } = useContext(Context);
  const navigate = useNavigate();
  const mobileMenueToggle = () => {
    setMobileMenue(!mobileMenue);
  }
  const searchQueryHandle = (event) => {
    if ((event?.key === "Enter" || event.type == "click") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  }
  return (
    <div className='flex justify-between text-xl sticky z-[999] top-0 left-0 items-center bg-black text-white px-2 sm:px-10 py-3'>
      {loading && <Loader></Loader>}
      <div className='flex font-semibold lg:items-center flex-col lg:flex-row'>
        <div className='flex items-center'>
          <span className='lg:hidden mr-1 sm:mr-3 text-3xl' id='menue' onClick={() => {
            document.getElementById('navbar').style.left = "0px";
            document.getElementById('navbar').style.boxShadow = "0 40px 60px rgb(65, 64, 64)";
            document.getElementById('close').style.display="flex";
          }}><RiMenuUnfoldFill></RiMenuUnfoldFill></span>
          <Link to='/' className='flex items-center'>
            <img src={Logo} className='h-[50px] w-[150px] hidden lg:flex' />
            <img src={Logo2} className='h-[30px] lg:hidden' />
          </Link>
        </div>
        <div id='navbar'>
          <ul className='flex lg:flex-row flex-col justify-start lg:justify-center lg:items-center'>
            <li className='hidden font-bold' id='close' onClick={()=>{
              document.getElementById('navbar').style.boxShadow = "none";
              document.getElementById('navbar').style.left = "-300px";
            }}><CgClose></CgClose></li>
            <li>
              <Link to='/' className='flex items-center'>
                <img src={Logo2} className='h-[30px] lg:hidden' />
              </Link>
            </li>
            <li className='relative'>
              <Link to='/' onClick={() => {
                setSelectCategories("now_playing");
              }} className='lg:px-2 lg:ml-3'>Home</Link>
            </li>
            <li className='relative'><Link to='/movies/top_rated' className='lg:px-2'>Top Rated</Link></li>
            <li className='relative'><Link to='/movies/popular' className='lg:px-2'>Popular</Link></li>
            <li className='relative'><Link to='/movies/upcoming' className='lg:px-2'>Upcoming</Link></li>
            <li className='relative'><Link to='/movies/watchlist' className='lg:px-2'>Watchlist</Link></li>
          </ul>
        </div>
      </div>
      <div className='flex'>
        <div className='group flex h-8 md:h-10 md:ml-10 md:pl-5 bg-white/90 rounded-l-3xl group-focus-within:border-white md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
          <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
            <IoIosSearch className='text-black text-xl'></IoIosSearch>
          </div>
          <input type='text' className='bg-transparent outline-none text-base md:text-xl text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[400px]' onChange={(e) => setsearchQuery(e.target.value)} onKeyUp={searchQueryHandle} value={searchQuery}>
          </input>
        </div>
        <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex  items-center justify-center border-l-0 rounded-r-3xl bg-white/[0.1]' onClick={searchQueryHandle} >
          <IoIosSearch className='text-white text-xl'></IoIosSearch>
        </button>
      </div>
    </div>
  )
}

export default Header