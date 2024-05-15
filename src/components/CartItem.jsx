import React, { useEffect, useState } from "react";
import { app, auth, db } from "../context/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
const CartItem = ({ product }) => {
  const [count, setCount] = useState(product?.count);
  const naviagte = useNavigate();
  const notify = (msg) => {
    toast(msg);
  };
  const deleteProduct = (product) => {
    const cartRef = doc(db, "cart", auth?.currentUser?.uid);
    updateDoc(cartRef, {
      [product?.product_id]: deleteField(),
    });
    notify("Product deleted from cart");
  };
  const updateCount = () => {
    const cartRef = doc(db, "cart", auth?.currentUser?.uid);
    const data = { [product?.product_id]: { ["count"]: count } };
    setDoc(cartRef, data, { merge: true });
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const parsePrice = (priceString) => {
    const cleanedPriceString = priceString.replace(/[^\d.]/g, ""); // Remove non-numeric characters
    return parseFloat(cleanedPriceString);
  };
  useEffect(() => {
    updateCount();
  }, [count]);

  return (
    <div
      className="pb-[20px] sm:pb-[40px] sm:px-[30px] lg:px-[80px]"
      key={product?.product_id}
    >
      <div className="flex flex-col sm:flex-row my-[20px] mx-[20px] shadow-2xl rounded-lg">
        <div className="py-[20px] sm:px-[20px] sm:py-[40px] sm:w-[40%] flex justify-center items-center">
          <div className="rounded-2xl">
            <img
              src={product?.product_photos[0]}
              className="h-[16rem] object-contain cursor-pointer"
              onClick={() => {
                naviagte(`/product/${product?.product_id}`);
              }}
            />
          </div>
        </div>
        <div className="px-[20px] sm:px-[40px] py-[40px] sm:w-[60%] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
          <span
            className="text-xl md:text-2xl font-semibold text-[#007276] cursor-pointer"
            onClick={() => {
              naviagte(`/product/${product?.product_id}`);
            }}
          >
            {product?.product_title}
          </span>
          <p className="mt-[20px] text-xl md:text-2xl text-gray-700 font-semibold">
            Price: {product?.offer?.price}
          </p>
          <div className="py-[20px]">
            <i
              className="fas fa-minus px-4 cursor-pointer"
              onClick={handleDecrement}
            ></i>
            <input
              id={product?.product_id}
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
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Subtotal:{" "}
            {(parsePrice(product?.offer?.price) * count).toLocaleString(
              "en-IN",
              {
                style: "currency",
                currency: "INR",
              }
            )}
          </p>
          <button
            type="submit"
            className="mt-[20px] px-6 py-3 bg-[#007276] font-semibold text-white shadow-black/40 shadow-lg rounded-lg text-sm md:text-xl flex items-center cursor-pointer"
            onClick={() => {
              deleteProduct(product);
            }}
          >
            <MdDelete className="text-lg md:text-2xl mr-2" />
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
