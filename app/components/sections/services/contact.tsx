import React from 'react';
import ObserverButtomUp from '../../oberser';
import Textarea from '../../textarea';
import Select from '../../Select';
import Image from 'next/image';
import Input from '../../input';
import CallToActionBtn from '../../calltoactionbutton';
import Checkbox from '../../checkbox';

type Props = {};

const ContactService = (props: Props) => {
  return (
    <div className="flex  max-fit flex-col md:flex-row bg-white w-full ">
      <div className="flex-1 h-full flex border-orange border">
        <Image
          src={'/assets/home/womanmarkingbox.webp'}
          alt="banner"
          height={500}
          width={200}
          className="h-full w-full object-cover max-w-full inline-block align-middle"
        />
      </div>
      {/* form  */}
      <div className="flex-1 bg-[#fff] px-4 py-[120px] border">
        <div className="flex flex-col gap-6">
          <ObserverButtomUp>
            <div className="flex items-center gap-4 ">
              {' '}
              <div className="bg-[#d2d1e9] w-8 h-1  " />{' '}
              <h3 className="text-[#d2d1e9] text-bold uppercase">
                SHOPPING COST
              </h3>
            </div>
            <div className="max-w-[800px]">
              <h2 className="text-4xl  text-[#1f1e26] font-extrabold  m-0 ">
                Inquire about cost of shipping{' '}
              </h2>
            </div>
          </ObserverButtomUp>
        </div>

        <form>
          <ObserverButtomUp>
            <div className="flex gap-8">
              <Input placeholder="Department" />
              <Input placeholder="Department" />
            </div>
          </ObserverButtomUp>
          <ObserverButtomUp>
            <div className="flex gap-8">
              <Select placeholder="Freight Category" />
              <Select placeholder="Vehicle Type" />
            </div>
          </ObserverButtomUp>
          <ObserverButtomUp>
            <div className="flex gap-8">
              <Input placeholder="No. of quanity" />
              <Input placeholder="Weight, kg" />
            </div>
            <Textarea placeholder={'Materail details'} />
          </ObserverButtomUp>

          <ObserverButtomUp>
            <div className="flex flex-wrap gap-4 flex-col py-14">
              <Checkbox label="Freezing facility required" />
              <Checkbox label="Shipping insurance" />
              <Checkbox label="Express delivery" />
            </div>
          </ObserverButtomUp>
          <ObserverButtomUp>
            <CallToActionBtn text="SUBMIT ENQUIRY REQUEST" />
          </ObserverButtomUp>
        </form>
      </div>
    </div>
  );
};

export default ContactService;
