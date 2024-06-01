import React from 'react';

type Props = {
  children: React.ReactNode;
  bgimage: string;
};

const Banner = ({ children, bgimage }: Props) => {
  return (
    <section
      className={`bg-home-banner  bg-scroll  bg-no-repeat relative block bg-50%  h-fit  bg-cover px-[30px] py-[200px]`}
      // style={{ backgroundImage: `${bgimage}` }}
    >
      {children}
    </section>
  );
};

export default Banner;
