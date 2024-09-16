import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { FiveStars } from "../../components/icons";
import Portfolio from "../../components/Portfolio";
import Skillset from "../../components/Skillset";
import Waitlist from "../../components/Waitlist";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-[#292727] text-[#fff] pt-[20vh]">
        <h2 className="text-[60px] text-center">
          Build Amazing Teams On Demand
        </h2>
        <p className="text-[26px] text-center">
          Watch us assemble the best team for you, how you need them and exactly
          when you need them.
        </p>

        <div className="grid grid-cols-3 gap-10 w-[80vw] mx-auto mt-10 pb-20">
          <Card
            index={1}
            header="Talk to One of our industry experts."
            content="Lorem ipsum dolor sit amet consectetur. Non sed nisl dapibus consectetur. Odio lectus arcu id id morbi egestas feugiat sed mauris. "
          />
          <Card
            index={2}
            header="Work with Hand-Selected Talents"
            content="Lorem ipsum dolor sit amet consectetur. Non sed nisl dapibus consectetur. Odio lectus arcu id id morbi egestas feugiat sed mauris. "
          />
          <Card
            index={3}
            header="The right fit is guaranteed"
            content="Lorem ipsum dolor sit amet consectetur. Non sed nisl dapibus consectetur. Odio lectus arcu id id morbi egestas feugiat sed mauris. "
          />
        </div>
      </div>

      <div className="bg-[url('/assets/plain_bg.png')] bg-no-repeat w-[100%] items-center bg-cover">
        <div className="w-[85vw] flex justify-between mx-auto pt-[15vh]">
          <img src="/assets/about_img.png" alt="img" />

          <div className="text-[#fff] pt-[6vh]">
            <h2 className="text-[60px] font-semibold text-center">About Us</h2>
            <p className="text-[26px] text-center mt-4">
              Plugged is an emerging digital agency with a dedicated team of
              skilled developers and designers. They specialize in various
              digital services, including web design, web development, app
              design, app development, graphic design, and brand positioning on
              social media. Plugged's youthful and passionate team continuously
              pushes their creative boundaries to deliver exceptional results
              and enhance their clients' digital experiences
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#292727] text-[#fff] pt-10 pb-[15vh]">
        <h2 className="text-[60px] text-center">
          Find the best talents for your startups
        </h2>
        <p className="text-[30px] text-center px-[15vw] font-semibold">
          Join forces with expert freelancers who are committed to driving your
          project forward with creativity and precision.
        </p>

        <div className="flex justify-between w-[80vw] relative items-end space-x-6 mx-auto py-20">
          <div className="bg-[#1c5d99] w-[356px] max-w-[356px] flex flex-col space-y-3 pt-6 rounded-lg items-center">
            <h2 className="text-[24px] font-semibold">Pelumi Aiyeola</h2>
            <p>Product Designer</p>
            <FiveStars />
            <img
              src="/assets/talent_one.png"
              alt="img"
              className="w-[271px] h-[332px]"
            />
          </div>
          <div className="bg-[#1c5d99] w-[356px] max-w-[356px] flex flex-col space-y-3 pt-6 rounded-lg items-center">
            <h2 className="text-[24px] font-semibold">Adanma Godwin</h2>
            <p>Data Analyst</p>
            <FiveStars />
            <img
              src="/assets/talent_two.png"
              alt="img"
              className="w-[245px] h-[252px]"
            />
          </div>
          <div className="bg-[#1c5d99] w-[356px] max-w-[356px] flex flex-col space-y-3 pt-6 rounded-lg items-center">
            <h2 className="text-[24px] font-semibold">Fortune Badmos</h2>
            <p>Product Manager</p>
            <FiveStars />
            <img
              src="/assets/talent_three.png"
              alt="img"
              className="w-[219px] h-[252px]"
            />
          </div>
          <div className="bg-[#1c5d99] w-[356px] max-w-[356px] flex flex-col space-y-3 pt-6 rounded-lg items-center">
            <h2 className="text-[24px] font-semibold">Okikiola Lawson</h2>
            <p>Software Developer</p>
            <FiveStars />
            <img
              src="/assets/talent_four.png"
              alt="img"
              className="w-[271px] h-[332px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="text-[#1c5d99] font-semibold text-[20px] bg-[#fff] px-[8vw] py-3 rounded-lg ">
            Get Started
          </button>
        </div>
      </div>

      <Waitlist />
      <Skillset />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
