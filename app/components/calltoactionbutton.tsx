import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
};

const CallToActionBtn = ({ text }: Props) => {
  return (
    <button className="bg-orange border-orange border-[1px] text-white uppercase text-center tracking-tight py-[9px] px-[15px] cursor-pointer inline-block hover:bg-lightorange transition-colors duration-300 ">
      {text}
    </button>
  );
};

export default CallToActionBtn;
