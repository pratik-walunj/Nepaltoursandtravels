
import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pokhara from "../images/pokhara.jpg";
import pokhara2 from "../images/pokhara2.png"
import chitwan from "../images/chitwan.jpeg";
import { useNavigate } from "react-router-dom";

// 1. MOCK DATA ME 'path' ADD KIYA GAYA HAI 👇
const destinations = [
  { id: 1, name: "Kathmandu", country: "Nepal", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", path: "/package/kathmandu" },
  { id: 2, name: "Kashmir", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", path: "/kashmir" },
  { id: 3, name: "Pokhara", country: "Nepal", packages: "Starting From ₹...", image: pokhara2, path: "/package/pokhara" }, // Example: link to the page we created
  { id: 4, name: "Kerala", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", path: "/kerala" },
  { id: 5, name: "Chitwan", country: "Nepal", packages: "Starting From ₹...", image: chitwan, path: "/package/chitwan" }, // Example: link to the page we created
  { id: 6, name: "Goa", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", path: "/goa" },
  { id: 7, name: "Rajasthan", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", path: "/rajasthan" }
];

// Array ko 3 baar duplicate kiya (Total 21 items) True Infinite Illusion ke liye
const extendedDestinations = [...destinations, ...destinations, ...destinations];

const TrendingDestinations = () => {
  const sliderRef = useRef(null);
  const isAutoScrolling = useRef(false);
  const navigate = useNavigate();

  // 1. Initial Load pe slider ko middle set par set karein
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      // Index 7 (destinations.length) matlab doosre set ka pehla card
      const middleSetStart = slider.children[destinations.length].offsetLeft;
      slider.scrollLeft = middleSetStart;
    }
  }, []);

  // 2. True Infinite Loop: Silent Jump Logic
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider || isAutoScrolling.current) return;

    const singleSetWidth = slider.children[destinations.length].offsetLeft;

    // Agar user left swipe karte hue ekdum start par aa jaye -> silently jump to middle
    if (slider.scrollLeft === 0) {
      slider.style.scrollBehavior = 'auto'; // Animation disable for jump
      slider.scrollLeft = singleSetWidth;
    } 
    // Agar user right swipe karte hue ekdum end par aa jaye -> silently jump back
    else if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5) {
      slider.style.scrollBehavior = 'auto';
      slider.scrollLeft -= singleSetWidth;
    }
  };

  // 3. Desktop Arrows ke liye Smooth Scroll
  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      isAutoScrolling.current = true;
      slider.style.scrollBehavior = 'smooth'; // Arrows par click ke liye smooth slide
      
      const cardWidth = slider.children[0].offsetWidth;
      const gap = window.innerWidth >= 768 ? 24 : 16; // md:gap-6 (24px) or gap-4 (16px)
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      slider.scrollBy({ left: scrollAmount });

      // Scroll finish hone ke baad AutoScrolling flag hata dein
      setTimeout(() => {
        isAutoScrolling.current = false;
        // Snap the position to trigger the infinite loop check if needed
        handleScroll();
      }, 500);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white w-full font-sans">
      
      {/* Hide Scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Trending <span className="text-blue-600">India</span> & <span className="text-orange-500">Nepal</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Explore the most visited domestic and cross-border locations with our curated tour packages.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/slider mb-10">
          
          {/* Left Arrow (Hidden on Mobile & Tablet, visible only on lg screens) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/slider:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* SOTC Style Viewport: Native Touch Scrolling + Scroll Snap + onScroll listener */}
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {extendedDestinations.map((dest, index) => (
              <div 
                key={`${dest.id}-${index}`}
                onClick={() => navigate(dest.path)} // 2. ONCLICK EVENT ADD KIYA GAYA HAI 👇
                className="snap-start flex-shrink-0 w-[240px] md:w-[280px] lg:w-[300px] relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[4/5]">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-20">
                    {dest.country}
                  </div>
                  
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 z-10"></div> */}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-yellow-400">
                      {dest.packages}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow (Hidden on Mobile & Tablet, visible only on lg screens) */}
          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/slider:opacity-100"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

        </div>

        {/* View All Packages Button */}
        <div className="flex justify-center mt-6">
          <button onClick={()=>{navigate("/indianepalallpackages")}} className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-blue-400 active:bg-blue-500 hover:shadow-lg transition-all duration-300">
            View All Packages
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrendingDestinations;