import React from 'react';
import footerBg from '../assets/images/footer-bg.png';

const Footer = () => {
  return (
    <footer className="bg-cover bg-[hsl(222,46%,17%)] bg-center text-[hsl(0,0%,80%)] py-10 md:px-20" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-[hsl(0,0%,100%)] font-bold text-lg mb-4">Top Destination</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Indonesia, Jakarta</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Maldives, Malé</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Australia, Canberra</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Thailand, Bangkok</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Morocco, Rabat</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[hsl(0,0%,100%)] font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Travel</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Lifestyle</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Fashion</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Education</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Food & Drink</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[hsl(0,0%,100%)] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">About</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Contact</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Tours</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Booking</a></li>
              <li><a href="#" className="hover:text-[hsl(0,0%,100%)]">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[hsl(0,0%,100%)] font-bold text-lg mb-4">Get a Newsletter</h3>
            <p className="text-[hsl(0,0%,69%)] mb-4">For the latest deals and tips, travel no further than your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Email address" className="p-2 rounded-l-md w-full bg-[hsl(210,11%,15%)] text-[hsl(0,0%,100%)]" />
              <button type="submit" className="bg-[hsl(180,98%,31%)] text-[hsl(0,0%,100%)] px-4 py-2 rounded-r-md hover:bg-[hsl(180,98%,40%)] transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[hsl(0,0%,61%)] text-sm border-t border-[hsl(0,0%,53%)] pt-4">
          <a href="#" className="text-[hsl(0,0%,100%)] text-lg font-bold">Tourest</a>
          <p>&copy; 2022 <a href="#" className="text-[hsl(0,0%,100%)] hover:underline">codewithsadee</a>. All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,80%)]"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="#" className="text-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,80%)]"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="#" className="text-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,80%)]"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#" className="text-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,80%)]"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="#" className="text-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,80%)]"><ion-icon name="logo-google"></ion-icon></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
