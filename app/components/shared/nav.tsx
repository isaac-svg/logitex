'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PagesDropDown from './pagesdropdown';
import DemoDropDown from './demodropdown';

type Props = {};

const NavBar = (props: Props) => {
  const [nav, setNav] = useState<boolean>(false);
  const [ispageHover, setIsPageHover] = useState<boolean>(false);
  const [isDemoHover, setIsDemoHover] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(true);
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" absolute top-0 left-0 right-0 flex flex-col ">
      <div className="rounded-div flex items-center justify-between h-20 font-bold border-b-[#253036] border-b-[1px] z-[99]  relative px-4">
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
              <Link href={'/service/service-details'}>SERVICE</Link>
            </li>
            <li className="h-full flex items-center w-fit  fancy-link">BLOG</li>
            <li className="h-full flex items-center w-fit  fancy-link">
              <Link href={'contact/contact-three'}>CONTACT</Link>
            </li>
            {/* <li>PAGES</li> */}
          </ul>
        </div>
        <div className="hidden md:inline-block ">
          <p className="text-[#d2d1e9] text-sm font-medium">
            TALK TO AN EXPERT
          </p>{' '}
          <p className="text-orange  text-sm  font-medium">(888) 123 4567</p>
        </div>
        <div className="md:hidden inline-block cursor-pointer ">
          <div
            className={`flex  w-10  items-center relative ${
              nav ? 'openmenu' : ''
            }`}
            onClick={handleNav}
          >
            <span className="w-full bg-[#d2d1e9]   h-[0.2rem] block rounded-sm absolute top-1/2 left-1/2  center-vertical line-1"></span>
            <span className="w-full bg-[#d2d1e9]  h-[0.2rem] block rounded-sm absolute   center-vertical line-2"></span>
            <span className="w-full bg-[#d2d1e9]  block  h-[0.2rem] rounded-sm absolute   center-vertical line-3 top-1/2 left-1/2"></span>
          </div>
        </div>{' '}
      </div>
      <div
        className={`static bg-fixed h-full overflow-auto w-full transition-all  duration-1000 ease-out z-[80] md:hidden  block ${
          nav ? '   duration-200 ' : ''
        }`}
      >
        <div className="overflow-x-hidden  overflow-auto relative z-[99]">
          <ul
            className={`${
              nav
                ? 'md:hidden fixed  top-20 flex flex-col text-xs w-full bg-fixed  ease-in duration-300 z-[99]  bg-white h-screen overflow-y-auto pb-[60px]  '
                : 'fixed top-20   flex flex-col items-start justify-between ease-in duration-300 z-10 w-full'
            } px-2`}
          >
            <li
              className={`py-6 flex flex-col gap-8 transition-all duration-700 ${
                !nav ? 'hidden' : ''
              }`}
            >
              <p
                className=""
                // onPointerEnter={() => setIsDemoHover(true)}
                // onPointerLeave={() => setIsDemoHover(false)}
                onClick={() => {
                  setIsDemoHover(!isDemoHover);
                  setIsPageHover(false);
                }}
              >
                DEMO
              </p>
              <ul
                className={` flex py-4 flex-col gap-8 pl-4 border-y-black border-y-[1px]   ${
                  isDemoHover ? 'inline-block' : 'hidden'
                }`}
              >
                <li>
                  <Link href="/demo/demo-one" className="hover:text-orange">
                    DEMO ONE
                  </Link>
                </li>
                <li>
                  <Link href="/demo/demo-two" className="hover:text-orange">
                    DEMO TWO
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange">
                    DEMO 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`py-6 flex flex-col gap-8 ${!nav ? 'hidden' : ''}`}>
              <p
                onClick={() => {
                  setIsPageHover(!ispageHover);
                  setIsDemoHover(false);
                }}
              >
                PAGES
              </p>
              <ul
                className={`flex py-4 flex-col gap-8 pl-4 border-y-black border-y-[1px]  ${
                  ispageHover ? 'inline-block' : 'hidden'
                }`}
              >
                <li>
                  <Link href="/about/about-one" className="hover:text-orange">
                    ABOUT ONE
                  </Link>
                </li>
                <li>
                  <Link href="/about/about-two" className="hover:text-orange">
                    ABOUT TWO
                  </Link>
                </li>
                <li>
                  <Link href="/about/about-three" className="hover:text-orange">
                    ABOUT THREE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/service-one"
                    className="hover:text-orange"
                  >
                    SERVICE ONE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/service-two"
                    className="hover:text-orange"
                  >
                    SERVICE TWO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/service-details"
                    className="hover:text-orange"
                  >
                    SERVICE DETAILS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/contact-one"
                    className="hover:text-orange"
                  >
                    CONTACT ONE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/contact-two"
                    className="hover:text-orange"
                  >
                    CONTACT TWO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/contact-three"
                    className="hover:text-orange"
                  >
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
