import React from 'react';
import ObserverButtomUp from '../../../../lib/oberser';
import Textarea from '../contact/textarea';
import Select from '../contact/Select';
import Image from 'next/image';
import Input from '../contact/input';
import CallToActionBtn from '../contact/calltoactionbutton';
import Checkbox from '../contact/checkbox';

type Props = {};

const ContactService = (props: Props) => {
  return (
    <div className="flex px-[30px] max-h-fit flex-col md:flex-row bg-white w-full ">
      <div className="flex-1  flex ">
        <Image
          src={'/assets/home/womanmarkingbox.webp'}
          alt="banner"
          height={1000}
          width={700}
          className="w-full object-cover max-w-full inline-block align-middle"
        />
      </div>
      {/* form  */}
      <div className="flex-1 bg-[#fff] px-4 py-[120px]">
        <div className="flex flex-col gap-8">
          <ObserverButtomUp>
            <div className="flex items-center gap-6 ">
              {' '}
              <div className="bg-[#d2d1e9] w-8 h-[1px]  " />{' '}
              <h3 className="text-[#d2d1e9] text-bold uppercase">
                SHOPPING COST
              </h3>
            </div>
          </ObserverButtomUp>
          <ObserverButtomUp>
            <div className="max-w-[800px]">
              <h2 className="text-4xl  mb-4 text-[#1f1e26] font-extrabold  m-0 ">
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
