import React, { useContext, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Context } from "../context/contextAPI";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/Product";
import header from "../images/header.jpg";
import delivery from "../images/delivery.jpg";
import saving from "../images/saving.jpg";
import shop from "../images/shop.jpg";
import support from "../images/support.jpg";
import { fetchDataFromAPI } from "../utils/api";
const Feed = () => {
  const { loading, setloading } = useContext(Context);
  const [phone, setPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const fetchData = (query) => {
    setloading(true);
    fetchDataFromAPI(`search?q=${query}&country=in&language=en&limit=10`)
      .then((response) => {
        if (query === "latest phone") {
          setPhone(response?.data);
        } else if (query === "latest laptop") {
          setLaptop(response?.data);
        } else if (query === "men summer collection") {
          setMen(response?.data);
        } else {
          setWomen(response?.data);
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
    },
    semiDesktop: {
      breakpoint: { max: 1440, min: 1080 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1080, min: 730 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 730, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    fetchData("latest phone");
    fetchData("latest laptop");
    fetchData("men summer collection");
    fetchData("women summer collection");
  }, []);
  return (
    <div>
      <div>
        <img src={header} className="max-[450px]:h-[200px] w-full" />
      </div>
      <section id="feature" className="py-[40px] px-[30px] lg:px-[80px]">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{ justifyContent: "center" }}
        >
          <div className="m-2 lg:m-4 cursor-pointer bg-white rounded-xl">
            <div className="fe-box">
              <img src={delivery} alt="" />
              <h6 style={{ backgroundColor: "#fddde4" }}>Free Shiping</h6>
            </div>
          </div>
          <div className="m-2 lg:m-4 cursor-pointer bg-white rounded-xl">
            <div className="fe-box">
              <img src={saving} alt="" />
              <h6 style={{ backgroundColor: "#c7abf3" }}>Online Order</h6>
            </div>
          </div>
          <div className="m-2 lg:m-4 cursor-pointer bg-white rounded-xl">
            <div className="fe-box">
              <img src={shop} alt="" />
              <h6 style={{ backgroundColor: "#83f5c3" }}>Save Money</h6>
            </div>
          </div>
          <div className="m-2 lg:m-4 cursor-pointer bg-white rounded-xl">
            <div className="fe-box">
              <img src={support} alt="" />
              <h6 style={{ backgroundColor: "aqua" }}>24/7 Support</h6>
            </div>
          </div>
        </div>
      </section>
      <section
        id="product1"
        className="pb-[40px] px-0 sm:px-[20px] lg:px-[80px] text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold pb-3">
          Featured Products
        </h2>
        <p className="text-xl sm:text-2xl font-bold text-black/80">
          Latest Smart Phones
        </p>
        <SkeletonTheme baseColor="#D0D4CA" highlightColor="#7D7C7C">
          <Carousel
            responsive={responsive}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            className=""
          >
            {loading
              ? Array.from({ length: 13 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    duration={2}
                    borderRadius="1rem"
                    width="16rem"
                    height="25rem"
                  ></Skeleton>
                ))
              : phone?.map((item) => {
                  return <Product key={item.product_id} product={item} />;
                })}
          </Carousel>
        </SkeletonTheme>
        <p className="text-xl sm:text-2xl font-bold text-black/80 mt-6">
          Latest Laptops
        </p>
        <SkeletonTheme baseColor="#D0D4CA" highlightColor="#7D7C7C">
          <Carousel
            responsive={responsive}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            className=""
          >
            {loading
              ? Array.from({ length: 13 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    duration={2}
                    borderRadius="1rem"
                    width="16rem"
                    height="25rem"
                  ></Skeleton>
                ))
              : laptop?.map((item) => {
                  return <Product key={item.product_id} product={item} />;
                })}
          </Carousel>
        </SkeletonTheme>
      </section>
      <section id="banner">
        <h4>Repair Services</h4>
        <h2 className="sm:leading-[70px] font-semibold">
          Up to <span>75% Off</span>- All t-Shirts & Accessories
        </h2>
        <button className="normal bg-white">Explore More</button>
      </section>
      <section
        id="product1"
        className="py-[40px] px-0 sm:px-[20px] lg:px-[80px] text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold pb-3">
          Summer Sale is Here
        </h2>
        <p className="text-xl sm:text-2xl font-bold text-black/80">
          Men's Collection
        </p>
        <SkeletonTheme baseColor="#D0D4CA" highlightColor="#7D7C7C">
          <Carousel
            responsive={responsive}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            className=""
          >
            {loading
              ? Array.from({ length: 13 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    duration={2}
                    borderRadius="1rem"
                    width="16rem"
                    height="25rem"
                  ></Skeleton>
                ))
              : men?.map((item) => {
                  return <Product key={item.product_id} product={item} />;
                })}
          </Carousel>
        </SkeletonTheme>
        <p className="text-xl sm:text-2xl font-bold text-black/80 mt-6">
          Women's Collection
        </p>
        <SkeletonTheme baseColor="#D0D4CA" highlightColor="#7D7C7C">
          <Carousel
            responsive={responsive}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            className=""
          >
            {loading
              ? Array.from({ length: 13 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    duration={2}
                    borderRadius="1rem"
                    width="16rem"
                    height="25rem"
                  ></Skeleton>
                ))
              : women?.map((item) => {
                  return <Product key={item.product_id} product={item} />;
                })}
          </Carousel>
        </SkeletonTheme>
      </section>
      <section id="sm-banner" className="pb-[40px] px-[30px] lg:px-[80px]">
        <div className="banner-box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The best classic dress is on sale at ShpSwift</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box">
          <h4>Spring/Summer</h4>
          <h2>upcoming season</h2>
          <span>The best classic dress is on sale at ShopSwift</span>
          <button className="white">Learn More</button>
        </div>
      </section>
      <section id="banner3">
        <div className="banner-box">
          <h2>SEASON SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box">
          <h2>NEW JEANS </h2>
          <h3>Spring/Summer 2023</h3>
        </div>
        <div className="banner-box">
          <h2>T-Shirts</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
    </div>
  );
};

export default Feed;
