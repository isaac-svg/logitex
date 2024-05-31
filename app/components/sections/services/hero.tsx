import React from 'react';
import ObserverButtomUp from '../../oberser';
import NavBar from '../../nav';

type Props = {};

const ServiceHero = (props: Props) => {
  return (
    <section
      className={`bg-service-banner  bg-scroll  bg-no-repeat scale-100relative block bg-50%    bg-cover px-[30px] pt-[100px]  pb-[30px] md:py-[200px] h-fit md:h-full mb-[30px]`}
      // style={{ backgroundImage: `${bgimage}` }}
    >
      {/* <Banner bgimage="/assets/service/banner.webp"> */}
      <NavBar />
      <div className=" h-fit  mr-auto flex flex-col text-left top-[0%] left-[0%] right-[0%] bottom-auto mb-[30px] text-[#d2d1e9] relative mt-5 max-w-3xl gap-4">
        <ObserverButtomUp>
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[#d2d1e9]"></div>
            scale-100{' '}
            <p className="text-base leading-6 tracking-wider ">SERVICE</p>
          </div>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-wider ">
            Warehousing
          </h1>
        </ObserverButtomUp>
        <ObserverButtomUp threshold={0.4}>
          <p className="text-base w-[70%] mr-auto leading-7 tracking-tight">
            Efficient aerial logistics for cargo transport, ensuring
            connections.
          </p>
        </ObserverButtomUp>
      </div>
      {/* </Banner> */}
    </section>
  );
};

export default ServiceHero;
