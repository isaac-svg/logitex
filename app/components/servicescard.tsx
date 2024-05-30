import Image from 'next/image';
import React from 'react';

type Props = {
  cardbanner: string;
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ cardbanner, description, icon, title }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-clip">
        <div className="w-full h-full max-w-2xl relative">
          <Image
            src={cardbanner}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="absolute   left-0  -bottom-14 bg-white  w-52 h-40 custom-transform"></div>
        <div className="w-36 h-24  absolute bottom-0 left-0 bg-transparent flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            height={50}
            width={30}
            className="w-12 h-16"
          />
        </div>
      </div>
      <h3 className="text-[#0c0b1a] font-semibold text-xl leading-7">
        {title}
      </h3>
      <p className="text-[#666] text-base leading-7 mt-[15px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
