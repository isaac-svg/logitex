import Image from 'next/image';
import React from 'react';
import { text } from 'stream/consumers';
import ObserverButtomUp from '../../../../lib/oberser';
import Contact from '../home/contact';
import ShadowCard from '../../ui/shadowcard';
import SolutionListItem from '../../ui/solutionlistitem';

type Props = {};

const solutionsList = [
  {
    text: 'Comprehensive route coverage -Navigating the complexities of global trade requires a partner with extensive route coverage. Our network spans major ports worldwide, providing you with access to key markets and destinations.',
  },
  {
    text: "Flexible container options - Choose from a variety of container options to suit your cargo requirements. Whether you're shipping perishable goods, oversized cargo, or standard shipments, we have the right container solution for you.",
  },
  {
    text: 'Expert customs clearance services - Navigating customs regulations and documentation requirements can be a daunting task. Our team of experts is well-versed in international customs procedures and regulations, ensuring smooth clearance of your cargo at every port of call. Advanced tracking and visibility - Stay informed and in control every step of the way with our advanced tracking and visibility tools. Our state-',
  },
  {
    text: 'of-the-art technology provides real-time updates on the status and location of your cargo, giving you peace of mind and confidence in the reliability of our services.',
  },
];

const cards: {
  title: string;
  description: string;
  imgsrc: string;
}[] = [
  {
    title: 'Online Booking',
    description:
      'Efficient logistics tailored to your needs, ensuring seamless and adaptable shipment solutions worldwide.',
    imgsrc: '/assets/home/onlinebooking.svg',
  },
  {
    title: 'Agreement',
    description:
      'Efficient logistics tailored to your needs, ensuring seamless and adaptable shipment solutions worldwide.',
    imgsrc: '/assets/home/agreement.svg',
  },
  {
    title: 'Transportation',
    description:
      'Efficient logistics tailored to your needs, ensuring seamless and adaptable shipment solutions worldwide.',
    imgsrc: '/assets/home/oceanfreight.svg',
  },
];

const Solutions = (props: Props) => {
  return (
    <div className="px-[30px] md:px-[90px] mx-auto bg-white py-[60px] ">
      <ObserverButtomUp>
        <h2 className="text-4xl font-bold mb-[10px] text-[#1f1e26] ">
          Shipping solutions{' '}
        </h2>
      </ObserverButtomUp>

      <div className="text-[#333]">
        <ObserverButtomUp>
          <p className="mb-[10px]">
            Moreover, advancements in technology and logistics management have
            enhanced the efficiency and transparency of ocean freight
            operations. Real-time tracking systems, digital documentation, and
            streamlined customs processes contribute to smoother cargo flows and
            reduced transit times, ensuring timely delivery and customer
            satisfaction.
          </p>
        </ObserverButtomUp>

        <ObserverButtomUp>
          <ul className="flex flex-col gap-6" role="list">
            {solutionsList.map(({ text }, index) => (
              <SolutionListItem key={index} text={text} />
            ))}
          </ul>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="text-[#666] my-8">
            Experience the reliability, flexibility, and efficiency of our ocean
            freight services. Whether you&apos;re shipping goods across the
            ocean or around the world, we have the expertise and resources to
            meet your needs. Contact us today to learn more about how we can
            help streamline your supply chain and drive your business forward.
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <div className="flex-1 grid gap-y-[45px]  grid-rows-[auto_auto] grid-cols-1 md:grid-cols-3 auto-cols-fr grid-flow-row w-full mt-[8px] gap-4">
            {cards.map(({ description, imgsrc, title }, index) => (
              <ShadowCard
                description={description}
                imgsrc={imgsrc}
                title={title}
                key={index}
              />
            ))}
          </div>
        </ObserverButtomUp>
      </div>
    </div>
  );
};

export default Solutions;
