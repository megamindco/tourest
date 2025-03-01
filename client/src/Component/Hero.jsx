import React from 'react';
import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';
import shape3 from '../assets/images/shape-3.png';
import heroBanner from '../assets/images/hero-banner.png';
import heroBgBottom from '../assets/images/hero-bg-bottom.png';
import heroBgTop from '../assets/images/hero-bg-top.png';

const Hero = () => {
  return (
    <section
      className="py-16 lg:py-24 lg:pl-20 lg:pr-10 relative bg-no-repeat min-h-screen lg:h-[658px] flex items-center"
      style={{ backgroundImage: ` url(${heroBgTop})`, backgroundPosition: ' top right' }}
    >
      {/* Shapes - Hidden on mobile */}
      <div className="hidden lg:block">
        <img
          src={shape1}
          width="61"
          height="61"
          alt="Vector Shape"
          className="absolute top-[10px] left-[47%] animate-spin"
          style={{ animationDuration: '5s' }}
        />
        <img
          src={shape2}
          width="56"
          height="74"
          alt="Vector Shape"
          className="absolute top-[12%] right-[20px] animate-spin"
          style={{ animationDuration: '5s' }}
        />
        <img
          src={shape3}
          width="57"
          height="72"
          alt="Vector Shape"
          className="absolute left-[45%] bottom-[15%] animate-spin"
          style={{ animationDuration: '5s' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between lg:pr-25">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 lg:max-w-xl mb-12 md:mb-0 text-center md:text-left md:mr-8">
            <p className="font-comforter-brush text-[hsl(47,98%,50%)] text-3xl md:text-4xl mb-4">
              Explore Your Travel
            </p>

            <h2 className="text-[hsl(222,46%,17%)] text-4xl md:text-5xl lg:text-6xl font-medium font-abril-fatface leading-tight mb-4">
              Trusted Travel Agency
            </h2>

            <p className="text-[hsl(223,8%,44%)] text-base md:text-lg leading-relaxed mb-6">
              I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="bg-[hsl(180,98%,31%)] text-white font-bold py-3 px-6 rounded-lg border-2 border-[hsl(180,98%,31%)] hover:bg-transparent hover:text-[hsl(180,98%,31%)] transition-colors duration-300"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="text-[hsl(222,46%,17%)] font-bold py-3 px-6 rounded-lg border-2 border-[hsl(0,0%,69%)] hover:text-[hsl(180,98%,31%)] hover:border-[hsl(180,98%,31%)] transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Banner */}
          <figure className="w-full md:w-1/2 lg:w-[550px] lg:ml-30 mt-12 md:mt-0">
            <img
              src={heroBanner}
              width="686"
              height="812"
              loading="lazy"
              alt="hero banner"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;