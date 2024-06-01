import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="h-screen w-screen  flex items-center justify-center flex-col gap-8 px-12 bg-slate-900 z-[900] overflow-hidden max-h-screen">
      <h1 className="text-slate-400 text-xl mb-12 text-center">
        The page you are looking for is not implemented
      </h1>

      <p className="text-slate-400 text-xl text-center">
        These are the pages that exist
      </p>
      <ul className="text-blue-500 flex flex-col gap-4 items-center justify-center ">
        <li className="cursor-pointer w-full ">
          <Link href={'/'}>DEMO THREE</Link>
        </li>
        <li className="cursor-pointer w-full">
          <Link href={'/contact/contact-three'}>CONTACT THREE</Link>
        </li>
        <li className="cursor-pointer w-full">
          <Link href={'/blog/blog-three'}>BLOG THREE</Link>
        </li>
        <li className="cursor-pointer w-full">
          <Link href={'/service/service-details'}>SERVICE DETAILS </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
