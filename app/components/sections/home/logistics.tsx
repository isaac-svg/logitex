import React from 'react';
import LogisticsCard from './logisticscard';

type Props = {};

const Logistics = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 auto-cols-fr justify-center items-start">
        <LogisticsCard
          description="Efficient aerial logistics for seamless cargo transport, ensuring swift global connections."
          heading="Warehouse distribution"
          imgsrc="/assets/home/cardimage1.webp"
        />
        <LogisticsCard
          description="Efficient aerial logistics for seamless cargo transport, ensuring swift global connections."
          heading="E-commerce logistics
"
          imgsrc="/assets/home/cardimage2.jpg"
        />
        <LogisticsCard
          description="Efficient aerial logistics for seamless cargo transport, ensuring swift global connections."
          heading="Freight forwarding"
          imgsrc="/assets/home/cardimage3.webp"
        />
        <LogisticsCard
          description="Efficient aerial logistics for seamless cargo transport, ensuring swift global connections."
          heading="Supply chain management"
          imgsrc="/assets/home/cardimage4.webp"
        />
      </div>
    </>
  );
};

export default Logistics;
