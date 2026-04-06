

import  { useState, useEffect } from 'react';
import { 
  MapPin, Search, Plane, Building2, Map, 
  CreditCard, Palmtree, Bike, FileText 
} from 'lucide-react';

// Make sure your video path is correct here!
import nepalVideo from '../images/nepalvideo.mp4'; 
import AirportnepalVideo from "../images/AirportnepalVideo.mp4"
import IndiaPackages from '../pages/IndiaPackages';
import NepalPackages from "../pages/NepalPackages"
import AdventureSport from '../adventuresports/AdventureSport';
import TourPackages4image from "../pages/TourPackages4image"
import Services from "../pages/Services"
import Faq  from "../pages/Faq"
import Testimonials from './Testimonials';
 import PopUp from "../pages/PopUp"
//  import Form from "../pages/Form"
const popularDestinations = [
  "Kathmandu Valley",
  "Pokhara",
  "Chitwan National Park",
  "Lumbini",
  "Everest Base Camp",
  "Annapurna Base Camp",
  "Bhaktapur",
  "Nagarkot",
  "Mustang Region"
];

// Array of Quick Services (Icons)
const quickServices = [
  { name: 'Holidays', icon: <Palmtree size={24} strokeWidth={1.5} /> },
  { name: 'Flights', icon: <Plane size={24} strokeWidth={1.5} /> },
  { name: 'Hotels', icon: <Building2 size={24} strokeWidth={1.5} /> },
  { name: 'Forex', icon: <CreditCard size={24} strokeWidth={1.5} /> },
  { name: 'Packages', icon: <Bike size={24} strokeWidth={1.5} /> },
  { name: 'Services', icon: <Map size={24} strokeWidth={1.5} /> },
  { name: 'Visa', icon: <FileText size={24} strokeWidth={1.5} /> },
];




const HomePage = () => {
  const [destination, setDestination] = useState("");

  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Animation Effect for Placeholder
  useEffect(() => {
    const currentWord = popularDestinations[wordIndex];
    // Speed: Typing is slower, deleting is faster
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && placeholderText === currentWord) {
        // Pause when the word is fully typed before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && placeholderText === "") {
        // Move to the next word when fully deleted
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % popularDestinations.length);
      } else {
        // Type or delete characters
        setPlaceholderText(
          currentWord.substring(0, placeholderText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, wordIndex]);






  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <PopUp/>
      <div className="w-full font-sans bg-gray-50">
        
        {/* CSS to hide scrollbar for the mobile icon row */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* HERO SECTION WITH VIDEO BACKGROUND */}
        <section className="relative w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          
          {/* Video Tag */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={AirportnepalVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
         

          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 w-full max-w-6xl mx-auto mt-16 md:mt-20 flex flex-col items-center">
            
            {/* TRANSPARENT QUICK ACCESS ICONS (MOVED ABOVE HEADING) */}
            {/* Only visible on Mobile */}
            <div className="block md:hidden w-full max-w-4xl overflow-x-auto hide-scrollbar mb-8">
              <div className="flex justify-start gap-4 px-2 snap-x snap-mandatory">
                {quickServices.map((service, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="flex flex-col items-center justify-center min-w-[70px] snap-start group"
                  >
                    {/* Glassmorphism Icon Container */}
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center mb-2 shadow-lg group-hover:bg-white/30 group-hover:text-orange-400 group-hover:border-orange-400/50 transition-all duration-300 transform group-hover:-translate-y-1">
                      {service.icon}
                    </div>
                    {/* Icon Text */}
                    <span className="text-[10px] font-bold text-white/90 text-center tracking-wide group-hover:text-orange-400 transition-colors">
                      {service.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
              Unleash Your Spirit <br className="hidden md:block"/> in <span className="text-orange-400">Nepal</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium px-2">
              From the peak of Mount Everest to the peaceful lakes of Pokhara. Your ultimate Himalayan adventure starts here.
            </p>
            
            {/* SEARCH BAR */}
            <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center justify-between border-4 border-white/20 max-w-3xl mx-auto space-y-2 md:space-y-0 text-left shadow-2xl w-full">
              
              {/* Destination Input */}
              <div className="relative flex-1 w-full">
                <div className="flex items-center px-4 py-3 md:py-2">
                  <MapPin className="text-orange-500 mr-3 flex-shrink-0" size={26} />
                  <div className="w-full">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 hidden md:block">
                      Search Destination
                    </p>
                    <input 
                      type="text" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={`e.g. ${placeholderText}`} 
                      className="w-full outline-none text-gray-800 font-bold placeholder-gray-400 bg-transparent text-base md:text-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full md:w-auto px-2 pb-2 md:pb-0 pt-1 md:pt-0">
                <button className="w-full md:w-auto flex items-center justify-center bg-orange-500 text-white px-10 py-3.5 md:py-4 rounded-xl md:rounded-full font-bold hover:bg-indigo-950 transition-colors duration-300 shadow-lg shadow-orange-500/30 text-base">
                  <Search size={22} className="mr-2 hidden md:block" />
                  Explore Now
                </button>
              </div>
              
            </div>
          </div>
        </section>

      </div>

      <IndiaPackages />

      <NepalPackages/>
      <TourPackages4image/>
      <AdventureSport/>
      <Testimonials/>
      <Services/>
    
      <Faq/>
      {/* <Form/> */}
    </>
  );
};

export default HomePage;




























// 888888888888888888888888888888new 

