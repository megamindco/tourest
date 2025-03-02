import React from 'react';
import aboutBanner from '../assets/images/about-banner.png';

const About = () => {
  return (
    <div>
      <section className="py-10 w-full md:px-25">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-7.5 items-center">
          <div className="mb-12.5 lg:mb-0">
            {/* Section Subtitle */}
            <p
              style={{ fontFamily: 'Merienda, cursive' }}
              className="text-mikado-yellow font-comforter-brush text-3xl mb-6 text-yellow-300"
            >
              About Us
            </p>

            {/* Section Title */}
            <h2 className="text-jet text-4xl font-abril-fatface font-semibold mb-5">
              Explore all tours of the world with us.
            </h2>

            {/* Main Content */}
            <p className="text-battleship-gray text-lg leading-7 mb-7.5">
              Want a break from the hustle and bustle of everyday life? Travel 2 World takes pride in being the most experienced in leisure travel and vacation planning. We help you explore the bright side of life, whether it's domestic or international travel. Our itineraries are designed to make your holidays memorable, hassle-free, and economical.
            </p>

            <p className="text-battleship-gray text-lg leading-7 mb-7.5">
              <b>Travel 2 World is a registered tour operator of Pushpa Gujral Science City, Kapurthala, Punjab, India.</b> We specialize in organizing school, college, and institutional group excursions across India and around the globe. Our packages are tailored to suit every type of tourist, from adventurers and honeymoon couples to business travelers and educational groups.
            </p>

            <p className="text-battleship-gray text-lg leading-7 mb-7.5">
              Our packages are based on themes like adventure, nature and wildlife, beaches, hill stations, culture, pilgrimage, and art & architecture. Whether it's the historic forts of Rajasthan, the beach resorts of Goa, or the scenic beauty of Shimla, Kullu, Manali, Dalhousie, Palampur, and Dharamshala, we ensure the best hospitality for every customer.
            </p>

            {/* Key Features */}
            <ul className="grid gap-5 mb-10">
              <li className="flex items-start gap-3.75">
                <div className="relative flex items-center justify-center bg-[hsl(180,98%,31%)] text-white text-2xl p-4 border h-12 w-12 rounded-full mt-1.25">
                  <ion-icon name="compass" className="absolute text-3xl"></ion-icon>
                </div>
                <div>
                  <h3 className="text-granite-gray font-semibold mb-1.25">Experienced Tour Guides</h3>
                  <p className="text-battleship-gray text-lg leading-7">
                    Our team of experienced guides ensures a smooth and enriching travel experience.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.75">
                <div className="relative flex items-center justify-center bg-[hsl(180,98%,31%)] text-white text-2xl p-4 border h-12 w-12 rounded-full mt-1.25">
                  <ion-icon name="briefcase" className="absolute text-3xl"></ion-icon>
                </div>
                <div>
                  <h3 className="text-granite-gray font-semibold mb-1.25">Affordable Packages</h3>
                  <p className="text-battleship-gray text-lg leading-7">
                    We offer well-designed packages at friendly prices to suit every budget.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.75">
                <div className="relative flex items-center justify-center bg-[hsl(180,98%,31%)] text-white text-2xl p-4 border h-12 w-12 rounded-full mt-1.25">
                  <ion-icon name="umbrella" className="absolute text-white text-3xl"></ion-icon>
                </div>
                <div>
                  <h3 className="text-granite-gray font-semibold mb-1.25">Reliable Services</h3>
                  <p className="text-battleship-gray text-lg leading-7">
                    From planning to execution, we ensure a seamless and reliable travel experience.
                  </p>
                </div>
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <div className="mb-5">
              <a
                href="#"
                className="bg-[hsl(180,98%,31%)] text-white font-bold py-2.5 px-6 border-2 border-[hsl(180,98%,31%)] rounded-lg hover:bg-transparent hover:text-[hsl(180,98%,31%)] transition-colors duration-300"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <figure className="w-full">
            <img
              src={aboutBanner}
              loading="lazy"
              alt="About Us Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default About;