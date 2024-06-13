import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "./../data/index";

const Footer = () => {
  return (
    <footer id="contact" className="w-full relative pt-20 pb-10">
      <div className="w-ful absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span>your</span> precence next level
        </h1>
        <p className="text-white-200 md:mt-20 my-5 text-center">
          Reach out to me today and let's discuss how can I help you achieve
          goals.{" "}
        </p>
        <a href="mailto:ahmadxonmoydinov@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex justify-between mt-16 md:flex-row flex-col items-center">
        <p className="md:text-base sm:mb-8 text-sm md:font-normal font-light">
          {" "}
          Copyright © 2024 Ahmadxon
        </p>
        <div className="flex items-center sm:mt-[40px] md:gap-3 gap-6">
          {socialMedia.map((pro) => (
            <div
              key={pro.id}
              className="w-10 h-10 sm:mt-[40px] cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 flex justify-center  bg-opacity-75 bg-black-200 rounded-lg border border-black-300 justify-center items-center "
            >
              <img src={pro.img} width={20} height={20} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
