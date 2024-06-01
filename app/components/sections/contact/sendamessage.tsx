import React from 'react';
import ContactInput, { ContactSelect, ContactTextarea } from './contact';
import Image from 'next/image';

type Props = {};

const SendAMessage = (props: Props) => {
  return (
    <div className="mt-[300px] flex flex-col md:flex-row gap-8 items-center justify-between h-fit px-[30px] mx-auto">
      <div className="flex-1 ">
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
        <div className="w-full h-fit md:h-[500px]   border">
          <Image
            src={'/assets/contact/secondarybanner.webp'}
            alt="secondary banner"
            className="object-fit w-full h-full max-w-full align-middle inline-block "
            width={300}
            height={500}
          />
        </div>
      </div>
      <div className="flex-1 ">
        <form className="flex flex-col md:flex-row items-center gap-8 z-10">
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
        </form>
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
  );
};

export default SendAMessage;
