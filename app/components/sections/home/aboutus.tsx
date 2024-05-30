import Image from 'next/image';
import React from 'react';
import ObserverButtomUp from '../../oberser';

type Props = {};

const HomeAbout = (props: Props) => {
  return (
    <>
      <div className="bg-[#0c0b1a] w-full h-fit py-[120px] flex flex-col md:flex-row gap-12 ">
        {/* image */}
        <div className="flex-[0.8] border relative">
          <div className=" w-4/5 relative mx-auto ">
            <Image
              src={'/assets/home/shipwithbanner.webp'}
              alt="about us"
              className=" h-fit w-full object-cover mx-auto"
              height={500}
              width={200}
            />
            <div className="absolute bg-orange w-[110%] h-44 bottom-12 -left-[10%] right-0 z-50 before:bg-red-300 before:h-full flex items-center text-white  gap-4">
              <div className="flex flex-1 border flex-col gap-2 text-center">
                <h4 className="text-5xl font-medium">452k</h4>
                <p className="text-base font-bold">SAFELY SHIPPED</p>
              </div>
              <div className="w-[2px] h-4/5 bg-white" />
              <div className="flex flex-1 border flex-col gap-2 text-center">
                <h4 className="text-5xl font-medium">14k</h4>
                <p className="text-base font-bold">COMPANY WE HELP</p>
              </div>
            </div>
          </div>
        </div>
        {/* about */}
        <div className="flex  px-[5%] mx-auto md:px-0 items-center text-[#d2d1e9] justify-start flex-1 ">
          <ObserverButtomUp>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 ">
                {' '}
                <div className="bg-[#d2d1e9] w-8 h-1  " />{' '}
                <h3 className="text-[#d2d1e9] text-bold">ABOUT US</h3>
              </div>
              <div className="max-w-[630px]">
                <h2 className="text-4xl font-extrabold  ">
                  Driving efficiency in global logistics
                </h2>
              </div>
              <div className="max-w-[630px]">
                <p className="text-[#d2d1e9] ">
                  Streamlining global logistics with innovative solutions, we
                  optimize efficiency, cut costs, and enhance supply chain
                  performance, empowering businesses to thrive in today&apos;s
                  dynamic market landscape.
                </p>
              </div>
              {/* vision/mission */}
              <div className="flex flex-col md:flex-row gap-4 ">
                <div>
                  <Image
                    src={'/assets/home/vision.svg'}
                    alt="vision icon"
                    className="w-10 h-10"
                    height={100}
                    width={100}
                  />
                  <h4 className="my-4 text-lg font-bold">Our Vision</h4>
                  <p>
                    Streamlining expenses to maximize efficiency, driving
                    sustainable operational excellence.
                  </p>
                </div>
                <div className="w-auto h-1 md:w-1 md:h-auto bg-[#d2d1e9]" />
                <div>
                  <Image
                    src={'/assets/home/vision.svg'}
                    alt="vision icon"
                    className="w-10 h-10"
                    height={100}
                    width={100}
                  />
                  <h4 className="my-4 text-lg font-bold">Our Vision</h4>
                  <p>
                    Streamlining expenses to maximize efficiency, driving
                    sustainable operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </ObserverButtomUp>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
