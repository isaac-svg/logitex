import React from 'react';
import Contact from '../home/contact';
import Image from 'next/image';
import PlainCard from '../../ui/plaincard';

type Props = {};

const plaincards = [
  {
    title: 'Air freight',
    description:
      'Efficient ariel logistics for cargo transport, ensuring connections',
    imgsrc: '/assets/service/plane.webp',
  },
  {
    title: 'Ocean freight',
    description:
      'Efficient ariel logistics for cargo transport, ensuring connections',
    imgsrc: '/assets/service/ocean.webp',
  },
  {
    title: 'Raod freight',
    description:
      'Efficient ariel logistics for cargo transport, ensuring connections',
    imgsrc: '/assets/service/truck.webp',
  },
];
const WhyWeProvideService = (props: Props) => {
  return (
    <div className="flex items-center justify-center  md:mx-[30px] flex-col my-[30px] bg-[#f2f6f9] py-[60px]">
      <div className=" items-center flex flex-col gap-4 mb-[20px]">
        <div className="flex justify-center items-center gap-4 mb-6">
          {' '}
          <div className="bg-[#6c6a86] w-8 h-1  " />{' '}
          <h3 className="text-[#6c6a86] text-bold uppercase">WHY WE ARE</h3>
        </div>
        <div className="max-w-[800px] mb-6">
          <h2 className="text-4xl text-center text-[#1f1e26] font-extrabold  ">
            Logistics Solutions{' '}
          </h2>
        </div>
        <div className="max-w-[700px]">
          <p className="text-[#5a5b5b] text-center">
            Streamlined logistics solutions ensuring seamless supply chain
            operations with precision, reliability, and strategic efficiency.
          </p>
        </div>

        <div className="flex-1 grid gap-y-[45px]  grid-rows-[auto_auto] grid-cols-1 md:grid-cols-3 auto-cols-fr grid-flow-row w-full mt-[8px] gap-4">
          {plaincards.map(({ description, imgsrc, title }, index) => (
            <PlainCard
              description={description}
              imgsrc={imgsrc}
              title={title}
              key={index}
            />
          ))}
        </div>
        {/* contact */}
        <div className="w-full">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default WhyWeProvideService;
