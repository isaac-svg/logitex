'use client';

import ContactService from '@/app/components/sections/services/contact';
import ServiceHero from '@/app/components/sections/services/hero';
import Service from '@/app/components/sections/services/service';
import Solutions from '@/app/components/sections/services/solutions';
import WhyWeProvideService from '@/app/components/sections/services/whyweprovide';

import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {};

const shippingoptions: {
  text: string;
}[] = [{ text: '' }];

const Page = (props: Props) => {
  const { ref, inView } = useInView({});
  return (
    <div>
      <ServiceHero />
      {/*  */}
      <Service />

      {/* solutions */}
      <Solutions />
      <WhyWeProvideService />
      <ContactService />
    </div>
  );
};

export default Page;
