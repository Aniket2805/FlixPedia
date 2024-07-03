import React from "react";

const About = () => {
  return (
    <div className="">
      <section id="about-header" className="text-[#e9ebeb]">
        <h2 className="font-bold text-2xl md:text-4xl text-center">#KnowUs</h2>
        <p className="text:lg md:text-2xl font-semibold mt-2 sm:mt-4 text-center">
          Unveiling the Essence of Our Fashion Journey
        </p>
      </section>
      <div className="md:mt-4  px-[15px] min-[350px]:px-[40px] min-[1000px]:px-[80px]">
        <h1 className="text-center font-bold text-[#2b7981] text-xl md:text-4xl">
          Welcome to ShopSwift - Where Shopping Meets Swiftness!
        </h1>
        <p className="text-center mt-2 md:mt-4 text-md min-[1000px]:text-2xl text-gray-600">
          At ShopSwift, we believe that shopping should be a seamless and
          delightful experience. Our mission is to provide you with a swift and
          hassle-free online shopping destination, where you can discover a
          curated selection of high-quality products that enhance your
          lifestyle.
        </p>
      </div>
      <div className="grid md:grid-cols-2 px-[15px] min-[350px]:px-[40px] min-[1000px]:px-[80px]">
        <div>
          <lottie-player
            src="https://lottie.host/ec10c4dc-2adc-40e7-b980-55cfaaf941e9/C4AHiN93v1.json"
            background="##fff"
            speed="1"
            className="w-full"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col justify-center md:px-[20px]">
          <h2 className="font-bold text-[#2b7981] text-3xl sm:text-4xl min-[1000px]:text-6xl md:pt-4">
            Our Story
          </h2>
          <p className="mt-4 text-md min-[1000px]:text-2xl text-gray-600">
            Founded in 2023, ShopSwift was born out of a passion for delivering
            a modern, efficient, and enjoyable shopping experience. We
            understand the fast-paced nature of today's world, and we're here to
            make sure your online shopping journey is as swift as possible. Our
            team is dedicated to staying ahead of trends, sourcing the latest
            products, and ensuring that every item in our inventory meets the
            highest standards of quality.
          </p>
        </div>
      </div>
      <section id="about-banner" className="mt-4">
        <h2 className="text-[#ffffff] font-bold text-3xl md:text-6xl">
          #What Sets Us Apart?
        </h2>
      </section>
      <div className="about-content px-[15px] min-[350px]:px-[40px] min-[1000px]:px-[80px] text-md min-[1001px]:text-2xl text-gray-600">
        <p>
          <span>Swift Delivery:</span> We know you want your purchases as
          quickly as possible. That's why we've partnered with reliable shipping
          providers to ensure swift and timely deliveries right to your
          doorstep.
        </p>
        <p>
          <span>Curated Selection:</span> Our team of experts carefully curates
          our product selection, bringing you a range of items that are not only
          stylish but also functional and innovative. Discover the latest trends
          and timeless classics all in one place.
        </p>
        <p>
          <span>Customer-Centric Approach:</span> Your satisfaction is our
          priority. Our customer support team is here to assist you with any
          questions or concerns, ensuring that your shopping experience with
          ShopSwift is nothing short of exceptional.
        </p>
        <p>
          <span>Secure Shopping:</span> We take your online security seriously.
          Shop with confidence, knowing that your personal and payment
          information is safeguarded through state-of-the-art security measures.
        </p>
      </div>
      <div className="about-content px-[15px] min-[350px]:px-[40px] min-[1000px]:px-[80px] text-md min-[1001px]:text-2xl text-gray-600">
        <h1 className="font-bold text-[#2b7981] text-3xl sm:text-4xl min-[1000px]:text-5xl md:pt-4">
          Our Commitment
        </h1>
        <p className="pt-2">
          ShopSwift is more than just an online store; it's a community built on
          the principles of trust, reliability, and innovation. We are committed
          to continuously improving and evolving to meet the ever-changing needs
          of our customers.
        </p>
        <h1 className="font-bold text-[#2b7981] text-3xl sm:text-4xl min-[1000px]:text-5xl md:pt-4">
          Join the Swift Shopping Revolution!
        </h1>
        <p className="pt-2">
          Thank you for choosing ShopSwift as your go-to online shopping
          destination. Whether you're seeking fashion, electronics, home
          essentials, or gifts, we're here to provide you with a swift and
          enjoyable shopping experience. Explore our website, discover new
          products, and let ShopSwift redefine the way you shop online.
        </p>
        <p className="font-semibold pt-3">Happy Shopping!</p>
        <p className="text-pink-700 font-semibold">Aniket Kumar</p>
        <p className="text-pink-700 font-semibold">Founder, ShopSwift</p>
      </div>
    </div>
  );
};

export default About;
