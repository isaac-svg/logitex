import Image from 'next/image';
import React from 'react';
import CallToActionBtn from '../contact/calltoactionbutton';
import Link from 'next/link';

type Props = {};

const quickLinks = [
  { link: 'Demo' },
  { link: 'About' },
  { link: 'Service ' },
  { link: 'Contact' },
  { link: 'Pricing' },
  { link: 'Blog' },
];
const services = [
  { link: 'Air freight' },
  { link: 'Ocean freight' },
  { link: 'Road freight ' },
  { link: 'Railfreight' },
  { link: 'Warehousing' },
  { link: 'E-commerce logistics' },
];
const resources = [
  { link: 'Lincense' },
  { link: 'Style Guide' },
  { link: 'Change log ' },
  { link: 'Railfreight' },
  { link: 'Warehousing' },
  { link: 'E-commerce logistics' },
];
const Footer = (props: Props) => {
  return (
    <footer className="bg-[#000] pt-[80px] flex flex-col gap-8 text-[#d2d1e9] px-[20px]">
      {/*  */}

      <div className="flex md:flex-row flex-col gap-4 h-fit">
        <div className="flex-[0.6] flex gap-x-8 gap-6 flex-col">
          <div>
            <Image
              src="/assets/home/logo.svg"
              alt=""
              width={200}
              height={100}
            />
          </div>
          <p>
            Streamline logistics with our tailored solutions. From precision
            planning to seamless execution, we optimize every step for efficient
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4">
              <Image
                src={'/assets/about/phone.svg'}
                alt="phone"
                width={20}
                height={20}
              />
              (888) 123 4567
            </li>
            <li className="flex gap-4">
              <Image
                src={'/assets/about/email.svg'}
                alt="phone"
                width={20}
                height={20}
              />
              admin@example.com
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-between flex gap-4 flex-col md:flex-row ">
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick link</h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map(({ link }, index) => (
                <li
                  className="hover:text-orange transition cursor-pointer duration-300 text-base font-medium"
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Our services</h3>
            <ul className="flex flex-col gap-4">
              {services.map(({ link }, index) => (
                <li
                  className="hover:text-orange transition cursor-pointer duration-300 text-base font-medium"
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Resources</h3>
            <ul className="flex flex-col gap-4">
              {resources.map(({ link }, index) => (
                <li
                  className="hover:text-orange transition cursor-pointer duration-300 text-base font-medium"
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="bg-[#1f1e26] px-[50px] py-[70px] flex flex-col md:flex-row justify-between  items-center gap-8">
          <h3 className="font-bold text-2xl">Feel free to contact us</h3>
          <div className="font-light">
            <CallToActionBtn text="Contact now" />
          </div>
        </div>
        <div className=" py-4 flex flex-col md:flex-row justify-between  items-center gap-8">
          <h3 className="font-normal text-sm uppercase">
            DESIGNED BY{' '}
            <Link href={'/'} className="text-orange ">
              RADIANT TEMPLATES
            </Link>
          </h3>
          <h3 className="font-normal text-sm ">
            POWERED BY{' '}
            <Link href={'/'} className="text-orange">
              Webflow
            </Link>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
