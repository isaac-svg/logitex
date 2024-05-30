'use client';
import Banner from './components/sections/banner';
import NavBar from './components/nav';
import { InView } from 'react-intersection-observer';
import ObserverButtomUp from './components/oberser';
import CallToActionBtn from './components/calltoactionbutton';
import Link from 'next/link';
import Carousel from './components/carousel';
import HomeHero from './components/sections/home/hero';
import Image from 'next/image';
import LogisticsCard from './components/sections/home/logisticscard';
import HomeAbout from './components/sections/home/aboutus';
import Logistics from './components/sections/home/logistics';
import HorizontalSlideEffect from './components/horizontalslideinobserver';
import Listitem from './components/listitem';
import Glassmorphismcard from './components/glassmorphismcard';
import Input from './components/input';
import Select from './components/Select';
import Textarea from './components/textarea';
import Checkbox from './components/checkbox';
import ServiceCard from './components/servicescard';
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
