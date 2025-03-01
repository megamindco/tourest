import React from 'react';
import destination1 from '../assets/images/destination-1.jpg';
import destination2 from '../assets/images/destination-2.jpg';
import destination3 from '../assets/images/destination-3.jpg';
import destination4 from '../assets/images/destination-4.jpg';
import destination5 from '../assets/images/destination-5.jpg';

const Destination = () => {
  return (
    <section className="section destination w-full md:px-25 py-[50px]">
      <div className="container mx-auto px-4">
        {/* Section Subtitle */}
        <p className="section-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-3xl text-center mb-4">
          Destinations
        </p>

        {/* Section Title */}
        <h2 className="h2 section-title font-abril-fatface text-[hsl(0,0%,20%)] text-4xl font-medium text-center mb-12">
          Choose Your Place
        </h2>

        {/* Destination List */}
        <ul className="destination-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Destination Card 1 */}
          <li className="w-full">
            <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
              <figure className="card-banner relative">
                <img
                  src={destination1}
                  alt="Malé, Maldives"
                  className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
              </figure>

              <div className="card-content absolute bottom-0 left-0 p-6">
                <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                  Malé
                </p>
                <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                  Maldives
                </h3>
              </div>
            </a>
          </li>

          {/* Destination Card 2 */}
          <li className="w-full">
            <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
              <figure className="card-banner relative">
                <img
                  src={destination2}
                  alt="Bangkok, Thailand"
                  className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
              </figure>

              <div className="card-content absolute bottom-0 left-0 p-6">
                <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                  Bangkok
                </p>
                <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                  Thailand
                </h3>
              </div>
            </a>
          </li>

          {/* Destination Card 3 */}
          <li className="w-full md:col-span-2 lg:col-span-1">
            <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
              <figure className="card-banner relative">
                <img
                  src={destination3}
                  alt="Kuala Lumpur, Malaysia"
                  className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
              </figure>

              <div className="card-content absolute bottom-0 left-0 p-6">
                <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                  Kuala Lumpur
                </p>
                <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                  Malaysia
                </h3>
              </div>
            </a>
          </li>

          {/* Destination Card 4 */}
          <li className="w-full md:col-span-2 lg:col-span-1">
            <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
              <figure className="card-banner relative">
                <img
                  src={destination4}
                  alt="Kathmandu, Nepal"
                  className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
              </figure>

              <div className="card-content absolute bottom-0 left-0 p-6">
                <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                  Kathmandu
                </p>
                <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                  Nepal
                </h3>
              </div>
            </a>
          </li>

          {/* Destination Card 5 */}
          <li className="w-full md:col-span-2 lg:col-span-1">
            <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
              <figure className="card-banner relative">
                <img
                  src={destination5}
                  alt="Jakarta, Indonesia"
                  className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
              </figure>

              <div className="card-content absolute bottom-0 left-0 p-6">
                <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                  Jakarta
                </p>
                <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                  Indonesia
                </h3>
              </div>
            </a>
          </li>
                    {/* Destination Card 5 */}
                    <li className="w-full md:col-span-2 lg:col-span-1">
            <a href="#" className="destination-card block relative overflow-hidden rounded-lg group">
              <figure className="card-banner relative">
                <img
                  src={destination5}
                  alt="Jakarta, Indonesia"
                  className="img-cover w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(222,46%,17%,0.7)] to-transparent"></div>
              </figure>

              <div className="card-content absolute bottom-0 left-0 p-6">
                <p className="card-subtitle font-comforter-brush text-[hsl(47,98%,50%)] text-2xl">
                  Jakarta
                </p>
                <h3 className="h3 card-title font-abril-fatface text-[hsl(0,0%,100%)] text-3xl">
                  Indonesia
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Destination;