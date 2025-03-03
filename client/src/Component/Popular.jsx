"use client";
import { FaClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from '../assets/images/3.jpg';
import img2 from '../assets/images/4.jpg';
import img3 from '../assets/images/singapore_1.jpg';

const TourCard = ({
  image,
  duration,
  rating,
  location,
  description,
  hoverImage, // New prop for the hover image
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Main Image */}
    <div className="relative">
      <img
        alt={description}
        className="w-full h-48 object-cover"
        src={image}
      />
      <div className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-bold py-1 px-2 rounded">
        <FaClock /> {duration}
      </div>
    </div>

    {/* Hover Image Overlay */}
    <motion.div
      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
      whileHover={{ opacity: 1 }}
    >
      <img
        src={hoverImage} // Use the hoverImage prop
        alt={description}
        className="w-full h-48 object-cover"
      />
    </motion.div>

    {/* Card Content */}
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        
        <div className="flex items-center">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => {
              const fullStar = index < Math.floor(rating); // full stars
              const halfStar = index === Math.floor(rating) && rating % 1 !== 0; // half star
              return (
                <span key={index}>
                  {fullStar && <FaStar />}
                  {halfStar && <FaStarHalfAlt />}
                  {!fullStar && !halfStar && (
                    <FaStar className="text-gray-400" />
                  )}
                </span>
              );
            })}
          </div>
          <span className="text-gray-600 text-sm ml-1">({rating})</span>
        </div>
      </div>
      <p className="text-gray-800 font-semibold mb-2">{description}</p>
      <p className="text-gray-600 text-sm mb-4">{location}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="#"
          className="bg-[hsl(180,98%,31%)] text-white font-bold py-2 px-4 rounded-lg hover:bg-[hsl(180,98%,40%)] transition-colors duration-300"
        >
          Enquire Now
        </a>
        <a
          href="#"
          className="bg-white text-[hsl(180,98%,31%)] font-bold py-2 px-4 rounded-lg border border-[hsl(180,98%,31%)] hover:bg-[hsl(180,98%,31%)] hover:text-white transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  </motion.div>
);

const Popular = () => {
  const tours = [
      {
        "image": "https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1581687460_4manali.jpg",
        "hoverImage": img1,
        "duration": "4 Days",
        "rating": 4.7,
        "location": "Manali, India",
        "description": "Nestled in the heart of the Himalayas, Manali offers snow-capped peaks, serene valleys, and thrilling adventures. Experience the charm of Solang Valley, the tranquility of Hadimba Temple, and the thrill of Rohtang Pass."
      },
      {
        "image": "https://tfipost.com/wp-content/uploads/2023/03/Must-Visit-Beautiful-places-in-Shimla-1-750x422.jpg",
        "hoverImage": img2,
        "duration": "3 Days",
        "rating": 4.6,
        "location": "Shimla, India",
        "description": "The 'Queen of Hills' invites you to explore colonial architecture, lush greenery, and misty mountains. Walk along the Mall Road, visit Kufri’s snowy landscapes, and soak in the beauty of this timeless retreat."
      },
      {
        "image": "https://a.cdn-hotels.com/gdcs/production53/d1468/128397b0-57d2-4183-b9fb-bf6a5254d19c.jpg",
        "hoverImage": img3,
        "duration": "12 Days",
        "rating": 4.8,
        "location": "Malaysia & Singapore",
        "description": "A perfect blend of modern marvels and cultural heritage! Explore Kuala Lumpur’s iconic skyline, indulge in Singapore’s vibrant nightlife, and discover exotic islands, thrilling theme parks, and world-class shopping."
      }    
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-25 bg-gray-100 mt-5 mb-5">
      <div className="text-center mb-8">
        <h2
          style={{ fontFamily:'Great Vibes, cursive' }}
          className="text-yellow-300 text-4xl font-cursive italic"
        >
          Featured Tours
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2">
          Most Popular Tours
        </h3>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </motion.div>
    </div>
  );
};

export default Popular;