'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DemoDropDown from './demodropdown';
import PagesDropDown from './pagesdropdown';

type Props = {};

const NavBar = (props: Props) => {
  const [nav, setNav] = useState(false);
  const [ispageHover, setIsPageHover] = useState(false);
  const [isDemoHover, setIsDemoHover] = useState(false);
  // const [showdemo, setIsDemoHover] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" absolute top-0 left-0 right-0 flex flex-col ">
      <div className="rounded-div flex items-center justify-between h-20 font-bold border-b-[#253036] border-b-[1px] z-[999]  relative px-4">
        <div className="h-12 w-44 relative  flex items-center justify-center ">
          <Image
            src={'/assets/home/logo.svg'}
            alt="logo"
            className="object-cover  align-middle w-full max-w-full  "
            width={100}
            height={40}
          />
        </div>
        <div className="hidden md:inline-block ">
          <ul className={`flex gap-4 h-20 items-center relative`}>
            <div
              className="fancy-link h-full"
              onPointerEnter={() => setIsDemoHover(true)}
              onPointerLeave={() => setIsDemoHover(false)}
            >
              <li className=" h-full flex items-center w-fit px-4  ">DEMO</li>
              {isDemoHover && <DemoDropDown />}
            </div>
            <div
              className="fancy-link h-full"
              onPointerEnter={() => setIsPageHover(true)}
              onPointerLeave={() => setIsPageHover(false)}
            >
              <li className=" h-full flex items-center w-fit   ">PAGES</li>
              {ispageHover && <PagesDropDown />}
            </div>

            <li className="h-full flex items-center w-fit  fancy-link">
              SERVICE
            </li>
            <li className="h-full flex items-center w-fit  fancy-link">BLOG</li>
            <li className="h-full flex items-center w-fit  fancy-link">
              CONTACT
            </li>
            {/* <li>PAGES</li> */}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <p className="text-[#d2d1e9] text-sm font-medium">
            TALK TO AN EXPERT
          </p>{' '}
          <p className="text-orange  text-sm  font-medium">(888) 123 4567</p>
        </div>
        <div className="md:hidden inline-block cursor-pointer ">
          <div
            className={`flex  w-10 h-10  items-center relative ${
              nav ? 'openmenu' : ''
            }`}
            onClick={handleNav}
          >
            <span className="w-full bg-[#d2d1e9]  h-1 block rounded-sm absolute top-1/2 left-1/2  center-vertical line-1"></span>
            <span className="w-full bg-[#d2d1e9]  h-1 block rounded-sm absolute   center-vertical line-2"></span>
            <span className="w-full bg-[#d2d1e9]  block h-1 rounded-sm absolute   center-vertical line-3 top-1/2 left-1/2"></span>
          </div>
        </div>{' '}
      </div>
      <div
        className={`static  w-full transition-all h-[3000px] duration-1000 ease-out z-[999] md:hidden block ${
          nav ? '   duration-200 ' : ''
        }`}
      >
        <div className="overflow-hidden relative z-50">
          <ul
            className={
              nav
                ? 'md:hidden fixed  top-20 flex flex-col text-xs w-full h-[90%]  ease-in duration-300 z-10 bg-white  '
                : 'fixed top-20  h-[90%] flex flex-col items-start justify-between ease-in duration-300 z-10 w-full'
            }
          >
            <li
              onClick={handleNav}
              onPointerEnter={() => setIsDemoHover(true)}
              onPointerLeave={() => setIsDemoHover(false)}
              className={`py-6 flex flex-col gap-8 transition-all duration-700 ${
                !nav ? 'hidden' : ''
              }`}
            >
              <Link href="demo/demo-three" className="">
                DEMO
              </Link>
              <ul
                className={`ml-8 flex flex-col gap-8 border-black border-[1px] p-4  ${
                  isDemoHover ? 'inline-block' : 'hidden'
                }`}
              >
                <li>
                  <Link href="/demo-one" className="hover:text-orange">
                    DEMO ONE
                  </Link>
                </li>
                <li>
                  <Link href="/demo-two" className="hover:text-orange">
                    DEMO THREE
                  </Link>
                </li>
                <li>
                  <Link href="/demo-three" className="hover:text-orange">
                    DEMO 3
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={handleNav}
              onPointerEnter={() => setIsPageHover(true)}
              onPointerLeave={() => setIsPageHover(false)}
              className={`py-6 flex flex-col gap-8 ${!nav ? 'hidden' : ''}`}
            >
              <Link href="/">PAGES</Link>
              <ul
                className={`ml-8 flex flex-col gap-8 border-black border-[1px] p-4  ${
                  ispageHover ? 'inline-block' : 'hidden'
                }`}
              >
                <li>
                  <Link href="/about-one" className="hover:text-orange">
                    ABOUT ONE
                  </Link>
                </li>
                <li>
                  <Link href="/about-two" className="hover:text-orange">
                    ABOUT TWO
                  </Link>
                </li>
                <li>
                  <Link href="/about-three" className="hover:text-orange">
                    ABOUT THREE
                  </Link>
                </li>
                <li>
                  <Link href="/service-one" className="hover:text-orange">
                    SERVICE ONE
                  </Link>
                </li>
                <li>
                  <Link href="/service-two" className="hover:text-orange">
                    SERVICE TWO
                  </Link>
                </li>
                <li>
                  <Link href="/service-details" className="hover:text-orange">
                    SERVICE DETAILS
                  </Link>
                </li>
                <li>
                  <Link href="/service-details" className="hover:text-orange">
                    CONTACT ONE
                  </Link>
                </li>
                <li>
                  <Link href="/service-details" className="hover:text-orange">
                    CONTACT TWO
                  </Link>
                </li>
                <li>
                  <Link href="/service-details" className="hover:text-orange">
                    CONTACT THREE
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={handleNav} className={`py-6 ${!nav ? 'hidden' : ''}`}>
              <Link href="/service-one" className="hover:text-orange">
                SERVICE
              </Link>
            </li>
            <li onClick={handleNav} className={`py-6 ${!nav ? 'hidden' : ''}`}>
              <Link href="/blog-one" className="hover:text-orange">
                BLOG
              </Link>
            </li>
            <li onClick={handleNav} className={`py-6 ${!nav ? 'hidden' : ''}`}>
              <Link href="/contact-one" className="hover:text-orange">
                CONTACT
              </Link>
            </li>
            <li className=" py-6">{/* < /> */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
