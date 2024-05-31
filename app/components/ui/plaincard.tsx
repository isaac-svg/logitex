import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  imgsrc: string;
};

const PlainCard = ({ description, imgsrc, title }: Props) => {
  return (
    <div className="flex gap-[25px] p-4 flex-col  items-center justify-center    text-center">
      <div className="w-full h-52">
        <Image
          src={imgsrc}
          alt={title}
          className="object-cover w-full h-full"
          width={60}
          height={60}
        />
      </div>
      <div className="w-[90%] flex flex-col items-center gap-4">
        <h4 className="text-[#0c0b1a] text-xl font-semibold">{title}</h4>
        <p className="text-[#666] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PlainCard;
