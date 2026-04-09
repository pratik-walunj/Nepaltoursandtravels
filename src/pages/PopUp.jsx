


import React, { useState, useEffect } from "react";
import { MapPin, X, Mountain, Hotel, CarFront, Sparkles } from "lucide-react";
import hilllogo from "../images/hilllogo.png"
const NepalTourPopup = () => {
  const [show, setShow] = useState(false);

  // 1. Page load ya refresh hone par Popup dikhane ka logic
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShow(true); // Page load hone ke 0.5 sec baad popup show hoga
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []); // Empty array [] ka matlab hai ye sirf page load/refresh par ek baar chalega

  // 2. Popup show hone ke 10 second baad Auto-Close karne ka logic
  useEffect(() => {
    if (show) {
      const hideTimer = setTimeout(() => {
        setShow(false); // 10 second (10000ms) baad automatically hide ho jayega
      }, 10000); 

      // Agar user ne time se pehle hi X button daba diya, toh timer clean kar do
      return () => clearTimeout(hideTimer);
    }
  }, [show]); // Ye tab chalega jab 'show' true hoga

  // Agar show false hai toh kuch render mat karo
  if (!show) return null;

  return (
    // FIX: Changed to overflow-y-auto so it scrolls on very small mobile screens without cutting the top badge
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm overflow-y-auto transition-opacity duration-300">
      
      {/* Wrapper to vertically center content but allow padding for scrolling */}
      <div className="flex min-h-full items-center justify-center p-4 py-16 sm:p-6 sm:py-20">
        
        {/* MAIN POPUP CONTAINER */}
        <div 
          className="relative w-full max-w-[800px] bg-gradient-to-br from-[#e3dfe0] via-[#4356e4] to-[#ed9817] rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all duration-500 scale-100 opacity-100 animate-in fade-in zoom-in-95 text-center px-4 py-8 sm:px-8 sm:py-10"
        >
          
          {/* OVERLAPPING TOP BADGE - Resized slightly for mobile */}
          <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full border-[3px] sm:border-4 border-[#ffdd35] flex items-center justify-center shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <Mountain size={24} className="text-[#ff0055] mb-0.5 sm:mb-1 sm:w-[28px] sm:h-[28px]" />
             
                {/* <img src={hilllogo} alt="hill"  className="text-[#ff0055] mb-0.5 sm:mb-1 sm:w-[100px] sm:h-[100px]" /> */}
              <span className="text-[9px] sm:text-[10px] font-black text-black uppercase tracking-widest leading-none">Nepal</span>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 text-white/70 hover:text-white transition-colors"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* --- HEADINGS --- */}
          <div className="mt-6 sm:mt-8 mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-3 drop-shadow-md">
              Get Real With Nepal
            </h2>
            <p className="text-white/90 text-xs sm:text-base md:text-lg font-medium tracking-wide px-2">
              The 6-Day Tour. Real Mountains. Real Peace.
            </p>
          </div>

          {/* --- DIVIDER TEXT --- */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            <Sparkles size={12} className="text-yellow-300 sm:w-[14px] sm:h-[14px]" />
            <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] text-center leading-tight">
              What's Included In Your Package
            </span>
            <Sparkles size={12} className="text-yellow-300 sm:w-[14px] sm:h-[14px]" />
          </div>

          {/* --- 4 WHITE CARDS (GRID) --- 2 cols on mobile, 4 on tablet/desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-2">
                <MapPin size={16} className="text-orange-500 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-black font-extrabold text-[13px] sm:text-base mb-0.5 sm:mb-1">Kathmandu</h3>
              <p className="text-gray-600 text-[9px] sm:text-xs leading-tight">Pashupatinath &<br/>City Darshan</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-2">
                <Mountain size={16} className="text-blue-500 sm:w-5 sm:h-5" />
               
              </div>
              <h3 className="text-black font-extrabold text-[13px] sm:text-base mb-0.5 sm:mb-1">Pokhara</h3>
              <p className="text-gray-600 text-[9px] sm:text-xs leading-tight">Fewa Lake &<br/>Himalayan Views</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-2">
                <Hotel size={16} className="text-purple-500 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-black font-extrabold text-[13px] sm:text-base mb-0.5 sm:mb-1">Luxury Stay</h3>
              <p className="text-gray-600 text-[9px] sm:text-xs leading-tight">Premium 3-Star<br/>Hotel Bookings</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-2">
                <CarFront size={16} className="text-green-500 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-black font-extrabold text-[13px] sm:text-base mb-0.5 sm:mb-1">Transfers</h3>
              <p className="text-gray-600 text-[9px] sm:text-xs leading-tight">Private AC Cab<br/>For Sightseeing</p>
            </div>

          </div>

          {/* --- BLACK CTA BUTTON --- */}
          <button
            onClick={() => {
              const phoneNumber = "919918001088"; 
              const message = "Hello! I want to know more about the Nepal Tour Package."; 
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="bg-black hover:bg-gray-900 text-white font-extrabold text-sm sm:text-base md:text-lg py-3 sm:py-4 px-8 sm:px-10 rounded-full w-full max-w-[260px] sm:max-w-[300px] mx-auto transition-transform active:scale-95 shadow-xl"
          >
            Book Now
          </button>

          {/* --- FOOTER TEXT --- */}
          <p className="text-white/80 text-[11px] sm:text-xs md:text-sm font-medium mt-3 sm:mt-4">
            Book before seats run out!
          </p>

        </div>
      </div>
    </div>
  );
};

export default NepalTourPopup;