import React from "react";
import Image from "next/image";
import { FaStar, FaLongArrowAltRight } from "react-icons/fa";

function Products() {
  return (
    <div className="wrapper">
      {/* Heading Section */}
      <h1 className="flex justify-center items-center text-3xl sm:text-4xl text-green-800 font-serif pt-10 sm:pt-20 pb-4 sm:pb-6 font-bold">
        Best Selling
      </h1>
      <p className="flex justify-center items-center text-green-800 px-4 sm:px-0 text-center">
        Get in on the trend with our curated selection of best-selling styles.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div>
          <Image
            src={`/1.png`}
            alt={`Product`}
            width={300}
            height={200}
            className="w-full bg-green-300 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">
            Regular Fit Long Sleeve Top
          </p>
          <p className="font-bold text-center pt-2">
            $ 38.99 | 5.0 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>
        <div>
          <Image
            src={`/2.png`}
            alt={`Product`}
            width={300}
            height={200}
            className="w-full bg-green-300 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">
            Black Crop Tailored Jecket
          </p>
          <p className="font-bold text-center pt-2">
            $ 62.99 | 4.9 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>
        <div>
          <Image
            src={`/3.png`}
            alt={`Product`}
            width={300}
            height={200}
            className="w-full bg-green-300 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">Texture Sunset Shirt</p>
          <p className="font-bold text-center pt-2">
            $ 49.99 | 5.0 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="flex items-center rounded-sm bg-green-800 text-white font-semibold p-2 px-6 text-sm hover:bg-green-500 duration-100">
          See all
          <FaLongArrowAltRight className="ml-4" />
        </button>
      </div>

      {/* Categories Section */}
      <h4 className="flex justify-center items-center text-3xl sm:text-4xl text-green-800 font-serif pt-16 sm:pt-20 pb-6">
        Our Products
      </h4>
      <ul className="flex flex-wrap justify-center gap-6 py-7 px-8 text-sm sm:text-md text-green-800">
        {/* "SALE", "HOT", "NEW ARRIVALS", "ACCESSORIES" */}
          <li className="hover:underline hover:decoration-3 hover:decoration-green-600 hover:underline-offset-4">
            SALE
          </li>
          <li className="hover:underline hover:decoration-3 hover:decoration-green-600 hover:underline-offset-4">
            HOT
          </li>
          <li className="hover:underline hover:decoration-3 hover:decoration-green-600 hover:underline-offset-4">
           NEW ARRIVALS
          </li>
          <li className="hover:underline hover:decoration-3 hover:decoration-green-600 hover:underline-offset-4">
            ACCESSORIES
          </li>
      </ul>

      {/* More Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10  px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 ">
        <div className="flex justify-between">
          <div className="w-max h-auto">
            <Image
              src={`/p1.png`}
              alt="product"
              width={200}
              height={300}
              className="w-full transition-transform duration-300 transform hover:scale-110"
            />
            <p className="font-bold pt-5 text-center">Spread Collar Shirt</p>
            <p className="font-bold text-center pt-2">
              $ 48.99 | 5.0 <FaStar className="text-yellow-400 inline" />
            </p>
          </div>
        </div>

        <div className="w-max h-auto">
          <Image
            src={`/c2.png`}
            alt="product"
            width={200}
            height={200}
            className="w-full transition-transform duration-300 transform hover:scale-110 bg-slate-200"
          />
          <p className="font-bold pt-5 text-center">White Solid Designer Shirt</p>
          <p className="font-bold text-center pt-2">
            $ 39.00 | 4.9 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>

        <div  className="w-max h-auto">
          <Image
            src={`/p3.png`}
            alt="product"
            width={200}
            height={300}
            className="w-full transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">Shine On Me Blouse</p>
          <p className="font-bold text-center pt-2">
            $ 42.99 | 4.9 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>

        <div  className="w-max h-auto">
          <Image
            src={`/p4.png`}
            alt="product"
            width={200}
            height={300}
            className="w-full transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">Gray Solid padded Jacket</p>
          <p className="font-bold text-center pt-2">
            $ 32.99 | 4.7 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>

        <div  className="w-max h-auto">
          <Image
            src={`/p5.png`}
            alt="product"
            width={200}
            height={300}
            className="w-full transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">Printed Loose T-Shirt</p>
          <p className="font-bold text-center pt-2">
            $ 39.99 | 5.0 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>

        <div  className="w-max h-auto">
          <Image
            src="/p6.png"
            alt="product"
            width={200}
            height={300}
            className="w-full transition-transform duration-300 transform hover:scale-110"
          />
          <p className="font-bold pt-5 text-center">Summer Wind Crop Shirt</p>
          <p className="font-bold text-center pt-2">
            $ 39.95 | 4.7 <FaStar className="text-yellow-400 inline" />
          </p>
        </div>
      </div>

      {/* Offer Section */}
      <div className="py-10 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="bg-green-200 p-4 sm:p-8 rounded-md">
          <section className="flex flex-col lg:flex-row items-center gap-6">
            {/* Offer Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/0.png"
                alt="Offer Image"
                height={596}
                width={482}
                className="rounded-tl-[50px] sm:rounded-tl-[100px] lg:rounded-tl-[150px] w-full h-auto"
              />
            </div>

            {/* Offer Text */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-green-800 text-4xl sm:text-5xl font-serif font-bold">
                Exclusive Offer
              </h1>
              <p className="text-green-800 py-6 text-lg sm:text-xl lg:text-2xl">
                Explore our curated collection of stylish clothing and
                accessories tailored to your unique taste.
              </p>
              {/* Countdown */}
              <div className="flex justify-center lg:justify-start gap-4 pb-6">
                {["06 Days", "18 Hours", "48 Min"].map((time, index) => (
                  <div
                    key={index}
                    className="bg-white py-4 px-6 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110"
                  >
                    <p className="text-2xl font-bold">{time.split(" ")[0]}</p>
                    <p>{time.split(" ")[1]}</p>
                  </div>
                ))}
              </div>
              <button className="flex items-center justify-center gap-3 rounded-sm bg-green-800 text-white font-semibold p-3 hover:bg-green-950 duration-100">
                BUY NOW
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products;
