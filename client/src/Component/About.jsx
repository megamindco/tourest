import React from 'react';
import { motion } from 'framer-motion';
import aboutBanner from '../assets/images/about-banner.png';

const About = () => {
  return (
    <section className="py-10 w-full md:px-25 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-12.5 lg:mb-0"
        >
          <p className="text-mikado-yellow text-3xl mb-4 font-semibold" style={{ fontFamily: 'Merienda, cursive' }}>
            About Us
          </p>
          <h2 className="text-jet text-4xl font-bold mb-5">
            Explore all tours of the world with us.
          </h2>
          <p className="text-gray-600 text-lg leading-7 mb-6">
            Want a break from the hustle and bustle of everyday life? Travel 2 World is your trusted companion for leisure travel and vacation planning. Let’s make your journey smooth, enjoyable, and memorable!
          </p>
          <p className="text-gray-600 text-lg leading-7 mb-6">
            <b>Registered tour operator of Pushpa Gujral Science City, Kapurthala.</b> We offer customized travel experiences, catering to adventurers, honeymooners, business travelers, and educational groups.
          </p>
          <ul className="grid gap-6 mb-10">
            {[
              { icon: 'compass', title: 'Experienced Guides', text: 'Our expert guides ensure an enriching experience.' },
              { icon: 'briefcase', title: 'Affordable Packages', text: 'We provide well-crafted trips for every budget.' },
              { icon: 'umbrella', title: 'Reliable Services', text: 'Seamless and hassle-free travel planning.' },
            ].map((feature, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center bg-teal-500 text-white text-2xl p-4 h-12 w-12 rounded-full">
                  <ion-icon name={feature.icon}></ion-icon>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition"
          >
            Book Now
          </motion.a>
        </motion.div>
        
        {/* Image Banner */}
        <motion.figure 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full relative overflow-hidden rounded-lg shadow-lg"
        >
          <motion.img 
            src={aboutBanner} 
            alt="About Us" 
            className="w-full h-full object-cover" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default About;