import React from 'react';
import Glassmorphismcard from '../../glassmorphismcard';

type Props = {};

const WhyWeAre = (props: Props) => {
  return (
    <section
      className={`bg-why-we-are-banner  bg-scroll  bg-no-repeat relative  bg-50% mt-[200px]  h-fit  bg-cover px-[30px] py-[200px] block`}
      // style={{ backgroundImage: `/assets/home/bigairplane.webp` }}
    >
      <div className="flex items-center gap-4 justify-center w-full flex-col  ">
        <div className="flex items-center gap-4 ">
          {' '}
          <div className="bg-[#d2d1e9] w-8 h-1  " />{' '}
          <h3 className="text-[#d2d1e9] text-bold uppercase">WHY WE ARE</h3>
        </div>
        <div className="max-w-[800px]">
          <h2 className="text-4xl text-center text-[#d2d1e9] font-extrabold  ">
            We provide all kinds of logistics services
          </h2>
        </div>
        <div className="max-w-[800px]">
          <p className="text-[#d2d1e9]">
            Effortlessly monitor your parcels&apos; journeys with our intuitive
            platform, ensuring seamless delivery every time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-cols-fr justify-center items-start w-full ">
          {/* card */}

          <Glassmorphismcard iconsrc="/assets/home/oceanfreight.svg" />
          <Glassmorphismcard iconsrc="/assets/home/airfreight.svg" />
          <Glassmorphismcard iconsrc="/assets/home/railfreight.svg" />
          <Glassmorphismcard iconsrc="/assets/home/roadfreight.svg" />
        </div>
      </div>
    </section>
  );
};

export default WhyWeAre;
