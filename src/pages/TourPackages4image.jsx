
import React, { useState, useEffect } from 'react';
import { Phone, ChevronUp, X } from 'lucide-react';
import chitwan from "../images/chitwan.png"
import nagarkotbanner from "../images/nagarkotbanner.png"
import nepalview from "../images/nepalview.png"
import { useNavigate } from 'react-router-dom';
const HolidaysToNepal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
const navigate =useNavigate();

  // --- SMART SLIDER DATA ---
  const sliderData = [
    {
      tabName: "Nepal",
      title: "Nepal",
      subtitle: "Explore the land of Himalayas",
      description: "Discover the rich culture, heritage, and breathtaking landscapes of Nepal with our exclusive and fully customized tour packages.",
      image: nepalview
    },
    {
      tabName: "Chitwan",
      title: "Wild Wonders of Chitwan",
      subtitle: "Land of Wildlife and Adventure",
      description: "Chitwan is a popular district in southern Nepal, known for its rich wildlife, natural beauty, and jungle tourism",
      image: chitwan
    },
    {
      tabName: "Kailash",
      title: "Kailash",
      subtitle: "Join our fixed group departures",
      description: "You can join our several group departure dates from May to September or go for a private and customized Kailash Mansarovar Yatra.",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      tabName: "Everest",
      title: "Everest Base Camp",
      subtitle: "The Ultimate Trekking Experience",
      description: "Challenge yourself with the world's most famous trek to the base of the highest peak on Earth. Pure adventure awaits.",
      image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Auto-play Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000); 
    
    return () => clearInterval(timer);
  }, [sliderData.length]);

  return (
    <div className="min-h-screen bg-gray-50 relative pb-20 font-sans selection:bg-[#001ca8] selection:text-white">
      
      {/* --- HERO SECTION WITH CAROUSEL --- */}
      {/* Yahan maine p-4 se aur chhota box banaya hai aur center alignment ensure ki hai */}
      <section className="relative w-full h-[700px] md:h-[800px] bg-white flex items-center justify-center py-10 px-4 md:px-8">
        
        {/* --- SMALLER & EXTREMELY ROUNDED CAROUSEL CONTAINER --- */}
        {/* Yahan width, max-width, height aur rounded-[4rem]/[5rem] control kar raha hai */}
        <div className="relative w-full max-w-[1100px] h-[500px] md:h-[600px] mx-auto rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl bg-gray-900">
          
          {/* Background Images */}
          {sliderData.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.5s' }}
            />
          ))}

          {/* Content Container Inside Image */}
          <div className="absolute inset-0 w-full h-half p-4 md:p-10">
            
            {/* --- DYNAMIC GLASSMORPHISM CARD --- */}
            {/* Card ki position adjust ki gayi hai chhote box ke hisaab se */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 w-[90%] md:w-[400px] bg-white/85 backdrop-blur-md p-6 md:p-10 text-center rounded-[2.5rem] shadow-xl transition-all duration-500">
              <div key={currentSlide} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {sliderData[currentSlide].title}
                </h1>
                <p className="text-gray-700 font-medium mb-3 text-sm">
                  {sliderData[currentSlide].subtitle}
                </p>
                
                {/* Blue Divider */}
                <div className="w-12 h-0.5 bg-[#000ea8] mx-auto mb-4 md:mb-5"></div>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 px-2 min-h-[70px] flex items-center justify-center">
                  {sliderData[currentSlide].description}
                </p>
                
                <button     onClick={()=>{navigate("nepalallpackages")}}  className="border-2 border-[#0027a8] text-[hsl(180,11%,2%)] hover:bg-[#003ea8] hover:text-white font-bold text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 rounded-full tracking-widest transition-all hover:shadow-lg active:scale-95">
                  EXPLORE PACKAGE
                </button>
              </div>
            </div>

            {/* --- DYNAMIC BOTTOM TABS (PILL SHAPE, SEPARATED) --- */}
            {/* Tabs ko thoda aur andar aur upar shift kiya */}
            <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar px-4">
              {sliderData.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button 
                    key={index}
                    onClick={() => setCurrentSlide(index)} 
                    className={`flex-none font-bold text-[10px] md:text-xs px-5 md:px-7 py-2.5 md:py-3 transition-all duration-300 rounded-full whitespace-nowrap shadow-lg
                      ${isActive 
                        ? 'bg-[#1600a8] text-white scale-105 shadow-[0_6px_15px_rgba(22,0,168,0.4)]' 
                        : 'bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 hover:scale-105' 
                      }
                    `}
                  >
                    {slide.tabName}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HolidaysToNepal;