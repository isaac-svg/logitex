'use client';

import NavBar from '@/app/components/shared/nav';
import ObserverButtomUp from '@/lib/oberser';
import BlogCard from '@/app/components/sections/blog/card';

import React, { useState } from 'react';

type Props = {};

const Blog = (props: Props) => {
  return (
    <section>
      <div
        className={`bg-blog-banner  bg-scroll  bg-no-repeat relative block bg-50%  h-fit  bg-cover px-[30px] py-[270px]`}
        // style={{ backgroundImage: `${bgimage}` }}
      >
        <NavBar />
        <div className=" h-[400px]   flex flex-col  top-[0%] left-[0%] right-[0%] bottom-auto text-[#d2d1e9] relative mt-5 max-w-xl gap-8">
          <ObserverButtomUp>
            <div className="flex items-center gap-6">
              {' '}
              <div className="bg-[#d2d1e9] w-8 h-[2px]  " />{' '}
              <h1 className="text-base leading-6 tracking-wider ">BLOG</h1>
            </div>
          </ObserverButtomUp>
          <ObserverButtomUp>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-wider ">
              Blog and resources
            </h3>
          </ObserverButtomUp>
          <ObserverButtomUp threshold={0.4}>
            <p className="text-base  mx-auto leading-7 tracking-tight">
              Empowering global commerce with seamless logistics solutions. Our
              commitment: reliability, efficiency, and innovation.{' '}
            </p>
          </ObserverButtomUp>
        </div>
      </div>

      <div className="flex flex-col  flex-[0.6] items-start max-w-3xl mx-auto py-[60px] gap-8">
        <ObserverButtomUp>
          <p className="text-[##0c0b1a] mb-[10px] mt-[20px] leading-10 text-4xl font-extrabold">
            We provide all kinds of logistics services
          </p>
        </ObserverButtomUp>
        <ObserverButtomUp>
          <p className="mb-[10px] text-[#666] font-medium text-base">
            Streamlining global logistics with innovative solutions, we optimize
            efficiency, cut costs, and{' '}
            <span className="text-[#1f1e26]">
              {' '}
              enhance supply chain performance
            </span>{' '}
            to thrive in today&apos;s dynamic market landscape.
          </p>
        </ObserverButtomUp>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-cols-fr justify-center items-start  mx-auto px-[10px] md:pl-[60px] pb-[60px] ">
        <BlogCard
          imgsrc="/assets/blog/sealbox.webp"
          author="By Bruno Benjamin"
          title="From ship to store: exploring the world of ocean freight statistics"
        />
        <BlogCard
          imgsrc="/assets/blog/checkbox.webp"
          author="By Charlotte Nyugen "
          title="Deliverying excelence to your doorstep"
        />
        <BlogCard
          imgsrc="/assets/blog/pullingcart.webp"
          author="By Bruno Benjamin"
          title="Building robust statistics for uncertain times"
        />
        <BlogCard
          imgsrc="/assets/blog/van.webp"
          author="By Bruno Benjamin"
          title="The future of autonomous vehicles in logistics"
        />
        <BlogCard
          imgsrc="/assets/blog/plane.webp"
          author="By Bruno Benjamin"
          title="Green logistics: sustainability in the modern supply chain"
        />
        <BlogCard
          imgsrc="/assets/blog/ship.webp"
          author="By Charlotte Nyugen "
          title="From ship to store: exploring the world of ocean freight statistics"
        />
      </div>
    </section>
  );
};

export default Blog;
