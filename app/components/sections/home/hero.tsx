import React from 'react';
import Banner from '../../shared/banner';
import NavBar from '../../shared/nav';
import ObserverButtomUp from '../../../../lib/oberser';
import Link from 'next/link';
import CallToActionBtn from '../contact/calltoactionbutton';

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <Banner bgimage="/assets/home/herobanner.webp">
      
      <div className=" h-[400px]  mx-auto flex flex-col text-center top-[0%] left-[0%] right-[0%] bottom-auto text-[#d2d1e9] relative mt-5 max-w-3xl gap-8">
        <ObserverButtomUp>
          <p className="text-base leading-6 tracking-wider ">
            YOUR DELIVERY PARTNER
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-wider ">
            Seamless logistics through efficient solutions
          </h1>
        </ObserverButtomUp>
        <ObserverButtomUp threshold={0.4}>
          <p className="text-base w-[70%] mx-auto leading-7 tracking-tight">
            Streamlining supply chains with innovative logistical expertise for
            seamless operations.
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <Link href={'/contact'}>
            <CallToActionBtn text="GET IN TOUCH" />
          </Link>
        </ObserverButtomUp>
      </div>
    </Banner>
  );
};

export default HomeHero;
