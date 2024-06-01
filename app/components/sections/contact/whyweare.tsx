import Image from 'next/image';
import React from 'react';
import ObserverButtomUp from '../../../../lib/oberser';
import CallToActionBtn from './calltoactionbutton';

type Props = {};

const ContactWhyWeAre = (props: Props) => {
  return (
    <div className="flex   flex-col md:flex-row gap-8 py-[90px] px-[30px] ">
      <div className="flex-1 flex flex-col gap-6">
        <ObserverButtomUp>
          <div className="flex items-center gap-4 ">
            {' '}
            <div className="bg-[#d2d1e9] w-8 h-1  " />{' '}
            <h3 className="text-[#d2d1e9] text-bold text-xl uppercase">
              WHY WE ARE
            </h3>
          </div>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <div className="max-w-[800px]">
            <h2 className="text-4xl  text-[#333] font-extrabold  ">
              We provide all kinds of logistics services{' '}
            </h2>
          </div>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="text-[#666] text-lg max-w-[800px] w-4/5">
            Effortlessly monitor your parcels&apos; journeys with our intuitive
            platform, ensuring seamless delivery every time.
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <CallToActionBtn text="CONTACT US" />
        </ObserverButtomUp>
      </div>
      <div className="flex-1 grid gap-y-[45px]  grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 auto-cols-fr grid-flow-row max-w-[699px] mt-[8px]">
        {/* 1 */}
        <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start">
          <div className="">
            <Image
              src={'/assets/contact/ocean.svg'}
              alt="ocen icon"
              className="w-32 h-32"
              width={60}
              height={60}
            />
          </div>
          <div className="max-w-[250px] flex flex-col gap-4">
            <h4 className="text-[#0c0b1a] text-xl font-semibold">
              Ocean freight
            </h4>
            <p className="text-[#666] text-base">
              Efficiently moving businesses forward: our seamless land
              reliability and convenience.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start">
          <div className="">
            <Image
              src={'/assets/contact/road.svg'}
              alt="ocen icon"
              className="w-32 h-32"
              width={60}
              height={60}
            />
          </div>
          <div className="max-w-[250px] flex flex-col gap-4">
            <h4 className="text-[#0c0b1a] text-xl font-semibold">
              Road freight
            </h4>
            <p className="text-[#666] text-base">
              Efficiently moving businesses forward: our seamless land
              reliability and convenience.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start">
          <div className="">
            <Image
              src={'/assets/contact/rail.svg'}
              alt="ocen icon"
              className="w-32 h-32"
              width={60}
              height={60}
            />
          </div>
          <div className="max-w-[250px] flex flex-col gap-4">
            <h4 className="text-[#0c0b1a] text-xl font-semibold">
              Rail freight
            </h4>
            <p className="text-[#666] text-base">
              Efficiently moving businesses forward: our seamless land
              reliability and convenience.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start">
          <div className="">
            <Image
              src={'/assets/contact/air.svg'}
              alt="ocen icon"
              className="w-32 h-32"
              width={60}
              height={60}
            />
          </div>
          <div className="max-w-[250px] flex flex-col gap-4">
            <h4 className="text-[#0c0b1a] text-xl font-semibold">
              Air freight
            </h4>
            <p className="text-[#666] text-base">
              Efficiently moving businesses forward: our seamless land
              reliability and convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWhyWeAre;
