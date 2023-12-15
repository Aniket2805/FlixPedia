import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";
import Loader from "../shared/loader";
import Logo from "../images/Logo.png";
import Logo2 from "../images/Logo2.png";
import { IoIosSearch } from "react-icons/io";
import { RiMenuUnfoldFill, RiArrowDropDownLine } from "react-icons/ri";
import { CgClose, CgProfile } from "react-icons/cg";
import { Dropdown } from "./Dropdown";
import { BsBookmarkStar } from "react-icons/bs";
import { ImHome3, ImProfile } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
import { BiCategoryAlt, BiLogOut } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import "../index.css";
import { auth } from "../context/firebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const { loading, setloading, setSelectCategories } = useContext(Context);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const notify = (msg) => {
    toast(msg);
  };
  const searchQueryHandle = (event) => {
    if (
      (event?.key === "Enter" || event.type == "click") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  const close = () => {
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("navbar").style.left = "-300px";
  };
  return (
    <div className="flex justify-between text-xl sticky z-[999] top-0 left-0 items-center bg-black text-white px-2 md:px-16 py-3 shadow-2xl">
      {loading && <Loader></Loader>}
      <div className="flex font-semibold lg:items-center flex-col lg:flex-row">
        <div className="flex items-center">
          <span
            className="lg:hidden mr-1 sm:mr-3 text-3xl"
            id="menue"
            onClick={() => {
              document.getElementById("navbar").style.left = "0px";
              document.getElementById("navbar").style.boxShadow =
                "0 40px 60px rgb(65, 64, 64)";
              document.getElementById("close").style.display = "flex";
            }}
          >
            <RiMenuUnfoldFill></RiMenuUnfoldFill>
          </span>
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-[50px] w-[150px] hidden lg:flex" />
            <img src={Logo2} className="h-[30px] lg:hidden" />
          </Link>
        </div>
        <div id="navbar">
          <ul className="flex lg:hidden flex-col justify-start lg:justify-center lg:items-center">
            <li
              className="hidden font-bold"
              id="close"
              onClick={() => {
                close();
              }}
            >
              <CgClose></CgClose>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center"
                onClick={() => {
                  close();
                }}
              >
                <img src={Logo2} className="h-[30px] lg:hidden" />
              </Link>
            </li>
            {auth.currentUser != null && (
              <li
                className="relative flex items-center"
                onClick={() => {
                  close();
                }}
              >
                <CgProfile className="text-2xl" />
                <Link to="/" className="px-2">
                  {auth?.currentUser?.displayName}
                </Link>
              </li>
            )}
            <li
              className="relative flex items-center"
              onClick={() => {
                close();
              }}
            >
              <ImHome3 className="text-2xl" />
              <Link
                to="/"
                onClick={() => {
                  setSelectCategories("now_playing");
                  close();
                }}
                className="px-2"
              >
                Home
              </Link>
            </li>
            <li
              className="relative flex items-center"
              onClick={() => {
                close();
              }}
            >
              <MdOutlineCategory className="text-2xl" />
              <Link to="/movies/top_rated" className="px-2">
                Top Rated
              </Link>
            </li>
            <li
              className="relative flex items-center"
              onClick={() => {
                close();
              }}
            >
              <BiCategoryAlt className="text-2xl" />
              <Link to="/movies/popular" className="px-2">
                Popular
              </Link>
            </li>
            <li
              className="relative flex items-center"
              onClick={() => {
                close();
              }}
            >
              <IoTime className="text-2xl" />
              <Link to="/movies/upcoming" className="px-2">
                Upcoming
              </Link>
            </li>
            {auth.currentUser != null && (
              <li
                className="relative flex items-center"
                onClick={() => {
                  close();
                }}
              >
                <BsBookmarkStar className="text-2xl" />
                <Link to="/movies/watchlist" className="px-2">
                  Watchlist
                </Link>
              </li>
            )}
            {auth.currentUser == null ? (
              <li
                className="relative flex items-center"
                onClick={() => {
                  close();
                }}
              >
                <CgProfile className="text-2xl" />
                <Link to="/signin" className="px-2">
                  Login
                </Link>
              </li>
            ) : (
              <li
                className="relative flex items-center"
                onClick={() => {
                  close();
                }}
              >
                <BiLogOut className="text-2xl" />
                <Link
                  to="/"
                  className="px-2"
                  onClick={() => {
                    setloading(true);
                    signOut(auth).then(() => {
                      setloading(false);
                      notify("Successfully Logged out");
                    });
                    setOpen(!open);
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="group flex h-8 md:h-10 md:ml-10 md:pl-5 bg-white/90 rounded-l-3xl group-focus-within:border-white md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-black text-xl"></IoIosSearch>
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-base md:text-lg text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[400px]"
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyUp={searchQueryHandle}
            value={searchQuery}
          ></input>
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex  items-center justify-center border-l-0 rounded-r-3xl bg-white/[0.1]"
          onClick={searchQueryHandle}
        >
          <IoIosSearch className="text-white text-xl"></IoIosSearch>
        </button>
      </div>
      <div className="hidden lg:flex items-center">
        <Link
          to={auth?.currentUser == null ? "/signin" : "/"}
          onClick={() => setOpen(false)}
        >
          <span>
            <ul className="dropdownItem flex items-center font-semibold my-2 cursor-pointer transition-colors hover:text-yellow-400">
              <li className="text-3xl mr-1">
                <CgProfile />
              </li>
              <li className="text-xl">
                {auth?.currentUser == null
                  ? "Login"
                  : auth?.currentUser?.displayName}
              </li>
            </ul>
          </span>
        </Link>
        <RiArrowDropDownLine
          onClick={() => setOpen(!open)}
          className="text-3xl font-extrabold cursor-pointer"
        ></RiArrowDropDownLine>
        <div className={`dropdown-menue ${!open ? "inactive" : "active"}`}>
          <Link to="/" onClick={() => setOpen(!open)}>
            <Dropdown img={<ImHome3 />} text="Home"></Dropdown>
          </Link>
          <Link to="movies/top_rated" onClick={() => setOpen(!open)}>
            <Dropdown img={<MdOutlineCategory />} text="Top Rated"></Dropdown>
          </Link>
          <Link to="movies/popular" onClick={() => setOpen(!open)}>
            <Dropdown img={<BiCategoryAlt />} text="Popular"></Dropdown>
          </Link>
          <Link to="movies/upcoming" onClick={() => setOpen(!open)}>
            <Dropdown img={<IoTime />} text="Upcoming"></Dropdown>
          </Link>
          {auth?.currentUser != null && (
            <Link to="movies/watchlist" onClick={() => setOpen(!open)}>
              <Dropdown img={<BsBookmarkStar />} text="Watchlist"></Dropdown>
            </Link>
          )}
          {auth?.currentUser != null ? (
            <Link
              to="/"
              onClick={() => {
                setloading(true);
                signOut(auth).then(() => {
                  setloading(false);
                  notify("Successfully Logged out");
                });
                setOpen(!open);
              }}
            >
              <Dropdown img={<TbLogout />} text="Logout"></Dropdown>
            </Link>
          ) : (
            <Link to="/signin" onClick={() => setOpen(!open)}>
              <Dropdown img={<CgProfile />} text="Login"></Dropdown>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
