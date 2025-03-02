import React, { useState, useEffect } from 'react';
import { FaHotel, FaPlane, FaUmbrellaBeach, FaTrain, FaBus, FaCar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg1 from '../assets/images/destination-5.jpg'; // Add your carousel images
import heroBg2 from '../assets/images/popular-2.jpg';
import heroBg3 from '../assets/images/popular-3.jpg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [activeTab, setActiveTab] = useState('Hotels'); // Default active tab
  const backgrounds = [heroBg1, heroBg2, heroBg3]; // Carousel images

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 h-[70vh]"> {/* Reduced height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
          />
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-[hsla(222,46%,17%,0.8)] via-[hsla(222,46%,17%,0.5)] to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl mb-8"
          >
            <p style={{ fontFamily: 'Merienda, cursive' }}
              className="font-comforter-brush text-[hsl(47,98%,60%)] text-3xl md:text-4xl mb-4"
            >
              Explore Your Travel
            </p>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-abril-fatface leading-tight mb-4">
              Trusted Travel Agency
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg"
          >
            {/* Tabs for Booking Options */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['Hotels', 'Flights', 'Holidays', 'Trains', 'Buses', 'Cabs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === tab
                      ? 'bg-[hsl(180,98%,35%)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab === 'Hotels' && <FaHotel />}
                  {tab === 'Flights' && <FaPlane />}
                  {tab === 'Holidays' && <FaUmbrellaBeach />}
                  {tab === 'Trains' && <FaTrain />}
                  {tab === 'Buses' && <FaBus />}
                  {tab === 'Cabs' && <FaCar />}
                  <span>{tab}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder={`Search for ${activeTab.toLowerCase()}...`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(180,98%,35%)]"
              />
              <button className="w-full md:w-auto bg-[hsl(180,98%,35%)] text-white px-6 py-3 rounded-lg hover:bg-[hsl(180,98%,40%)] transition-colors duration-300">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from 'react';
// import shape1 from '../assets/images/shape-1.png';
// import shape2 from '../assets/images/shape-2.png';
// import shape3 from '../assets/images/shape-3.png';
// import heroBanner from '../assets/images/hero-banner.png';
// import heroBgBottom from '../assets/images/hero-bg-bottom.png';
// import heroBgTop from '../assets/images/hero-bg-top.png';

// const Hero = () => {
//   return (
//     <section
//       className="py-16 lg:py-24 lg:pl-20 lg:pr-10 relative bg-no-repeat min-h-screen lg:h-[658px] flex items-center"
//       style={{ backgroundImage: ` url(${heroBgTop})`, backgroundPosition: ' top right' }}
//     >
//       {/* Shapes - Hidden on mobile */}
//       <div className="hidden lg:block">
//         <img
//           src={shape1}
//           width="61"
//           height="61"
//           alt="Vector Shape"
//           className="absolute top-[10px] left-[47%] animate-spin"
//           style={{ animationDuration: '5s' }}
//         />
//         <img
//           src={shape2}
//           width="56"
//           height="74"
//           alt="Vector Shape"
//           className="absolute top-[12%] right-[20px] animate-spin"
//           style={{ animationDuration: '5s' }}
//         />
//         <img
//           src={shape3}
//           width="57"
//           height="72"
//           alt="Vector Shape"
//           className="absolute left-[45%] bottom-[15%] animate-spin"
//           style={{ animationDuration: '5s' }}
//         />
//       </div>

//       <div className="container mx-auto px-4 md:px-8 relative">
//         <div className="flex flex-col md:flex-row items-center justify-between lg:pr-25">
//           {/* Hero Content */}
//           <div className="w-full md:w-1/2 lg:max-w-xl mb-12 md:mb-0 text-center md:text-left md:mr-8">
//             <p className="font-comforter-brush text-[hsl(47,98%,50%)] text-3xl md:text-4xl mb-4">
//               Explore Your Travel
//             </p>

//             <h2 className="text-[hsl(222,46%,17%)] text-4xl md:text-5xl lg:text-6xl font-medium font-abril-fatface leading-tight mb-4">
//               Trusted Travel Agency
//             </h2>

//             <p className="text-[hsl(223,8%,44%)] text-base md:text-lg leading-relaxed mb-6">
//               I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
//             </p>

//             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//               <a
//                 href="#"
//                 className="bg-[hsl(180,98%,31%)] text-white font-bold py-3 px-6 rounded-lg border-2 border-[hsl(180,98%,31%)] hover:bg-transparent hover:text-[hsl(180,98%,31%)] transition-colors duration-300"
//               >
//                 Contact Us
//               </a>

//               <a
//                 href="#"
//                 className="text-[hsl(222,46%,17%)] font-bold py-3 px-6 rounded-lg border-2 border-[hsl(0,0%,69%)] hover:text-[hsl(180,98%,31%)] hover:border-[hsl(180,98%,31%)] transition-colors duration-300"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Hero Banner */}
//           <figure className="w-full md:w-1/2 lg:w-[550px] lg:ml-30 mt-12 md:mt-0">
//             <img
//               src={heroBanner}
//               width="686"
//               height="812"
//               loading="lazy"
//               alt="hero banner"
//               className="w-full object-cover"
//             />
//           </figure>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;