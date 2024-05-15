import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app, auth, db } from "../context/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartShopping, FaDeleteLeft } from "react-icons/fa6";
import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
const Product = ({ product }) => {
  const [addToCart, setaddToCart] = useState(false);
  const navigate = useNavigate();
  const notify = (msg) => {
    toast(msg);
  };
  const addProduct = () => {
    const cartRef = doc(db, "cart", auth?.currentUser?.uid);
    product["count"] = 1;
    const data = { [product?.product_id]: product };
    setDoc(cartRef, data, { merge: true });
  };
  const deleteProduct = () => {
    const cartRef = doc(db, "cart", auth?.currentUser?.uid);
    updateDoc(cartRef, {
      [product?.product_id]: deleteField(),
    });
  };
  const getData = () => {
    const cartRef = doc(db, "cart", auth?.currentUser?.uid);
    getDoc(cartRef)
      .then((res) => {
        res?.data() != null &&
          Object.keys(res?.data()).map((productId) => {
            if (productId == product?.product_id) {
              setaddToCart(true);
            }
          });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  };
  useEffect(() => {
    if (auth != null && auth.currentUser != null) {
      getData();
    }
  }, [auth, auth.currentUser]);
  return (
    <div className="flex justify-center">
      <div className="pro h-[28rem] bg-white">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(`/product/${product?.product_id}`);
          }}
        >
          <img src={product.product_photos[0]} alt="" />
        </div>
        <div className="des flex flex-col justify-between">
          <h5
            onClick={() => {
              navigate(`/product/${product?.product_id}`);
            }}
          >
            {product.product_title.slice(0, 60) + "..."}
          </h5>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="star text-[#fba72f] text-xs">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>{product?.offer?.price}</h4>
            </div>
            <span
              onClick={() => {
                if (auth?.currentUser == null) {
                  navigate("/signin");
                } else {
                  setaddToCart(!addToCart);
                  !addToCart ? addProduct() : deleteProduct();
                }
              }}
            >
              {!addToCart ? (
                <FaCartShopping
                  className="fas fa-shopping-cart fa-beat cart text-xl text-[#4b9676]"
                  onClick={() => {
                    auth?.currentUser != null &&
                      notify("Product added to cart");
                  }}
                />
              ) : (
                <FaDeleteLeft
                  className="fas fa-shopping-cart fa-beat cart text-xl text-[#4b9676]"
                  onClick={() => {
                    auth?.currentUser != null &&
                      notify("Product deleted from cart");
                  }}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
