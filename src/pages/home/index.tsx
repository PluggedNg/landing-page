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
    </div>
  );
};

export default Home;
