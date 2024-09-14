const Skillset = () => {
  return (
    <div className="py-[15vh] bg-[#292727] text-[#fff]">
      <h2 className="text-[60px] font-semibold text-center">
        The Platform We Cover For Seekers
      </h2>
      <div className="w-[80vw] mt-20 mx-auto pb-[10vw]">
        <div className="relative flex items-center justify-center">
          <div className="w-[40vw] max-w-[509px] h-[40vw] max-h-[509px] border border-[#1c5d99] rounded-full flex items-center justify-center absolute left-4 z-0">
            <h2 className="text-[clamp(16px, 2vw, 30px)] font-semibold uppercase text-center">
              Product Development
            </h2>
          </div>

          <div className="w-[40vw] max-w-[509px] h-[40vw] max-h-[509px] bg-[#1c5d99] rounded-full px-6 md:px-10 space-y-2 md:space-y-3 text-center flex flex-col items-center justify-center relative z-10">
            <h2 className="text-[clamp(14px, 1.5vw, 20px)] font-semibold">
              Tech & IT
            </h2>
            <p className="text-[clamp(12px, 1vw, 16px)]">
              Lorem ipsum dolor sit amet consectetur. Blandit placerat egestas
              elementum bibendum duis vitae fames.
            </p>
            <p className="underline text-[clamp(12px, 1vw, 16px)]">
              Learn More
            </p>
          </div>

          <div className="w-[40vw] max-w-[509px] h-[40vw] max-h-[509px] border border-[#1c5d99] rounded-full flex items-center justify-center absolute right-4 z-0">
            <h2 className="text-[clamp(16px, 2vw, 30px)] font-semibold uppercase text-center">
              Technical
            </h2>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-10">
          <div className="w-[40vw] max-w-[509px] h-[40vw] max-h-[509px] border border-[#1c5d99] rounded-full flex items-center justify-center absolute left-[10vw] z-0">
            <h2 className="text-[clamp(16px, 2vw, 30px)] font-semibold uppercase text-center">
              Administration
            </h2>
          </div>

          <div className="w-[40vw] max-w-[509px] h-[40vw] max-h-[509px] border border-[#1c5d99] rounded-full flex items-center justify-center absolute right-[10vw] z-0">
            <h2 className="text-[clamp(16px, 2vw, 30px)] font-semibold uppercase text-center">
              Human Resources
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
