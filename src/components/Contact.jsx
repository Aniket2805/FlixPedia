import React from "react";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
const Contact = () => {
  return (
    <div>
      <section id="contact-header">
        <h2 className="text-3xl sm:text-5xl font-semibold">#let's_talk</h2>
        <p className="my-3 sm:my-5 sm:text-xl text-center">
          LEAVE A MESSAGE, We love to hear from you!
        </p>
      </section>
      <section
        id="contact-details"
        className="px-[15px] min-[350px]:px-[40px] py-[20px] md:py-[40px] md:px-[80px]"
      >
        <div className="details">
          <span className="text-gray-600">GET IN TOUCH</span>
          <h2>Visit one of our agency locations or Contact us.</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fas fa-map"></i>
              <p className="text-gray-600">
                O-49, Back Side Chanakya Place-2, New Delhi-110059
              </p>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <p className="text-gray-600">aniketkumar2025it@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p className="text-gray-600">8800139664</p>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <p className="text-gray-600">
                Monday to Saturday: 9:00AM to 5:00PM
              </p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6620444317505!2d77.03488687538017!3d28.609913725677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1685870412401!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="form-details" className="max-[662px]:flex-col items-center">
        <form
          action="mailto:aniketkumar2025it@gmail.com"
          method="post"
          encType="text/plain"
        >
          <span className="text-gray-600">LEAVE A MESSAGE</span>
          <h2 className="font-[500]">We love to hear from you</h2>
          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="E-Mail"
            required="required"
            placeholder="E-Mail"
          />
          <input
            type="text"
            name="Subject"
            required="required"
            placeholder="Subject"
          />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="normal">
            Submit
          </button>
        </form>
        <div className="member">
          <div className="">
            <img src={p1} alt="" />
            <p className="text-gray-600">
              <span>Aniket Kumar</span> Senior Marketing Manager <br /> Phone:
              8800139664 <br /> Email: aniketkumar2025it@gmail.com
            </p>
          </div>
          <div>
            <img src={p2} alt="" />
            <p className="text-gray-600">
              <span>Aman Thakur</span> Senior Marketing Manager <br /> Phone:
              9800132264 <br /> Email: contact1@gmail.com
            </p>
          </div>
          <div>
            <img src={p3} alt="" />
            <p className="text-gray-600">
              <span>Rekha Singh</span> Senior Marketing Manager <br /> Phone:
              8440130024 <br /> Email: contact2@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
