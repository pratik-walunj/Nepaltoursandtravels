import React, { useState, useEffect } from "react";
import { MapPin, X, Mountain, Sparkles } from "lucide-react";
import popupimage from "../images/popupimage.png"
const NepalTourPopup = () => {
  const [show, setShow] = useState(false);

  // 1. Page load ya refresh hone par Popup dikhane ka logic
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShow(true); // Page load hone ke 0.5 sec baad popup show hoga
    }, 500);

    return () => clearTimeout(showTimer);
  }, []); // Empty array [] ka matlab hai ye sirf page load/refresh par ek baar chalega

  // 2. Popup show hone ke 5 second baad Auto-Close karne ka logic
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
    // Responsive Padding: p-4 for mobile, sm:p-6 for larger screens
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 sm:p-6 transition-opacity duration-300">
      
      {/* WIDE Popup Container - Responsive Widths & Scrollable on small screens */}
      
      <div 
            className="relative bg-white w-full max-w-[750px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 scale-100 opacity-100 animate-in fade-in zoom-in-95 flex flex-col sm:flex-row"      >
        {/* Global Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 z-50 bg-white/90 sm:bg-gray-100 hover:bg-gray-200 text-gray-800 sm:text-gray-600 p-1.5 rounded-full transition-colors shadow-md sm:shadow-sm backdrop-blur-md"
        >
          <X size={18} />
        </button>

        {/* --- LEFT: Image Section --- */}
        {/* h-[220px] for mobile, auto-stretches on tablet/desktop */}
        <div className="relative h-[220px] sm:h-auto sm:w-2/5 lg:w-5/12 flex-shrink-0">
          <img 
            src={popupimage} 
            alt="Nepal Tour" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div> */}
          
          {/* Limited Time Offer Badge */}
          <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
            <Sparkles size={12} /> Special Offer
          </div>

          {/* Image Text */}
          <div className="absolute bottom-4 left-5 right-5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight drop-shadow-lg">
              Explore The Magic <br/> of Nepal 🇳🇵
            </h2>
          </div>
        </div>

        {/* --- RIGHT: Content Section --- */}
        {/* Responsive paddings for content */}
        <div className="p-5 sm:p-6 lg:p-8 sm:w-3/5 lg:w-7/12 flex flex-col justify-center bg-white">
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-medium mb-4 sm:mb-5 pr-2 sm:pr-4 leading-relaxed">
            Experience the majestic Himalayas, ancient temples of Kathmandu, and the serene lakes of Pokhara. Book your dream customized trip today!
          </p>

          {/* Highlights */}
          <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
            <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-100">
              <div className="bg-orange-100 p-1.5 rounded-md mr-3 shrink-0">
                <MapPin size={15} className="text-orange-600" />
              </div>
              <span className="text-xs sm:text-sm font-semibold leading-snug">Kathmandu & Pashupatinath Darshan</span>
            </div>
            <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-1.5 rounded-md mr-3 shrink-0">
                <Mountain size={15} className="text-blue-600" />
              </div>
              <span className="text-xs sm:text-sm font-semibold leading-snug">Pokhara Lakes & Himalayan Sunrise</span>
            </div>
          </div>

          {/* WhatsApp CTA Button */}
          <button
            onClick={() => {
              const phoneNumber = "918576000074"; 
              const message = "Hello! I want to know more about the Nepal Tour Package."; 
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="w-full bg-[#25D366] hover:bg-[#1EBE55] text-white font-bold text-sm sm:text-[15px] py-3 sm:py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 active:scale-[0.98]"
          >
            {/* WhatsApp Custom SVG Icon */}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401"/>
            </svg>
            Book Now
          </button>
          
          <p className="text-center text-[10px] sm:text-[11px] text-gray-400 mt-3 font-medium uppercase tracking-wider">
            100% Free Consultation. No commitments.
          </p>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NepalTourPopup;