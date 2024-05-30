import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center ">
      <p>The page you are looking for cann not be found </p>
      <Link href={'/'}>Go back home</Link>
    </div>
  );
};

export default NotFound;
