import React from 'react'
import destination1 from '../assets/images/destination-1.jpg'
import destination2 from '../assets/images/destination-2.jpg'
import destination3 from '../assets/images/destination-3.jpg'
import destination4 from '../assets/images/destination-4.jpg'
import destination5 from '../assets/images/destination-5.jpg'

const Destination = () => {
  return (
    <div>
      <section className="section destination">
        <div className="container">

          <p className="section-subtitle">Destinations</p>

          <h2 className="h2 section-title">Choose Your Place</h2>

          <ul className="destination-list">

            <li className="w-500">
              <a href="#" className="destination-card">

                <figure className="card-banner">
                  <img src={destination1} className="img-cover w-[1140px] h-[1100px]" loading="lazy"
                    alt="Malé, Maldives"/>
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">Malé</p>

                  <h3 className="h3 card-title">Maldives</h3>
                </div>

              </a>
            </li>

            <li className="w-500">
              <a href="#" className="destination-card">

                <figure className="card-banner">
                  <img src={destination2} className="w-[1140px] h-[1100px] img-cover" loading="lazy"
                    alt="Bangkok, Thailand"/>
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">Bangkok</p>

                  <h3 className="h3 card-title">Thailand</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="destination-card">

                <figure className="card-banner">
                  <img src={destination3} className="w-[1110px] h-[480px] img-cover" loading="lazy"
                    alt="Kuala Lumpur, Malaysia"/>
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">Kuala Lumpur</p>

                  <h3 className="h3 card-title">Malaysia</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="destination-card">

                <figure className="card-banner">
                  <img src={destination4} className="w-[1110px] h-[480px] img-cover" loading="lazy"
                    alt="Kathmandu, Nepal"/>
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">Kathmandu</p>

                  <h3 className="h3 card-title">Nepal</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="destination-card">

                <figure className="card-banner">
                  <img src={destination5} className="w-[1110px] h-[480px] img-cover" loading="lazy"
                    alt="Jakarta, Indonesia"/>
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">Jakarta</p>

                  <h3 className="h3 card-title">Indonesia</h3>
                </div>

              </a>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}

export default Destination
