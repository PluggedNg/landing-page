import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./icons";

const Footer = () => {
  return (
    <div className="bg-[#292727] pt-[10vh]">
      <div className="bg-[#639fab] flex items-center space-x-10 px-20 h-[477px] max-h-[480px]">
        <img src="/assets/footer.png" alt="img" className="h-[100%]" />
        <div className="w-[55%] text-center min-w-[55%]">
          <h2 className="text-[64px] font-bold">
            It&apos;s easy to get started
          </h2>
          <p className="text-[24px]">
            Get the app to Partner with our curated network of professionals,
            equipped to elevate your tech and design initiatives to new heights.
          </p>

          <div className="flex items-center justify-center mt-10 space-x-6">
            <img src="/assets/play_store.png" alt="img" className="" />
            <img src="/assets/app_store.png" alt="img" className="" />
          </div>
        </div>
      </div>
      <div className="w-[80vw] mx-auto py-[10vh] text-[#fff]">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <img src="/assets/logo.svg" alt="img" />
            <p className="mt-8 font-light">
              Technology Park <br /> 8-14 Maria Curia Street <br /> 08042
              Barcelona
            </p>
          </div>
          <div className="">
            <h2 className="text-[20px] font-semibold mb-8">About</h2>
            <div className="space-y-4 font-light">
              <p>About Us</p>
              <p>Features</p>
              <p>News</p>
              <p>Careers</p>
              <p>Help Center</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-semibold mb-8">Company</h2>
            <div className="space-y-4 font-light">
              <p>Our Team</p>
              <p>Partner With Us</p>
              <p>Blog</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-semibold mb-8">Support</h2>
            <div className="space-y-4 font-light">
              <p>Account</p>
              <p>Feedback</p>
              <p>Contact Us</p>
              <p>Accessibility</p>
              <p>Security</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-semibold mb-8">Company</h2>
            <div className="space-y-4 font-light">
              <p>Our Team</p>
              <p>Partner With Us</p>
              <p>Blog</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-6 border-b-2 border-[#404040] pb-6">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>

        <div className="flex justify-between mt-8 items-center">
            <p>Since 2024</p>
            <p>2024 Copyright by- Plugged</p>
            <p>Term, Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
