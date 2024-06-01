import Image from 'next/image';
import React from 'react';
import ObserverButtomUp from '../../../../lib/oberser';

type Props = {};

const HeroContact = (props: Props) => {
  return (
    <>
      <div
        className={`bg-contact-banner  bg-scroll  bg-no-repeat relative justify-center   h-fit bg-50% bg-cover block  px-[30px] pt-[120px] pb-[45px] `}
      >
        <div className="relative ">
          <div className=" h-[400px]   flex-col   text-[#d2d1e9] relative  max-w-xl gap-8 flex w-full pl-[100px]   justify-center mb-[10px] aboslute left-0 right-0 bottom-auto  items-start">
            <ObserverButtomUp>
              <div className="flex items-center gap-6">
                {' '}
                <div className="bg-[#d2d1e9] w-8 h-[2px]  " />{' '}
                <h1 className="text-base leading-6 tracking-wider ">BLOG</h1>
              </div>
            </ObserverButtomUp>
            <ObserverButtomUp>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-wider ">
                Contact details
              </h1>
            </ObserverButtomUp>
          </div>
        </div>
      </div>
      <div className="relative mt-[30px] mb-[800px] px-[30px] mx-auto md:m-0">
        <div className="absolute  left-0 right-0  md:-bottom-[180px]    flex items-center h-fit  justify-between flex-col flex-wrap sm:flex-row gap-8 px-[30px] md:m-0 ">
          <div className="rounded-2xl shadow-contact-card flex-1 bg-white flex flex-col gap-4  py-[40px] md:py-[85px] px-[10px] md:px-[40px] justify-center items-center w-full">
            <div className="w-14 h-14">
              <Image
                src={'/assets/contact/email.svg'}
                alt="email"
                className=" max-w-full inline-block  object-cover"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-[#0c0b1a] font-semibold">Contact with email</h3>
            <p className="text-[#495460]">info@example.com</p>
          </div>
          {/* 2 */}
          <div className=" rounded-2xl shadow-contact-card flex-1 bg-white flex flex-col gap-4  py-[40px] md:py-[85px] px-[10px] md:px-[40px] justify-center items-center w-full">
            <div className="w-14 h-14">
              <Image
                src={'/assets/contact/phone.svg'}
                alt="email"
                className=" max-w-full inline-block  object-cover"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-[#0c0b1a] font-semibold">Get in touch</h3>
            <p className="text-[#495460]">(888) 456 7890</p>
          </div>
          {/* 3 */}
          <div className="rounded-2xl shadow-contact-card flex-1 bg-white flex flex-col gap-4  py-[40px] md:py-[85px] px-[10px] md:px-[40px] justify-center items-center w-full">
            <div className="w-14 h-14">
              <Image
                src={'/assets/contact/officelocation.svg'}
                alt="email"
                className=" max-w-full inline-block  object-cover"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-[#0c0b1a] font-semibold">Office Location </h3>
            <p className="text-[#495460]">San Francisco, CA, 94103, USA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContact;
