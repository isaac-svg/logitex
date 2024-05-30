import Image from 'next/image';
import React from 'react';

type Props = {
  iconsrc: string;
};

const Glassmorphismcard = ({ iconsrc }: Props) => {
  return (
    <div className="bg-glasmorphism backdrop-blur-[20px] border-[#ffffff33] border-[1px] flex flex-col items-stretch pt-[50px]  pr-[20px] pb-[54px] pl-[32px] justify-between gap-6 ">
      <Image
        src={iconsrc}
        alt="ocen freight icon"
        width={50}
        height={50}
        className="w-16 h-16"
      />
      <h3 className="text-white text-xl font-semibold">Ocean freight</h3>
      <p className="text-[#d2d1e9]">
        Efficiently moving businesses transport solutions reliability.
      </p>
    </div>
  );
};

export default Glassmorphismcard;
