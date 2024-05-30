import Image from 'next/image';
import React from 'react';
import ObserverButtomUp from '../../oberser';
import HorizontalSlideEffect from '../../horizontalslideinobserver';
import Listitem from '../../listitem';

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="flex mt-[60px] flex-col md:flex-row gap-8 items-center justify-between px-[30px]">
      {/* message */}

      <div className="flex flex-col  flex-[0.6] items-start border">
        <ObserverButtomUp>
          <h4 className="uppercase text-[#666] flex-none font-semibold  leading-5  ">
            WHAT WE DO
          </h4>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="text-[##0c0b1a] mb-[10px] mt-[20px] leading-10 text-4xl">
            We provide all kinds of logistics services
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="mb-[10px] text-[#666] font-medium text-base">
            Streamlining global logistics with innovative solutions, we optimize
            efficiency, cut costs, and{' '}
            <span className="text-[#1f1e26]">
              {' '}
              enhance supply chain performance
            </span>{' '}
            to thrive in today&apos;s dynamic market landscape.
          </p>
        </ObserverButtomUp>

        <ul className="text-[#1f1e26] ">
          <HorizontalSlideEffect>
            <Listitem
              imgsrc="/assets/home/check.svg"
              description="Enhance supply chain performance"
            />
          </HorizontalSlideEffect>
          <HorizontalSlideEffect>
            <Listitem
              imgsrc="/assets/home/check.svg"
              description="Empowering businesses"
            />
          </HorizontalSlideEffect>
          <HorizontalSlideEffect>
            <Listitem
              imgsrc="/assets/home/check.svg"
              description="Enhance supply chain performance"
            />
          </HorizontalSlideEffect>
          <HorizontalSlideEffect>
            <Listitem
              imgsrc="/assets/home/check.svg"
              description="Empowering businesses"
            />
          </HorizontalSlideEffect>
        </ul>
      </div>

      {/* pictures */}
      <div className="relative flex-1 border max-w-[630px] w-1/5 h-[360px]">
        {/* bigger image */}
        <div className="hidden md:block absolute h-[422px] w-[422px] top-0 right-0 ">
          <Image
            src={'/assets/home/engineerwedobig.webp'}
            alt="engineer"
            className="w-full h-full "
            height={400}
            width={300}
          />
        </div>

        <div className=" h-[300px] w-[320px] md:absolute  left-10 hidden md:block -bottom-20">
          <HorizontalSlideEffect>
            <Image
              src={'/assets/home/engineerwedosmall.webp'}
              alt="engineer"
              className="w-full h-full"
              height={400}
              width={300}
            />
          </HorizontalSlideEffect>
        </div>

        {/* card bigger screen */}
        <div className="absolute hidden -bottom-[100px] right-[20%] md:flex  z-50 text-white text-xl">
          <ObserverButtomUp>
            <div className="bg-orange right-0 md:flex gap-2 px-6 pt-7 pb-5 flex-col hidden  items-center justify-center z-50 text-white text-xl">
              <h4 className="text-4xl font-bold">452k</h4>
              <p>SAFELY SHIPPED</p>
            </div>
          </ObserverButtomUp>
        </div>
      </div>
      <div className="w-full mx-auto relative h-96 md:hidden ">
        {/* smaller image */}
        <div className="overflow-hidden relative md:hidden w-full h-full border">
          <Image
            src={'/assets/home/engineerwedobig.webp'}
            alt="engineer"
            className=" object-cover w-full h-full "
            height={400}
            width={300}
          />
        </div>
        <div className="absolute md:hidden bottom-0 bg-orange right-0 flex gap-2 px-6 pt-7 pb-5 flex-col  items-center justify-center z-50 text-white text-xl">
          <h4 className="text-4xl font-bold">452k</h4>
          <p>SAFELY SHIPPED</p>
        </div>
        {/* card smaller screen */}
      </div>
    </div>
  );
};

export default WhatWeDo;
