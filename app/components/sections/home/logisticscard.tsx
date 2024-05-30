import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  heading: string;
  imgsrc: string;
  description: string;
};

const LogisticsCard = ({ description, heading, imgsrc }: Props) => {
  return (
    <div className="border-[#cbcbcb] border-[2px] bg-[#ffede8] flex flex-col items-start justify-between py-[60px] px-[30px] h-max   ">
      <div className="text-[#0c0b1a] mb-[30px] font-medium tracking-[-0.03125px]  text-2xl ">
        {heading}
      </div>
      <div className="mb-[35px] ">
        <Image
          src={imgsrc}
          alt="Image"
          className="object-cover inline-block max-w-full align-middle border-0 overflow-clip w-[354px] h-[320px] aspect-logcard"
          height={100}
          width={100}
        />
      </div>
      <p className="text-[#666] mb-[35px] text-base">{description}</p>
      <div className="flex gap-[10px] justify-start items-center cursor-pointer">
        <Link
          href={'#'}
          className="text-[#0c0b1a] text-xs uppercase font-medium leading-6  tracking-[0.125rem]"
        >
          Discover More
        </Link>
        <Image
          src={'/assets/home/arrow.svg'}
          alt="get more"
          height={100}
          width={100}
          className="max-w-full align-middle inline-block w-4 h-4"
        />
      </div>
    </div>
  );
};

export default LogisticsCard;
