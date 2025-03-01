import React from 'react'
import aboutBanner from '../assets/images/about-banner.png'

const About = () => {
  return (
    <div>
      <section className="py-10 w-full md:px-25">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-7.5 items-center">

          <div className="mb-12.5 lg:mb-0">

            <p className="text-mikado-yellow font-comforter-brush text-4xl mb-6 text-yellow-300">About Us</p>

            <h2 className="text-jet text-4xl font-abril-fatface font-semibold mb-5">Explore all tour of the world with us.</h2>

            <p className="text-battleship-gray text-lg leading-7 mb-7.5">
              Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
              randomised words
              which don't look even slightly believable.
            </p>

            <ul className="grid gap-5 mb-10">

              <li className="flex items-start gap-3.75">

                <div className="relative flex items-center justify-center bg-[hsl(180,98%,31%)] text-white text-2xl p-4 border h-12 w-12 rounded-full mt-1.25">
                  <ion-icon name="compass" className="absolute text-3xl"></ion-icon>
                </div>

                <div>
                  <h3 className="text-granite-gray font-semibold mb-1.25">Tour guide</h3>

                  <p className="text-battleship-gray text-lg leading-7">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

              <li className="flex items-start gap-3.75">

                <div className="relative flex items-center justify-center bg-[hsl(180,98%,31%)] text-white text-2xl p-4 border h-12 w-12 rounded-full mt-1.25">
                  <ion-icon name="briefcase" className="absolute text-3xl"></ion-icon>
                </div>

                <div>
                  <h3 className="text-granite-gray font-semibold mb-1.25">Friendly price</h3>

                  <p className="text-battleship-gray text-lg leading-7">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

              <li className="flex items-start gap-3.75">

                <div className="relative flex items-center justify-center bg-[hsl(180,98%,31%)] text-white text-2xl p-4 border h-12 w-12 rounded-full mt-1.25">
                  <ion-icon name="umbrella" className="absolute text-white text-3xl"></ion-icon>
                </div>

                <div>
                  <h3 className="text-granite-gray font-semibold mb-1.25">Reliable tour</h3>

                  <p className="text-battleship-gray text-lg leading-7">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

            </ul>

            <div className='mb-5'>
              <a href="#" className="bg-[hsl(180,98%,31%)] text-white font-bold py-2.5 px-6 border-2 border-[hsl(180,98%,31%)] rounded-lg hover:bg-transparent hover:text-[hsl(180,98%,31%)] ">Booking Now</a>
            </div>


          </div>

          <figure className="w-full">
            <img src={aboutBanner} loading="lazy" alt="" className="w-full h-147" />
          </figure>


        </div>
      </section>
    </div>
  )
}

export default About
