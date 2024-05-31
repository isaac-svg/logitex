import Image from 'next/image';
import React from 'react';

type Props = {
  imgsrc: string;
  title: string;
  description: string;
};

const ShadowCard = ({ imgsrc, description, title }: Props) => {
  return (
    <div className="flex gap-[25px] p-4 flex-col  items-center justify-center  bg-white shadow-contact-card text-center">
      <div className="">
        <Image
          src={imgsrc}
          alt="ocen icon"
          className="w-16 h-16"
          width={60}
          height={60}
        />
      </div>
      <div className="w-4/5 flex flex-col items-center gap-4">
        <h4 className="text-[#0c0b1a] text-xl font-semibold">{title}</h4>
        <p className="text-[#666] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ShadowCard;
