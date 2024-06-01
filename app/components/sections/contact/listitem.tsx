import Image from 'next/image';
import React from 'react';

type Props = {
  imgsrc: string;
  description: string;
};

const Listitem = ({ imgsrc, description }: Props) => {
  return (
    <li className="flex gap-4 items-center">
      <span>
        <Image
          src={imgsrc}
          alt="check mark"
          height={50}
          width={50}
          className="w-8 h-8"
        />{' '}
      </span>

      <span>{description}</span>
    </li>
  );
};

export default Listitem;
