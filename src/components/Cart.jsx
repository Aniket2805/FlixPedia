import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Context } from "../context/contextAPI";
import { app, auth, db } from "../context/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { doc, onSnapshot } from "firebase/firestore";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartData, setcartData] = useState([]);
  const { loading, setloading } = useContext(Context);
  const naviagte = useNavigate();
  const parsePrice = (priceString) => {
    const cleanedPriceString = priceString.replace(/[^\d.]/g, ""); // Remove non-numeric characters
    return parseFloat(cleanedPriceString);
  };
  const getTotal = () => {
    let total = 0;
    cartData.map((item) => {
      total = total + parsePrice(item?.offer?.price) * item?.count;
    });
    return total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };
  const getData = () => {
    const cartRef = doc(db, "cart", auth?.currentUser?.uid);
    setloading(true);
    onSnapshot(cartRef, (res) => {
      res?.data() != null &&
        setcartData(
          Object.values(res?.data())?.map((item) => {
            return item;
          })
        );
      setloading(false);
    });
  };
  const shipping = 300;
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setloading(true);
      if (auth == null || auth?.currentUser == null) {
        naviagte("/signin");
      } else {
        getData();
      }
    });
  }, []);
  return (
    <div>
      <section id="cart-header">
        <h2 className="font-bold text-3xl sm:text-5xl mb-3 text-[#0000008a]">
          #Your_Cart
        </h2>
        <p className="text-lg md:text-2xl">
          Your Cart Awaits the Ultimate Retail Adventure
        </p>
      </section>
      {cartData.length != 0 ? (
        <div>
          <section>
            {cartData.map((product) => {
              return <CartItem product={product} key={product?.product_id} />;
            })}
          </section>
          <section
            id="cart-add"
            className="mt-[20px] mx-[20px] sm:px-[30px] lg:px-[80px]"
          >
            <div id="coupon" className="flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl max-sm:text-center">
                Apply Coupon
              </h3>
              <div>
                <input type="text" placeholder="Enter Your Coupon" id="" />
                <button className="normal bg-[#007276] text-white">
                  Apply
                </button>
              </div>
            </div>
            <div id="subtotal">
              <h3 className="text-xl sm:text-2xl">Cart Total</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="total-amount">{getTotal()}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      {shipping.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong className="total-amount">
                        {(parsePrice(getTotal()) + 300).toLocaleString(
                          "en-IN",
                          {
                            style: "currency",
                            currency: "INR",
                          }
                        )}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="normal bg-[#007276] text-white">
                Proceed to checkout
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className="h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-[#007276] text-3xl sm:text-5xl font-extrabold font-serif text-center">
            Your Cart is <span className="text-red-700 font-serif">Empty!</span>
          </h1>
          <button
            type="submit"
            className="mt-[20px] px-6 py-3 bg-[#007276] font-semibold text-white shadow-black/40 shadow-lg rounded-lg text-xl flex items-center cursor-pointer"
            onClick={() => {
              naviagte("/");
            }}
          >
            <FaArrowRightLong className="text-2xl mr-2" />
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
