import React from 'react';
import { motion } from 'framer-motion';
import destination1 from '../assets/images/destination-1.jpg';
import destination2 from '../assets/images/destination-2.jpg';
import destination3 from '../assets/images/destination-3.jpg';
import destination4 from '../assets/images/destination-4.jpg';
import destination5 from '../assets/images/destination-5.jpg';

const Destination = () => {
  // Destination data
  const destinations = [
    {
      image: destination1,
      alt: "Malé, Maldives",
      subtitle: "Malé",
      title: "Maldives",
    },
    {
      image: destination2,
      alt: "Bangkok, Thailand",
      subtitle: "Bangkok",
      title: "Thailand",
    },
    {
      image: destination3,
      alt: "Kuala Lumpur, Malaysia",
      subtitle: "Kuala Lumpur",
      title: "Malaysia",
    },
    {
      image: destination4,
      alt: "Kathmandu, Nepal",
      subtitle: "Kathmandu",
      title: "Nepal",
    },
    {
      image: destination5,
      alt: "Jakarta, Indonesia",
      subtitle: "Jakarta",
      title: "Indonesia",
    },
  ];

  return (
    <section className="section destination w-full md:px-25">
      <div className="container mx-auto px-4">
        {/* Section Subtitle */}
        <p
          style={{ fontFamily: 'Merienda, cursive' }}
          className="section-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-3xl text-center mb-4"
        >
          Destinations
        </p>

        {/* Section Title */}
        <h2 className="h2 section-title font-abril-fatface text-[hsl(0,0%,20%)] text-4xl font-medium text-center mb-12">
          Choose Your Place
        </h2>

        {/* Destination List */}
        <ul className="destination-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.li
              key={index}
              className={`w-full ${index >= 3 ? 'lg:col-span-3' : ''}`} // Last two images span 3 columns on large screens
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
                <figure className="card-banner relative">
                  <img
                    src={destination.image}
                    alt={destination.alt}
                    className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
                </figure>

                <div className="card-content absolute bottom-0 left-0 p-6">
                  <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                    {destination.subtitle}
                  </p>
                  <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                    {destination.title}
                  </h3>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Destination;