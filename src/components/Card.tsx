import { FC } from "react";

interface CardProps {
  header: string;
  content: string;
  index: number;
}

const Card: FC<CardProps> = ({ index, header, content }) => {
  return (
    <div className="bg-[#639fab] p-6 rounded-lg">
      <div className="flex relative">
        {/* <p className="py-1.5 px-3 bg-[#fff] rounded-full"></p> */}
        <p className="font-semibold bg-[#fff] py-1.5 px-3 rounded-full text-[#639fab]">{index}</p>
      </div>
      <h2 className="text-center text-[24px] font-semibold mt-10 px-4">{header}</h2>
      <p className="pt-4 text-center">{content}</p>
    </div>
  );
};

export default Card;
