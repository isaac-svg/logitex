'use client';
import HomeHero from './components/sections/home/hero';
import HomeAbout from './components/sections/home/aboutus';
import Logistics from './components/sections/home/logistics';

import Testimonials from './components/sections/home/testimonials';
import Services from './components/sections/home/services';
import Contact from './components/sections/home/contact';
import WhyWeAre from './components/sections/home/whyweare';
import WhatWeDo from './components/sections/home/whatwedo';

export default function Home() {
  return (
    <main className="w-full overflow-x-clip h-[4000px]">
      <HomeHero />
      <HomeAbout />
      <Logistics />
      <WhatWeDo />
      <WhyWeAre />
      <Contact />
      <Services />
      <Testimonials />
    </main>
  );
}
