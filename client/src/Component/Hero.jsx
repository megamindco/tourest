import React, { useState, useEffect } from 'react';
import { FaHotel, FaPlane, FaUmbrellaBeach, FaTrain, FaBus, FaCar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg1 from '../assets/images/destination-5.jpg';
import heroBg2 from '../assets/images/popular-2.jpg';
import heroBg3 from '../assets/images/popular-3.jpg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [activeTab, setActiveTab] = useState('Hotels');
  const backgrounds = [heroBg1, heroBg2, heroBg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-7">
      <div className="absolute inset-0 z-0 h-[70vh]">
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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl mb-8 text-center"
        >
         
          <h2 style={{ fontFamily: 'Merienda, cursive' }} className="text-[hsl(47,98%,60%)] text-4xl md:text-6xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Travel the World, Create Your Story
            </motion.span>
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
            Explore curated travel packages, create custom packages, and book your dream vacation with ease.
          </p>
          <a href='#destinations'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition"
          >
            Explore Destinations
          </motion.button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {['Hotels', 'Flights', 'Holidays', 'Trains', 'Buses', 'Cabs'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {tab === 'Hotels' && <FaHotel />}
                {tab === 'Flights' && <FaPlane />}
                {tab === 'Holidays' && <FaUmbrellaBeach />}
                {tab === 'Trains' && <FaTrain />}
                {tab === 'Buses' && <FaBus />}
                {tab === 'Cabs' && <FaCar />}
                <span>{tab}</span>
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <motion.input
              type="text"
              placeholder={`Search for ${activeTab.toLowerCase()}...`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Search
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;