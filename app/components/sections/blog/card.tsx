import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  imgsrc: string;
  author: string;
  title: string;
};

const Card = ({ imgsrc }: Props) => {
  const [ishovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative h-[422px] w-full overflow-hidden"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full max-w-full cursor-pointer  ">
        <Image
          src={imgsrc}
          className="w-full saturate-0 hover:saturate-100 h-full object-cover align-middle "
          alt="card 1"
          width={100}
          height={100}
        />
      </div>
      <div
        className={`mx-auto bg-white flex flex-col  z-50 absolute bottom-2 py-8 px-7 max-w-[323px] w-[95%] left-0 right-0 transition-opacity duration-300 ease-in transform ${
          ishovered
            ? 'opacity-100 translate-y-0 animate-buttomup'
            : 'opacity-0  animate-topdown'
        }`}
      >
        hello
      </div>
    </div>
  );
};

export default Card;
