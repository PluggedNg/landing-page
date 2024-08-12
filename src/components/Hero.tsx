import Header from "./Header";
import { Globe, Location } from "./icons";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#292727] text-[#fff] to-[#424040] min-h-[100vh]">
      <Header />
      <div className="relative">
        <h2 className="text-[220px] uppercase tracking-widest font-semibold -mt-10 w-[90vw] mx-auto">
          Freelance
        </h2>

        <div className="flex justify-between pl-20">
          <div className="w-[60%] z-10 space-y-20">
            <h2 className="text-[70px] w-[90%] capitalize font-semibold">
              Elevate your projects with elite freelancers
            </h2>
            <p className="text-[30px] font-semibold">
              Discover skilled talent. Take your job to the next level. Partner
              with our curated network of professionals, equipped to elevate
              your tech and design initiatives to new heights.
            </p>

            <div className="w-[75%]">
              <div className="bg-[#444242] shadow-2xl rounded-lg px-4 text-[20px] flex justify-between">
                <div className="flex space-x-2 items-center border-r-[3px] border-[#808080] py-3 w-[25%]">
                  <Location />
                  <p className="">Location</p>
                </div>
                <div className="flex space-x-2 items-center w-[70%]">
                  <Globe />
                  <p>What services are you looking for?</p>
                </div>
              </div>

              <button className="text-center bg-[#fff] rounded-lg py-3 w-[100%] text-[#1C5D99] mt-6 mb-[10vh]">Find Talent</button>
            </div>
          </div>
          <div className="w-[1000px] h-[950px]">
            <img
              src="/assets/hero.png"
              alt="hero"
              className="absolute top-[15vh] right-6 h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
