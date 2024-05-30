import React from 'react';
import ObserverButtomUp from '../../oberser';
import Image from 'next/image';

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="flex gap-8 items-center py-40 flex-col-reverse md:flex-row justify-between">
      <div className="flex-1  px-[30px] w-full  h-[700px] md:pl-[110px] relative ">
        <div className="w-full md:w-[525px] h-full  ">
          <Image
            src={'/assets/home/engineergreencaptablet.webp'}
            alt="engineergreencaptablet"
            className="w-full h-full object-cover max-w-full aspect-testimonial inline-block align-middle"
            height={500}
            width={200}
          />
        </div>
      </div>

      <div className=" mx-auto px-[30px] flex-1  h-fit">
        <ObserverButtomUp>
          <h4 className="uppercase text-[#666] flex-none font-semibold  leading-5  ">
            TESTIMONIALS
          </h4>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="text-[##0c0b1a] mb-[10px] mt-[20px] leading-10 text-4xl">
            Hear what our customers have to say{' '}
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="mb-[10px] text-[#666] font-medium text-base">
            Streamlining global logistics with innovative solutions, we optimize
            efficiency, cut costs, and{' '}
            <span className="text-[#1f1e26]">
              {' '}
              enhance supply chain performance
            </span>{' '}
            to thrive in today&apos;s dynamic market landscape.
          </p>
        </ObserverButtomUp>
      </div>
    </section>
  );
};

export default Testimonials;
