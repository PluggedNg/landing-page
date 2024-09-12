import Header from "./Header";
import { Globe, Location } from "./icons";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#292727] relative text-[#fff] to-[#424040] min-h-[100vh]">
      <Header />

      <div className="w-[85vw] mx-auto">
        <div className="flex items-center justify-center space-x-6 mt-6 text-[100px] font-semibold">
          <h2>The Future of</h2>
          <img src="/assets/hero_one.png" alt="hero" className="w-[230px]" />
          <h2>Freelance</h2>
        </div>
        <p className="text-[32px] text-center font-semibold">
          Discover skilled talent. Take your job to the next level. Partner with
          our curated network of professionals, equipped to elevate your tech
          and design initiatives to new heights.
        </p>

        <div className="border-4 border-[#808080] flex items-center justify-between mt-10 rounded-lg mx-16">
          <div className="flex space-x-3 items-center w-[15%] border-r-2 bordeer-[#808080] pl-3">
            <Location />
            <p>Location</p>
          </div>
          <div className="flex items-center space-x-3 w-[60%]">
            <Globe />
            <input
              type="text"
              placeholder="What services are you looking for?"
              className="bg-inherit border-none outline-none placeholder:text-[#fff]"
            />
          </div>
          <div className="text-[#1c5d99] w-[20%] bg-[#fff] py-4 flex items-center rounded-lg font-semibold justify-center">
            <h2>Find Talent</h2>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-[30vh] relative">
        <img src="/assets/cloud.png" className="w-[100%]" alt="img" />
        <div className="flex items-center justify-center ">
          <div className="absolute bottom-0 flex items-start">
            <img src="/assets/arrow_left.png" alt="img" />
            <img src="/assets/hero_two.png" alt="img" className="" />
            <img src="/assets/arrow_right.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
