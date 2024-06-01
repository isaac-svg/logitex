'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
  threshold?: number;
};
import { useInView } from 'react-intersection-observer';

const ObserverButtomUp = ({ children, threshold }: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-300 ease-in transform ${
        inView
          ? 'opacity-100 translate-y-0 animate-buttomup'
          : 'opacity-0 translate-y-[40px]'
      }`}
    >
      {children}
    </div>
  );
};

export default ObserverButtomUp;
