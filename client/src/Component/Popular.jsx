"use client";
import { FaClock, FaStar, FaStarHalfAlt } from "react-icons/fa";

const TourCard = ({
  image,
  duration,
  price,
  rating,
  location,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
    <div className="relative">
      <img alt={description} className="w-full h-48 object-cover" src={image} />
      <div className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-bold py-1 px-2 rounded">
        <FaClock /> {duration}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="bg-teal-500 text-white text-xs font-bold py-1 px-2 rounded">
          From {price}
        </span>
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
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
  </div>
);

const PopularTours = () => {
  const tours = [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/qOZg4cuCR1kLeRSazbpo6ODFaZ4KlgrcGCHEY7dsoPk.jpg",
      duration: "12 Days",
      price: "$50.00",
      rating: 4.5,
      location: "Kuala Lumpur, Malaysia",
      description:
        "A good traveler has no fixed plans and is not intent on arriving.",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/2ppLkc_tiX1ysj7aNhM4l7-W1r8Vj4t-mVKFousG86E.jpg",
      duration: "12 Days",
      price: "$50.00",
      rating: 4.5,
      location: "Kuala Lumpur, Malaysia",
      description:
        "A good traveler has no fixed plans and is not intent on arriving.",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/cFGdZ2tGHcQH94nvra8g9-xcGbpSpQsgJiHgz3D6sWQ.jpg",
      duration: "12 Days",
      price: "$50.00",
      rating: 4.5,
      location: "Kuala Lumpur, Malaysia",
      description:
        "A good traveler has no fixed plans and is not intent on arriving.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-25">
      <div className="text-center mb-8">
        <h2 className="text-yellow-300 text-4xl font-cursive italic">
          Featured Tours
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2">
          Most Popular Tours
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default PopularTours;
