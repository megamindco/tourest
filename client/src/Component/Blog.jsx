import React from 'react'
import popular1 from '../assets/images/popular-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import authorAvatar from '../assets/images/author-avatar.png'

const Blog = () => {
  return (
    <div>
      <section className="pb-24">
        <div className="container mx-auto px-4">

          <p className="text-center text-mikado-yellow font-comforter-brush text-4xl mb-2.5">From The Blog Post</p>

          <h2 className="text-center text-jet text-4xl font-abril-fatface mb-12.5">Latest News & Articles</h2>

          <ul className="grid gap-7.5">

            <li>
              <div className="shadow-lg rounded-lg overflow-hidden">

                <figure className="relative bg-silver-chalice">

                  <a href="#">
                    <img src={popular1} width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." className="w-full h-full object-cover" />
                  </a>

                  <span className="absolute top-2.5 left-2.5 bg-mikado-yellow text-white-1 p-3.5 rounded-lg">
                    <ion-icon name="time-outline" className="text-lg mx-auto"></ion-icon>

                    <time dateTime="12-04" className="font-bold">04 Dec</time>
                  </span>

                </figure>

                <div className="p-7.5">

                  <div className="flex justify-between items-center gap-5">

                    <div className="flex items-center gap-3.75">
                      <figure className="w-7.5 h-7.5">
                        <img src={authorAvatar} width="30" height="30" alt="Jony bristow" />
                      </figure>

                      <div>
                        <a href="#" className="text-granite-gray font-medium">Jony bristow</a>

                        <p className="text-spanish-gray text-sm">Admin</p>
                      </div>
                    </div>

                    <time className="text-spanish-gray text-sm" dateTime="10:30">10:30 AM</time>

                  </div>

                  <h3 className="text-granite-gray text-2xl my-5">
                    <a href="#" className="hover:text-viridian-green">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" className="text-viridian-green font-bold flex justify-end items-center gap-1.25 hover:text-oxford-blue">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true" className="text-lg"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="shadow-lg rounded-lg overflow-hidden">

                <figure className="relative bg-silver-chalice">

                  <a href="#">
                    <img src={blog2} width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." className="w-full h-full object-cover" />
                  </a>

                  <span className="absolute top-2.5 left-2.5 bg-mikado-yellow text-white-1 p-3.5 rounded-lg">
                    <ion-icon name="time-outline" className="text-lg mx-auto"></ion-icon>

                    <time dateTime="12-04" className="font-bold">04 Dec</time>
                  </span>

                </figure>

                <div className="p-7.5">

                  <div className="flex justify-between items-center gap-5">

                    <div className="flex items-center gap-3.75">
                      <figure className="w-7.5 h-7.5">
                        <img src={authorAvatar} width="30" height="30" alt="Jony bristow" />
                      </figure>

                      <div>
                        <a href="#" className="text-granite-gray font-medium">Jony bristow</a>

                        <p className="text-spanish-gray text-sm">Admin</p>
                      </div>
                    </div>

                    <time className="text-spanish-gray text-sm" dateTime="10:30">10:30 AM</time>

                  </div>

                  <h3 className="text-granite-gray text-2xl my-5">
                    <a href="#" className="hover:text-viridian-green">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" className="text-viridian-green font-bold flex justify-end items-center gap-1.25 hover:text-oxford-blue">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true" className="text-lg"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="shadow-lg rounded-lg overflow-hidden">

                <figure className="relative bg-silver-chalice">

                  <a href="#">
                    <img src={blog3} width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." className="w-full h-full object-cover" />
                  </a>

                  <span className="absolute top-2.5 left-2.5 bg-mikado-yellow text-white-1 p-3.5 rounded-lg">
                    <ion-icon name="time-outline" className="text-lg mx-auto"></ion-icon>

                    <time dateTime="12-04" className="font-bold">04 Dec</time>
                  </span>

                </figure>

                <div className="p-7.5">

                  <div className="flex justify-between items-center gap-5">

                    <div className="flex items-center gap-3.75">
                      <figure className="w-7.5 h-7.5">
                        <img src={authorAvatar} width="30" height="30" alt="Jony bristow" />
                      </figure>

                      <div>
                        <a href="#" className="text-granite-gray font-medium">Jony bristow</a>

                        <p className="text-spanish-gray text-sm">Admin</p>
                      </div>
                    </div>

                    <time className="text-spanish-gray text-sm" dateTime="10:30">10:30 AM</time>

                  </div>

                  <h3 className="text-granite-gray text-2xl my-5">
                    <a href="#" className="hover:text-viridian-green">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" className="text-viridian-green font-bold flex justify-end items-center gap-1.25 hover:text-oxford-blue">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true" className="text-lg"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}

export default Blog