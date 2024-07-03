import React from "react";
import Logo3 from "/src/images/Logo3.png";
import google from "/src/images/google.png";
import pay from "/src/images/pay.png";
import store from "/src/images/store.png";

const Footer = () => {
  return (
    <div>
      <section
        id="newsletter"
        className="py-[20px] px-[20px] my-[20px] sm:py-[40px] sm:px-[80px] sm:my-[40px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center">
            <h4 className="">Sign Up For Newsletters</h4>
            <p className="py-4">
              Get E-mail updates about our lastest shop and{" "}
              <span>special offers.</span>
            </p>
          </div>
          <div className="flex items-center justify-center form">
            <input type="text" name="" placeholder="Your Email address" id="" />
            <button className="normal">Sign Up</button>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="px-[30px] min-[500px]:px-[40px] min-[900px]:px-[80px] flex flex-col items-center md:flex-row md:justify-between mb-10">
          <div className="md:text-xl text-xs text-[#0000008a] font-semibold">
            <p>Get connected with us on social networks:</p>
          </div>
          <div className="md:mt-0 mt-4">
            <a
              className="btn m-1 me-3"
              href="https://twitter.com/AniketK66947378"
              role="button"
            >
              <i className="fab fa-twitter text-white bg-[#55acee] p-2 rounded-full transition shadow-[#55acee] shadow-lg hover:shadow-[#55acee] hover:shadow-xl"></i>
            </a>
            <a
              className="btn m-1 me-3"
              href="mailto:aniketkumar2025it@gmail.com"
              role="button"
            >
              <i className="fab fa-google text-white bg-[#dd4b39] p-2 rounded-full transition shadow-[#dd4b39] shadow-lg hover:shadow-[#dd4b39] hover:shadow-xl"></i>
            </a>

            <a
              className="btn m-1 me-3"
              href="https://www.instagram.com/aniket28_kumar/"
              role="button"
            >
              <i className="fab fa-instagram text-white bg-[#ac2bac] p-2 rounded-full transition hover:shadow-[#ac2bac] hover:shadow-xl shadow-[#ac2bac] shadow-lg"></i>
            </a>

            <a
              className="btn m-1 me-3"
              href="https://www.linkedin.com/in/aniket-kumar-1b01a3237/"
              role="button"
            >
              <i className="fab fa-linkedin-in text-white bg-[#0082ca] p-2 rounded-full transition hover:shadow-[#0082ca] hover:shadow-xl shadow-[#0082ca] shadow-lg"></i>
            </a>
            <a
              className="btn m-1"
              href="https://github.com/Aniket2805"
              role="button"
            >
              <i className="fab fa-github text-white bg-[#333333] p-2 rounded-full transition hover:shadow-[#333333] hover:shadow-xl shadow-[#333333] shadow-lg"></i>
            </a>
          </div>
        </div>
        <section className="px-[30px] pt-[20px] min-[500px]:px-[40px] min-[900px]:px-[80px] sm:pt-[40px] contact bg-[#007276] text-white">
          <div className="text-center md:text-start mt-5">
            <div className="grid md:grid-cols-4 md:gap-4">
              <div className="mb-4">
                <a
                  href="index.html"
                  className="logo flex max-md:justify-center"
                >
                  <img src={Logo3} alt="" className="w-[138px]" />
                </a>
                <p className="font-bold uppercase text-[#0000008a] text-xl">
                  Contact Us
                </p>
                <ul>
                  <li>
                    <span>Address:</span> O-49,Back Side Chanakya Place-2, New
                    Delhi-110059
                  </li>
                  <li>
                    <span>Phone:</span> 8800139664
                  </li>
                  <li>
                    <span>Hours:</span> 10:00-18:00, Mon-Sat.
                  </li>
                </ul>
              </div>
              <div className="mx-auto mb-4">
                <h5 className="uppercase font-bold text-[#0000008a] text-xl">
                  About
                </h5>
                <p>
                  <a href="/aboutus" className="">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="">
                    Delivery Information
                  </a>
                </p>
                <p>
                  <a href="#!" className="">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="/contactus" className="">
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="mx-auto mb-4">
                <h5 className="uppercase font-bold text-[#0000008a] text-xl">
                  {" "}
                  My Account{" "}
                </h5>
                <p>
                  <a href="#!" className="">
                    Sign In
                  </a>
                </p>
                <p>
                  <a href="cart.html" className="">
                    View Cart
                  </a>
                </p>
                <p>
                  <a href="#!" className="">
                    My Wishlist
                  </a>
                </p>
                <p>
                  <a href="#!" className="">
                    Track My Order
                  </a>
                </p>
                <p>
                  <a href="contact.html" className="">
                    Help
                  </a>
                </p>
              </div>
              <div className="mx-auto mb-4 flex flex-col">
                <h5 className="uppercase font-bold text-[#0000008a] text-xl">
                  Install App
                </h5>
                <p>From App Store or Google Play</p>
                <div className="install flex flex-col items-center lg:flex-row">
                  <a href="">
                    <img
                      src={store}
                      alt=""
                      className="lg:h-full"
                      style={{ width: "10rem" }}
                    />
                  </a>
                  <a href="" className="mt-2 lg:ml-2 lg:mt-0 flex">
                    <img
                      src={google}
                      alt=""
                      className="bg-white rounded-[6px]"
                      style={{ width: "10rem" }}
                    />
                  </a>
                </div>
                <p>Secured Payment Gateways</p>
                <div className="flex justify-center">
                  <img src={pay} alt="" style={{ width: "10rem" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
