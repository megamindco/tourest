import React from 'react'
import popular1 from '../assets/images/popular-1.jpg'
import popular2 from '../assets/images/popular-2.jpg'
import popular3 from '../assets/images/popular-3.jpg'

const Popular = () => {
  return (
    <div>

      <section className="section popular">
        <div className="container">

          <p className="section-subtitle">Featured Tours</p>

          <h2 className="h2 section-title">Most Popular Tours</h2>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-banner">
                  <a href="#">
                    <img src={popular1} width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" className="img-cover"/>
                  </a>

                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>

                <div className="card-content">

                  <div className="card-wrapper">
                    <div className="card-price">From $50.00</div>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 className="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address className="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-banner">
                  <a href="#">
                    <img src={popular2} width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" className="img-cover"/>
                  </a>

                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>

                <div className="card-content">

                  <div className="card-wrapper">
                    <div className="card-price">From $50.00</div>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 className="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address className="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-banner">
                  <a href="#">
                    <img src={popular3} width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" className="img-cover"/>
                  </a>

                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>

                <div className="card-content">

                  <div className="card-wrapper">
                    <div className="card-price">From $50.00</div>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 className="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address className="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </div>
  )
}

export default Popular
