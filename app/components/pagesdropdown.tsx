import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const listItemsCol1 = [
  { text: 'about one', url: '/about/about-one' },
  { text: 'about two', url: '/about/about-two' },
  { text: 'about three', url: '/about/about-three' },
  { text: 'service one', url: '/service/service-one' },
  { text: 'service two', url: '/service/service-two' },
  { text: 'service details', url: '/service/service-details' },
];
const listItemsCol2 = [
  { text: 'contact one', url: '/contact/contact-one' },
  { text: 'contact two', url: '/contact/contact-two' },
  { text: 'contact three', url: '/contact/contact-three' },
  { text: 'pricing one', url: '/pricing/pricing-one' },
  { text: 'pricing two', url: '/pricing/pricing-two' },
  { text: 'pricing three', url: '/pricing/pricing-three' },
];

const listItemsCol3 = [
  { text: 'blog one', url: '/blog/blog-one' },
  { text: 'blog two', url: '/blog/blog-two' },
  { text: 'blog three', url: '/blog/blog-three' },
  { text: 'blog details', url: '/blog/blog-details' },
  { text: 'passord', url: '/passord/passord' },
  { text: '404', url: '/404/404' },
];
const PagesDropDown = (props: Props) => {
  return (
    <ul className=" gap-4 bg-[#1f1e2699] backdrop-blur-[20px]  mx-auto -left-full  absolute max-w-[1200px] h-fit  top-full py-[60px] px-[40px] flex">
      <li className="flex-1  flex flex-col gap-4 uppercase">
        {listItemsCol1.map(({ text, url }, index) => (
          <div
            key={index}
            className="flex gap-2 hover:bg-[#1f1e2e] p-4 hover:text-orange justify-between items-center w-60 cursor-pointer"
          >
            <Link href={url}>{text}</Link>
            <Image
              src="/assets/home/leftarrow.svg"
              alt="left arrow"
              className="w-7 h-4 object-fit align-middle "
              width={50}
              height={25}
            />
          </div>
        ))}
      </li>
      <li className="flex-1 flex flex-col gap-4 uppercase">
        {listItemsCol2.map(({ text, url }, index) => (
          <div
            key={index}
            className="flex gap-2 hover:bg-[#1f1e2e] p-4 hover:text-orange justify-between items-center w-60 cursor-pointer"
          >
            <Link href={url}>{text}</Link>
            <Image
              src="/assets/home/leftarrow.svg"
              alt="left arrow"
              className="w-7 h-4 object-fit align-middle "
              width={50}
              height={25}
            />
          </div>
        ))}
      </li>

      <li className="flex-1  flex flex-col gap-4 uppercase">
        {listItemsCol3.map(({ text, url }, index) => (
          <div
            key={index}
            className="flex gap-2 hover:bg-[#1f1e2e] p-4 hover:text-orange justify-between items-center w-60 cursor-pointer"
          >
            <Link href={url}>{text}</Link>
            <Image
              src="/assets/home/leftarrow.svg"
              alt="left arrow"
              className="w-7 h-4 object-fit align-middle "
              width={50}
              height={25}
            />
          </div>
        ))}
      </li>
    </ul>
  );
};

export default PagesDropDown;
