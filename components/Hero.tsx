import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-emerald-200">
      <main className=" wrapper">
        <section className="flex gap-6 items-center">
          <div className="py-7 px-28 my-auto">
            <h1 className="text-green-800  text-6xl 2xl font-serif">
              {" "}
              Discover and{" "}
            </h1>
            <h2 className="text-green-800  text-6xl 2xl font-serif">
              {" "}
              Find Your Own
            </h2>
            <h3 className="text-green-800  text-6xl 2xl font-serif">
              {" "}
              Fashion!
            </h3>
            <p className=" text-green-800 py-8 text-xl md:w-[300px] lg:w-[500px] 2xl:text-4xl 2xl:w-[850px]">
              Explore ur curated collection of stylish clothing and accessories
              tailored to your unique taste
            </p>
            <button className="flex items-center gap-3 rounded-sm bg-green-800 text-white font-semibold p-3 hover:bg-green-950 duration-100 ">
              Explore Now
            </button>
          </div>
          <div className="flex py-20 mx-auto">
            <Image
              src="/home.png"
              alt="logo"
              height={600}
              width={600}
              className="2xl:rounded-tl-[200px] rounded-tl-[100px] pb-10 h-96 w-72 mx-auto  2xl:h-[700px] 2xl:w-[500px]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
