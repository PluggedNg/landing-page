const Portfolio = () => {
  return (
    <div className="py-[15vh] bg-[#292727] text-[#fff]">
      <h2 className="text-[60px] text-center font-bold">Our Portfolio</h2>

      <div className="relative mt-[10vh]">
        <div className="bg-[#292727] py-[15vh] absolute w-[100%] rounded-b-[80%] -top-10"></div>
        <img src="/assets/portfolio.png" alt="img" className="w-[100%]" />
        <div className="bg-[#292727] py-[15vh] absolute w-[100%] rounded-t-[80%] -bottom-10"></div>
      </div>
    </div>
  );
};

export default Portfolio;
