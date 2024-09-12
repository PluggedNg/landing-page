import Card from "../../components/Card";
import Hero from "../../components/Hero";

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
    </div>
  );
};

export default Home;
