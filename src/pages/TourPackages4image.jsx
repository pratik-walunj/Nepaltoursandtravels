// import React, { useState, useEffect } from 'react';
// import { Phone, ChevronUp, X } from 'lucide-react';
// import chitwanbanner from "../images/chitwanbanner.png"
// import nagarkotbanner from "../images/nagarkotbanner.png"
// import nepalview from "../images/nepalview.png"
// const HolidaysToNepal = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showCookieBanner, setShowCookieBanner] = useState(true);

//   // --- SMART SLIDER DATA ---
//   // Ek hi jagah par image, button ka naam, aur card ka text define kar diya hai
//   const sliderData = [
//     {
//       tabName: "Nepal",
//       title: "Nepal",
//       subtitle: "Explore the land of Himalayas",
//       description: "Discover the rich culture, heritage, and breathtaking landscapes of Nepal with our exclusive and fully customized tour packages.",
//       image: nepalview
//     },
//     {
//       tabName: "Chitwan",
//       title: "Muktinath Yatra",
//       subtitle: "A Sacred Pilgrimage",
//       description: "Experience the divine journey to Muktinath. A holy site for both Hindus and Buddhists, offering spiritual peace and salvation.",
//       image: chitwanbanner
//     },
//     {
//       tabName: "Kailash",
//       title: "Kailash",
//       subtitle: "Join our fixed group departures",
//       description: "You can join our several group departure dates from May to September or go for a private and customized Kailash Mansarovar Yatra.",
//       image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//     },
//     {
//       tabName: "Everest",
//       title: "Everest Base Camp",
//       subtitle: "The Ultimate Trekking Experience",
//       description: "Challenge yourself with the world's most famous trek to the base of the highest peak on Earth. Pure adventure awaits.",
//       image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//     }
//   ];

//   // Auto-play Carousel Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 5000); // Changes slide every 5 seconds
    
//     // Cleanup timer on unmount
//     return () => clearInterval(timer);
//   }, [sliderData.length]);

//   return (
//     <div className="min-h-screen bg-gray-50 relative pb-20 font-sans selection:bg-[#001ca8] selection:text-white">
      
      

//       {/* --- HERO SECTION WITH CAROUSEL --- */}
//       <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
        
//         {/* Background Images */}
//         {sliderData.map((slide, index) => (
//           <img
//             key={index}
//             src={slide.image}
//             alt={`Slide ${index + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
//               currentSlide === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
//             }`}
//             style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.5s' }}
//           />
//         ))}
//         {/* Subtle overlay */}
//         {/* <div className="absolute inset-0 bg-black/30"></div> */}

//         {/* Content Container */}
//         <div className="absolute inset-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
          
//           {/* Dynamic Glassmorphism Card */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 lg:left-12 w-[90%] md:w-[450px] bg-white/85 backdrop-blur-md p-8 md:p-12 text-center rounded shadow-2xl transition-all duration-500">
//             {/* Adding a key forces the div to re-animate when the slide changes */}
//             <div key={currentSlide} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
//               <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
//                 {sliderData[currentSlide].title}
//               </h1>
//               <p className="text-gray-700 font-medium mb-4 text-sm md:text-base">
//                 {sliderData[currentSlide].subtitle}
//               </p>
              
//               {/* Green Divider */}
//               <div className="w-16 h-0.5 bg-[#000ea8] mx-auto mb-6"></div>
              
//               <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 px-2 min-h-[80px] flex items-center justify-center">
//                 {sliderData[currentSlide].description}
//               </p>
              
//               <button className="border-2 border-[#0027a8] text-[hsl(180,11%,2%)] hover:bg-[#003ea8] hover:text-white font-bold text-sm px-6 py-3 rounded tracking-widest transition-all hover:shadow-lg active:scale-95">
//                 EXPLORE PACKAGE
//               </button>
//             </div>
//           </div>

//           {/* --- DYNAMIC BOTTOM TABS (BUTTONS) --- */}
//           {/* Ye buttons ab auto-scroll ke sath sync honge */}
//           <div className="absolute bottom-0 right-0 md:right-8 lg:right-12 flex items-end overflow-x-auto w-full md:w-auto no-scrollbar">
//             {sliderData.map((slide, index) => {
//               const isActive = currentSlide === index;
//               return (
//                 <button 
//                   key={index}
//                   onClick={() => setCurrentSlide(index)} // Allows manual clicking
//                   className={`flex-1 md:flex-none font-bold text-xs md:text-base px-6 md:px-12 py-4 md:py-5 transition-all duration-300 border-l border-gray-200/50 relative
//                     ${isActive 
//                       ? 'bg-[#1600a8] text-white h-[60px] md:h-[70px] shadow-[0_-4px_15px_rgba(0,0,0,0.2)]' // Active Button
//                       : 'bg-white hover:bg-gray-100 text-gray-800 h-[50px] md:h-[60px]' // Inactive Button
//                     }
//                   `}
//                 >
//                   {slide.tabName}
                  
//                   {/* Top glowing bar indicator for active tab */}
//                   {isActive && (
//                     <div className="absolute top-0 left-0 w-full h-1 bg-green-300"></div>
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//         </div>
//       </section>

//       {/* --- FLOATING BUTTONS --- */}
//       <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#00a885] hover:bg-gray-50 border border-gray-100 transition-all"
//         >
//           <ChevronUp size={20} strokeWidth={3} />
//         </button>
//         <button className="w-12 h-12 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
//            {/* WhatsApp Icon SVG */}
//           <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
//              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401"/>
//           </svg>
//         </button>
//       </div>

//       {/* --- COOKIE BANNER --- */}
     

//       {/* Tailwind utility for hiding standard scrollbars but keeping functionality on mobile tabs */}
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar {
//             display: none;
//         }
//         .no-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HolidaysToNepal;




import React, { useState, useEffect } from 'react';
import { Phone, ChevronUp, X } from 'lucide-react';
import chitwan from "../images/chitwan.png"
import nagarkotbanner from "../images/nagarkotbanner.png"
import nepalview from "../images/nepalview.png"

const HolidaysToNepal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

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
      title: "Muktinath Yatra",
      subtitle: "A Sacred Pilgrimage",
      description: "Experience the divine journey to Muktinath. A holy site for both Hindus and Buddhists, offering spiritual peace and salvation.",
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
                
                <button className="border-2 border-[#0027a8] text-[hsl(180,11%,2%)] hover:bg-[#003ea8] hover:text-white font-bold text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 rounded-full tracking-widest transition-all hover:shadow-lg active:scale-95">
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

      {/* --- FLOATING BUTTONS --- */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#00a885] hover:bg-gray-50 border border-gray-100 transition-all"
        >
          <ChevronUp size={20} strokeWidth={3} />
        </button>
        <button className="w-12 h-12 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
          <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401"/>
          </svg>
        </button>
      </div>

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