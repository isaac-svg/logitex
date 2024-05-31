import Image from 'next/image';
import React from 'react';
import ObserverButtomUp from '../../oberser';
import { useInView } from 'react-intersection-observer';

type Props = {};

const Service = (props: Props) => {
  const { ref, inView } = useInView({});

  return (
    <div>
      <div className="flex flex-col gap-4 mt-24 md:px-[90px] px-[30px] ">
        <ObserverButtomUp>
          <h2 className="text-4xl font-bold text-[#1f1e26] ">
            Our ocean freight services
          </h2>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="mb-[10px] text-base text-[#333]">
            Ocean freight, the backbone of global trade, represents the
            transportation of goods via sea routes, encompassing vast cargo
            volumes across oceans and continents. Leveraging immense vessels
            ranging from container ships to bulk carriers, ocean freight offers
            unparalleled capacity and efficiency for transporting goods of all
            sizes and types. With its extensive network of ports and shipping
            lanes, ocean freight provides businesses with cost-effective and
            reliable solutions for international trade. Whether it&apos;s raw
            materials, manufactured goods, or consumer products, ocean freight
            facilitates the movement of goods on a global scale, connecting
            suppliers, manufacturers, and consumers across distant shores
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="mb-[10px] text-base text-[#333]">
            Ocean freight services encompass a spectrum of options tailored to
            meet diverse shipping needs. From Full Container Load (FCL) to Less
            than Container Load (LCL), as well as specialized services like
            temperature-controlled shipping for perishable goods or oversized
            cargo handling, ocean freight offers flexibility and scalability to
            accommodate various cargo requirements.
          </p>
        </ObserverButtomUp>
      </div>

      <div className="px-[30px] mx-auto">
        <div className=" flex  mx-auto h-80 md:h-[32rem]  my-24  relative">
          <Image
            ref={ref}
            src={'/assets/service/crane.webp'}
            alt="crane"
            className={`object-cover w-full transition-transform  ${
              inView ? 'animate-scaleup' : ''
            } `}
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
