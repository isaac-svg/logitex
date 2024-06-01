import React from 'react';
import ServiceCard from '../../shared/servicescard';
import ObserverButtomUp from '../../../../lib/oberser';
import CallToActionBtn from '../contact/calltoactionbutton';

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="flex items-center gap-4 justify-center w-full flex-col border pt-[120px] bg-[#f2f6f9]">
      <ObserverButtomUp>
        <div className="flex items-center gap-4 ">
          {' '}
          <div className="bg-[#d2d1e9] w-8 h-1  " />{' '}
          <h3 className="text-[#d2d1e9] text-bold text-xl uppercase">
            BOOKING SERVICE
          </h3>
        </div>
      </ObserverButtomUp>
      <ObserverButtomUp>
        <div className="max-w-[800px]">
          <h2 className="text-4xl text-center text-[#333] font-extrabold  ">
            Easy steps to receive your freight{' '}
          </h2>
        </div>
      </ObserverButtomUp>
      <ObserverButtomUp>
        <p className="text-[#666] text-lg max-w-[800px] w-4/5">
          Streamlining global logistics with innovative solutions, we optimize
          efficiency, cut costs, and{' '}
          <span className="text-[#333]">
            enhance supply chain performance, empowering businesses
          </span>{' '}
          to thrive in today&apos;s dynamic market landscape.
        </p>
      </ObserverButtomUp>
      <ObserverButtomUp>
        <CallToActionBtn text="GET A QUOTE" />
      </ObserverButtomUp>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-cols-fr justify-center items-start w-full border px-[30px]">
        {/* <div className="flex flex-col gap-4 "> */}
        <ServiceCard
          cardbanner="/assets/home/womantying.webp"
          description="Efficient logistics tailored to your needs, ensuring seamless and adaptable shipment solutions worldwide."
          title="Online booking"
          icon="/assets/home/onlinebooking.svg"
        />
        <ServiceCard
          cardbanner="/assets/home/womanmarkingboxsmall.webp"
          description="Efficient logistics tailored to your needs, ensuring seamless and adaptable shipment solutions worldwide."
          title="Agreement conclusion"
          icon="/assets/home/agreement.svg"
        />
        <ServiceCard
          cardbanner="/assets/home/engineerpullingcart.webp"
          description="Efficient logistics tailored to your needs, ensuring seamless and adaptable shipment solutions worldwide."
          title="Packaging and transportation"
          icon="/assets/home/packaging.svg"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Services;
