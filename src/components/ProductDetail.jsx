import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/contextAPI";
import { fetchDataFromAPI } from "../utils/api";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetail = () => {
  const { setloading } = useContext(Context);
  const { id } = useParams();
  const [productDetail, setproductDetail] = useState([]);
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const fetchProductDetail = (id) => {
    setloading(true);
    fetchDataFromAPI(`product-details?product_id=${id}&country=in&language=en`)
      .then((response) => {
        setproductDetail(response?.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    fetchProductDetail(id);
  }, []);
  return (
    <div className="py-[40px] px-[20px] sm:px-[40px] lg:px-[80px] ">
      <section id="pro_detail" className="flex flex-col md:flex-row">
        <div className="pro_image mr-[20px] lg:mr-[50px] w-[100%] md:w-[60%]">
          <img
            src={productDetail?.product?.product_photos[0]}
            id="mainimg"
            className="w-full h-[18rem] min-[400px]:h-[26rem] min-[500px]:h-[35rem] object-contain"
            alt=""
          />
          <div className="small_img_group grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6">
            {productDetail?.product?.product_photos.map((photo) => {
              return (
                <div className="smallimg" key={photo}>
                  <img
                    src={photo}
                    className="small_img h-[4rem] min-[400px]:h-[6rem] sm:h-[8rem] object-contain"
                    onClick={() => {
                      document.getElementById("mainimg").src = photo;
                    }}
                    width="100%"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="single_pro_detail md:w-[50%]">
          <h6>Home / Shop</h6>
          <h4 className="text-3xl lg:text-4xl font-semibold font-mono">
            {productDetail?.product?.product_title}
          </h4>
          <h5 className="text-xl font-semibold text-green-800">
            {productDetail?.product?.product_rating}
            <i className="fas fa-star text-lg text-yellow-500"></i>
          </h5>
          <h2 className="my-2">{productDetail?.product?.offer?.price}</h2>
          <div className="py-[20px]">
            <i
              className="fas fa-minus px-4 cursor-pointer"
              onClick={handleDecrement}
            ></i>
            <input
              id={productDetail?.product?.product_id}
              type="number"
              value={count}
              readOnly
              className="w-[60px] outline-none border-2 px-2 py-1 rounded-md text-center"
            />
            <i
              className="fas fa-plus px-4 cursor-pointer"
              onClick={handleIncrement}
            ></i>
          </div>
          <button className="normal w-[100%] sm:w-[13rem] flex items-center justify-center shadow-xl">
            <FaCartShopping className="mr-2" /> Add To Cart
          </button>
          <button className="normal buy w-[100%] sm:w-[13rem] shadow-xl">
            Buy Now
          </button>
          <h3 className="text-3xl font-semibold font-mono">Description</h3>
          <span>{productDetail?.product?.product_description}</span>
        </div>
      </section>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="mt-5 md:w-[50%]">
          <p className="text-2xl mb-4 text-green-900 font-semibold font-mono">
            Product Details
          </p>
          {productDetail?.product_details &&
            Object.entries(productDetail?.product_details).map(
              ([key, value]) => {
                return (
                  <p key={key}>
                    <span className="text-green-900 font-semibold">
                      {key + " : "}
                    </span>
                    {value}
                  </p>
                );
              }
            )}
        </div>
        <div className="mt-5 md:w-[50%]">
          <p className="text-2xl mb-4 text-green-900 font-semibold font-mono">
            Product Specification
          </p>
          {productDetail?.product_specs &&
            Object.entries(productDetail?.product_specs).map(([key, value]) => {
              return (
                <p key={key}>
                  <span className="text-green-900 font-semibold">
                    {key + " : "}
                  </span>
                  {value}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
