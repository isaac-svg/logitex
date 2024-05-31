import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center px-12">
      op
      <Link href={'/'} className="text-blue-500">
        {' '}
        The page you are looking for cann not be found . Go back home
      </Link>
    </div>
  );
};

export default NotFound;
