import React, { useState, useEffect } from 'react';

// Demo Testimonials Data (Nepal Tour specific)
const testimonialsData = [
  {
    id: 1,
    text: "Our Nepal trip was absolutely magical! From the seamless booking process to the well-organized itinerary covering Kathmandu and Pokhara. The guides were incredibly knowledgeable.",
    author: "Rahul & Neha",
    location: "Mumbai",
    role: "Happy Travelers"
  },
  {
    id: 2,
    text: "Highly recommend their tour packages. They took care of every detail, from comfortable hotel stays to smooth airport transfers. The sunrise view at Sarangkot was unforgettable!",
    author: "Ananya Singh",
    location: "Delhi",
    role: "Solo Traveler"
  },
  {
    id: 3,
    text: "Professional, punctual, and very hospitable. The entire trekking experience was well-managed, and the driver was extremely safe on those mountain roads. Will definitely book again.",
    author: "Vikram Mehta",
    location: "Bangalore",
    role: "Adventure Enthusiast"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic (Changes slide every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[60vh] bg-[#f8fafd] flex flex-col items-center justify-center py-16 overflow-hidden font-sans">
      
      {/* Decorative Background Elements (Nepal Theme Colors) */}
      <div className="absolute top-1/4 left-10 md:left-24 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-[60px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 md:right-24 w-40 h-40 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[60px] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>

      {/* Header Section */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-4xl px-4">
        
        {/* Top Badge (Subtle Blue) */}
        <div className="bg-blue-50 text-blue-600 border border-blue-100 text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-sm">
          TESTIMONIALS
        </div>

        {/* Main Pill Badge (Premium Nepal Theme Blue Gradient) */}
        <div className="relative w-[90%] md:w-auto max-w-[500px]">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-full shadow-[0_10px_25px_rgba(37,99,235,0.25)] text-center px-8 md:px-16 py-3.5 border border-blue-400/50">
            <h2 className="text-white text-lg md:text-2xl font-black uppercase tracking-widest drop-shadow-md">
              WHAT OUR CLIENT'S SAY
            </h2>
          </div>
        </div>

        {/* Huge Blue Quotation Marks */}
        <div className="text-blue-500/30 text-7xl md:text-8xl font-serif leading-[0.3] mt-8 md:mt-10 mb-4 select-none">
          “
        </div>
      </div>

      {/* Auto-Scrolling Testimonial Carousel */}
      <div className="w-full max-w-5xl mx-auto overflow-hidden relative z-10 px-4 mt-2">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full flex flex-col items-center text-center px-4 md:px-12">
              
              {/* Testimonial Text */}
              <p className="text-gray-600 text-base md:text-xl font-medium leading-relaxed mb-8 max-w-3xl drop-shadow-sm">
                {testimonial.text}
              </p>

              {/* Author Details */}
              <h4 className="text-gray-900 font-black text-base md:text-lg tracking-tight">
                {testimonial.author} <span className="text-blue-600 font-medium px-1">—</span> <span className="text-gray-700 font-bold">{testimonial.location}</span>
              </h4>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">
                {testimonial.role}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* Manual Navigation Dots */}
      <div className="flex gap-2 mt-8 relative z-10">
        {testimonialsData.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              currentIndex === index 
                ? 'bg-blue-600 w-8 shadow-md' 
                : 'bg-blue-200 hover:bg-blue-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Google Review Button (Cleaned up for Nepal Theme) */}
      <a 
        href="https://www.google.com/maps/place/Nepal+Tours+and+Travels/@26.7596357,83.3791606,778m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3991448adb440bcf:0x3728ff2d4d69281f!8m2!3d26.7596357!4d83.3817355!16s%2Fg%2F11bw3djl2n?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" 
        className="mt-12 flex items-center bg-white rounded-xl p-1.5 pr-2 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 cursor-pointer hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 relative z-10 group"
      >
        {/* Google Logo SVG */}
        <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg ml-1 mr-2 group-hover:bg-blue-50 transition-colors">
          <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        
        {/* Blue Button Section */}
        <div className="bg-blue-600 text-white text-[11px] leading-tight px-4 py-2 rounded-lg font-medium text-left">
          Click here to leave us<br/>a review on <span className="font-bold text-white">Google!</span>
        </div>
      </a>

    </div>
  );
};

export default Testimonials;