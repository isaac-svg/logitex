import CallToActionBtn from '@/app/components/calltoactionbutton';
import NavBar from '@/app/components/nav';
import ObserverButtomUp from '@/app/components/oberser';
import ContactInput, {
  ContactSelect,
  ContactTextarea,
} from '@/app/components/sections/contact/contact';
import Image from 'next/image';
import React from 'react';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <section>
      <div
        className={`bg-contact-banner  bg-scroll  bg-no-repeat relative justify-center   h-fit bg-50% bg-cover block  px-[30px] pt-[120px] pb-[45px] `}
      >
        <NavBar />
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
          <div className="absolute  left-0 right-0 -bottom-1/2    flex items-center justify-between flex-col flex-wrap sm:flex-row gap-8">
            <div className="rounded-2xl shadow-contact-card flex-1 bg-white flex flex-col gap-4 py-[85px] px-[40px] justify-center items-center">
              <div className="w-14 h-14">
                <Image
                  src={'/assets/contact/email.svg'}
                  alt="email"
                  className=" max-w-full inline-block  object-cover"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-[#0c0b1a] font-semibold">
                Contact with email
              </h3>
              <p className="text-[#495460]">info@example.com</p>
            </div>
            {/* 2 */}
            <div className="rounded-2xl shadow-contact-card flex-1 bg-white flex flex-col gap-4 py-[85px] px-[40px] justify-center items-center">
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
            <div className="rounded-2xl shadow-contact-card flex-1 bg-white flex flex-col gap-4 py-[85px] px-[40px] justify-center items-center">
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
      </div>

      {/* contact form and banner */}
      <div className="mt-[300px] flex flex-col md:flex-row gap-8 items-center justify-between h-fit px-[30px] mx-auto">
        <div className="flex-1 border">
          <div className="flex flex-col gap-4 mb-4">
            <h3 className="text-orange font-semibold text-base uppercase leading-6">
              SEND A MESSAGE
            </h3>
            <h1 className="text-[#060815] font-semibold text-4xl">
              Let&apos;s stay connected with us
            </h1>
            <p className="text-[#495460]">
              {' '}
              Adipiscing cursus odio sit neque. Sed id lacus volutpat imperdiet
              quam.
            </p>
          </div>
          {/* banner */}
          <div className="w-full h-[600px]   border">
            <Image
              src={'/assets/contact/secondarybanner.webp'}
              alt="secondary banner"
              className="object-fit w-full h-full max-w-full align-middle inline-block "
              width={300}
              height={500}
            />
          </div>
        </div>
        <div className="flex-1 border">
          <div className="flex flex-col md:flex-row items-center gap-8 ">
            <div className="w-full flex gap-4">
              <div className="w-full flex-1">
                <ContactInput
                  classes="flex-1 "
                  placeholder="Enter your name"
                  label="Name"
                />
              </div>
              <div className="flex-1">
                <ContactInput
                  classes="flex-1"
                  placeholder="example@email.com"
                  label="Email address"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row items-center gap-4 ">
            <div className="w-full flex gap-4">
              <div className="w-full flex-1">
                <ContactInput
                  classes="flex-1 "
                  placeholder="888-123-4567"
                  label="Phone number"
                />
              </div>
              <div className="flex-1">
                <ContactSelect
                  placeholder="Type of transport"
                  label="Road transport"
                />
              </div>
            </div>
          </div>
          <div>
            <ContactTextarea
              placeholder="Please type your messag here"
              label="Message"
            />
          </div>
          <div className="w-full flex-1">
            <button className="bg-orange border-orange border-[1px] text-white uppercase text-center tracking-tight py-[9px] px-[15px] cursor-pointer inline-block hover:bg-lightorange transition-colors duration-300 w-full mt-8">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* why we are  */}
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
              Effortlessly monitor your parcels&apos; journeys with our
              intuitive platform, ensuring seamless delivery every time.
            </p>
          </ObserverButtomUp>
          <ObserverButtomUp>
            <CallToActionBtn text="CONTACT US" />
          </ObserverButtomUp>
        </div>
        <div className="flex-1 grid gap-y-[45px]  grid-rows-[auto_auto] grid-cols-2 auto-cols-fr grid-flow-row max-w-[699px] mt-[8px]">
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
    </section>
  );
};

export default ContactPage;
