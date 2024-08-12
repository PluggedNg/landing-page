import { Dot } from "./icons";

const Header = () => {
  return (
    <div className="py-4 w-[90vw] mx-auto flex justify-between items-center text-[#fff]">
      <div className="w-[102px] h-[89px]">
        <img src="/assets/logo.svg" alt="img" />
      </div>

      <div className="flex items-center text-[20px] font-semibold space-x-10">
        <span>Home</span>
        <Dot />
        <span>Portfolios</span>
        <Dot />
        <span>Services</span>
        <Dot />
        <span>Blog</span>
        <Dot />
        <span>Contact</span>
      </div>

      <div className="text-[18px]">
        <button className="bg-[#fff] px-10 py-3 rounded-xl font-semibold text-[#1C5D99]">Join our Waitlist</button>
      </div>
    </div>
  );
};

export default Header;
