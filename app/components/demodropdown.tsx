import Link from 'next/link';
import React from 'react';

type Props = {};

const DemoDropDown = (props: Props) => {
  return (
    <div className=" bg-[#1f1e2699] backdrop-blur-[20px] w-56 h-fit absolute top-full p-[20px] flex flex-col gap-6">
      <Link href={'/demo-one'} className="uppercase hover:text-orange">
        DEMO ONE
      </Link>
      <Link href={'/demo-two'} className="uppercase hover:text-orange">
        DEMO TWO
      </Link>
      <Link href={'/demo-three'} className="uppercase hover:text-orange">
        DEMO THREE
      </Link>
    </div>
  );
};

export default DemoDropDown;
