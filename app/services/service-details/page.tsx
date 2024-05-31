'use client';
import CallToActionBtn from '@/app/components/calltoactionbutton';
import NavBar from '@/app/components/nav';
import ObserverButtomUp from '@/app/components/oberser';

import Banner from '@/app/components/sections/banner';
import Contact from '@/app/components/sections/home/contact';
import ScaleOut from '@/lib/intersectionobservers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {};

const shippingoptions: {
  text: string;
}[] = [{ text: '' }];

const Page = (props: Props) => {
  const { ref, inView } = useInView({});
  return (
    <div>
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
      {/*  */}
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
      {/* solutions */}
      <div className="px-[30px] md:px-[90px] mx-auto bg-white py-[60px] ">
        <ObserverButtomUp>
          <h2 className="text-4xl font-bold mb-[10px] text-[#1f1e26] ">
            Shipping solutions{' '}
          </h2>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <div className="text-[#333]">
            <p className="mb-[10px]">
              Moreover, advancements in technology and logistics management have
              enhanced the efficiency and transparency of ocean freight
              operations. Real-time tracking systems, digital documentation, and
              streamlined customs processes contribute to smoother cargo flows
              and reduced transit times, ensuring timely delivery and customer
              satisfaction.
            </p>

            <ul className="flex flex-col gap-6" role="list">
              <li className=" flex items-center gap-4">
                <div>
                  <div
                    className=" rounded-full w-3 h-3 border-2 border-orange"
                    style={{ borderRadius: '100%' }}
                  ></div>
                </div>
                <p>
                  Comprehensive route coverage -Navigating the complexities of
                  global trade requires a partner with extensive route coverage.
                  Our network spans major ports worldwide, providing you with
                  access to key markets and destinations.
                </p>
              </li>
              <li className=" flex items-center gap-4">
                <div>
                  <div
                    className=" rounded-full w-3 h-3 border-2 border-orange"
                    style={{ borderRadius: '100%' }}
                  ></div>
                </div>
                <p>
                  Comprehensive route coverage -Navigating the complexities of
                  global trade requires a partner with extensive route coverage.
                  Our network spans major ports worldwide, providing you with
                  access to key markets and destinations.
                </p>
              </li>
            </ul>
            <p className="text-[#666] my-8">
              Experience the reliability, flexibility, and efficiency of our
              ocean freight services. Whether you&apos;re shipping goods across
              the ocean or around the world, we have the expertise and resources
              to meet your needs. Contact us today to learn more about how we
              can help streamline your supply chain and drive your business
              forward.
            </p>
            <div className="flex-1 grid gap-y-[45px]  grid-rows-[auto_auto] grid-cols-1 md:grid-cols-3 auto-cols-fr grid-flow-row w-full mt-[8px] gap-4">
              {/* 1 */}
              <div className="flex gap-[25px] p-4 flex-col  items-center justify-center  bg-white shadow-contact-card text-center">
                <div className="">
                  <Image
                    src={'/assets/contact/ocean.svg'}
                    alt="ocen icon"
                    className="w-16 h-16"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="w-4/5 flex flex-col items-center gap-4">
                  <h4 className="text-[#0c0b1a] text-xl font-semibold">
                    Ocean freight
                  </h4>
                  <p className="text-[#666] text-sm">
                    Efficient logistics tailored to your needs, ensuring
                    seamless and adaptable shipment solutions worldwide.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start bg-white rounded-lg">
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
              <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start bg-white rounded-lg">
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
            </div>
          </div>
        </ObserverButtomUp>
        {/*  WHAT WE PROVIDE */}
        <div className="flex items-center justify-center  md:mx-[30px] flex-col my-[30px] bg-[#f2f6f9] py-[60px]">
          <div className=" items-center flex flex-col gap-4 mb-[20px]">
            <div className="flex justify-center items-center gap-4 mb-6">
              {' '}
              <div className="bg-[#6c6a86] w-8 h-1  " />{' '}
              <h3 className="text-[#6c6a86] text-bold uppercase">WHY WE ARE</h3>
            </div>
            <div className="max-w-[800px] mb-6">
              <h2 className="text-4xl text-center text-[#1f1e26] font-extrabold  ">
                Logistics Solutions{' '}
              </h2>
            </div>
            <div className="max-w-[700px]">
              <p className="text-[#5a5b5b] text-center">
                Streamlined logistics solutions ensuring seamless supply chain
                operations with precision, reliability, and strategic
                efficiency.
              </p>
            </div>

            <div className="flex-1 grid gap-y-[45px]  grid-rows-[auto_auto] grid-cols-1 md:grid-cols-3 auto-cols-fr grid-flow-row w-full mt-[8px] gap-4">
              {/* 1 */}
              <div className="flex gap-[25px] p-4 flex-col  items-center justify-center    text-center">
                <div className="w-full h-52">
                  <Image
                    src={'/assets/home/bigairplane.webp'}
                    alt="ocen icon"
                    className="object-cover w-full h-full"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="w-[90%] flex flex-col items-center gap-4">
                  <h4 className="text-[#0c0b1a] text-xl font-semibold">
                    Ocean freight
                  </h4>
                  <p className="text-[#666] text-sm">
                    Efficient aerial logistics for cargo transport, ensuring
                    connections.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start bg-white rounded-lg">
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
              <div className="flex gap-x-[25px] gap-y-[25px] justify-start items-start bg-white rounded-lg">
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
            </div>
            {/* contact */}
            <div className="w-full">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
