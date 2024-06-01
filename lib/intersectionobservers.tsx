'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  threshold: number;
};

const ScaleOut = ({
  children,
  threshold,
}: {
  children: React.ReactNode;
  threshold?: number;
}) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  //
  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-in transform  bg-red-950 inline-block text-orange h-full w-full border-lime-900 border-4   ${
        inView ? '  animate-scaleup' : ' '
      }`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error,
      non modi voluptas a, sapiente voluptatibus consectetur odio autem expedita
      sed voluptatum eum culpa quo corporis impedit nemo provident fugiat!
      {children}
    </div>
  );
};

export default ScaleOut;
