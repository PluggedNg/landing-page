const Waitlist = () => {
  return (
    <div className="py-[10vh] bg-[#639fab]">
      <div className="w-[70vw] mx-auto">
        <h2 className="text-[64px] font-semibold text-center">
          Don&apos;t be left behind! Join Our Waitlist!
        </h2>
        <p className="text-[24px] px-20 text-center">
          Lorem ipsum dolor sit amet consectetur. Nunc in turpis scelerisque
          habitant consectetur pellentesque. Lorem ultricies ante pellentesque
          vitae.
        </p>

        <div className="border border-[#1c5d99] w-[60vw] mt-10 mx-auto rounded-xl">
            <input type="text" className="px-10 bg-inherit outline-none border-none w-[80%] placeholder:text-[#000]" placeholder="Enter Email Address"  />
            <button className="bg-[#1c5d99] text-[#fff] py-4 w-[20%] rounded-r-lg font-semibold text-[20px]">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
