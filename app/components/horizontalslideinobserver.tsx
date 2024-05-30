import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
};

const HorizontalSlideEffect = ({ children }: Props) => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-300 ease-in transform re${
        inView
          ? 'opacity-100 translate-x-0 animate-leftright'
          : 'opacity-0 -translate-x-[40px]'
      }`}
    >
      {children}
    </div>
  );
};

export default HorizontalSlideEffect;
