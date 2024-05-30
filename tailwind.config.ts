import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': 'url("/assets/home/herobanner.webp")',
        'why-we-are-banner': 'url("/assets/home/bigairplane.webp")',
        'contact-banner':
          'linear-gradient(rgba(12, 11, 26, .98), rgba(12, 11, 26, 0) 77%), url("/assets/contact/banner.webp") ',

        glasmorphism:
          'linear-gradient(rgba(255, 255, 255, .04), rgba(153, 153, 153, .04))',
        'blog-banner': "url('/assets/blog/hero.webp')",
      },
      backgroundPosition: {
        '50%': '50%',
        left: '0 0 50%',
      },
      backgroundSize: {
        bannersize: '2800px',
      },
      backgroundColor: {
        nav: 'rgba(255, 255, 255, 0)',
        innernav: '#ddd',
      },
      borderColor: {
        nav: '#253036',
      },
      boxShadow: {
        'contact-card': '0 30px 50px rgba(101, 87, 79, .12)',
      },
      colors: {
        orange: '#ff471d',
        lightorange: 'rgba(255, 71, 29, .2)',
        body: '#333',
        heading: 'heading',
        contact: '#ff471d',
        'blog-banner': '#d2d1e9',
        navlink: '#d2d1e9',
        hero: '#d2d1e9',
      },
      padding: {
        big: '0 300px 0 0',
      },

      maxWidth: {
        extrabig: '1320px',
      },
      aspectRatio: {
        logcard: 'auto 354 / 211',
        testimonial: 'auto 525 / 700',
      },

      animation: {
        buttomup: 'buttomup 0.3s ease-in forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        leftright: 'leftright  0.3s ease-in forwards',
      },
      keyframes: {
        buttomup: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        topdown: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        leftright: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
