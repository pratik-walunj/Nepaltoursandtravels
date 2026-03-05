import React, { useState, useEffect, useRef } from 'react';
import { 
  Mountain, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Zap, Award, Check, Users, MapPin, 
  Clock, Heart, Shield, Headphones,
  Wind, Plane, Calendar
} from 'lucide-react';

// Functional Counter Component with refined font scaling
const CountUpNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isAnimating, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
};

const HelicopterToursPremium = () => {
  

  const serviceFeatures = [
    { title: "Expert Pilots", desc: "Our certified pilots ensure safe, smooth flights across Nepal. Their expert mountain skills make every journey reliable and comfortable", icon: <Users size={20}/> },
    { title: "Safety First", desc: "We follow strict aviation standards for complete flight security. Advanced systems keep you protected throughout the entire journey.", icon: <Shield size={20}/> },
    { title: "Panoramic Views", desc: "Experience stunning Himalayan peaks from a unique aerial angle. Every flight offers clear, panoramic scenery you’ll never forget.", icon: <Mountain size={20}/> },
    { title: "Flexible Timing", desc: "Enjoy a smooth ride with flexible timing and premium comfort. Our service is designed for safe, stress-free travel every time.", icon: <Clock size={20}/> },
    { title: "Rescue Support", icon: <Heart size={20}/>, desc: "Our rescue team reaches remote regions with fast response time. Dedicated crews ensure timely, dependable emergency support." },
    { title: "Modern Fleet", icon: <Plane size={20}/>, desc: "We operate advanced helicopters inspected regularly for safety. Each aircraft delivers powerful performance and a smooth ride." }
  ];

  const stats = [
    { label: "Flight Hours", val: 1000, suffix: "+" },
    { label: "Team Members", val: 30, suffix: "+" },
    { label: "Happy Travelers", val: 3500, suffix: "+" },
    { label: "Years Experience", val: 25, suffix: "+" }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-24 font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. REFINED HEADER - RESPONSIVE FONT */}
      <section className="px-5 lg:px-12 mb-8 lg:mb-12">
        <div className="max-w-7xl mx-auto border-l-4 border-orange-600 pl-5 text-left">
          <nav className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase tracking-widest">Heli Services</span>
          </nav>
          <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Mountain Helicopter <span className="text-orange-600 font-serif italic normal-case tracking-normal">Tours Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. HERO BOX - MOBILE SCALED */}
      <section className="px-4 lg:px-10 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto bg-slate-50 p-6 lg:p-14 rounded-2xl lg:rounded-[3.5rem] shadow-sm border border-slate-100">
           <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 rounded-xl lg:rounded-[2.5rem] overflow-hidden shadow-xl h-[200px] lg:h-[350px]">
                 <img src="src\images\Mountain Helicopter.jpeg" className="w-full h-full object-cover" alt="Heli Tours"/>
              </div>
              <div className="lg:col-span-8 text-left">
                 <h2 className="text-lg lg:text-2xl font-black text-slate-900 mb-4 border-l-4 border-orange-600 pl-4 uppercase">Luxury Himalayan Expeditions</h2>
                 <p className="text-slate-600 text-xs lg:text-base font-medium italic leading-relaxed">
                   Nepal’s mountain helicopter tours offer a fast, luxurious, and safe way to explore the Himalayas and the country’s most iconic destinations. From soaring above Mount Everest, Annapurna, and Langtang, to landing at sacred sites like Muktinath Temple, Gosaikunda, and Pathivara, these flights deliver unmatched aerial views.Travelers can experience snow-covered peaks, deep valleys, pristine lakes, and remote monasteries within minutes. Helicopter tours are perfect for those with limited time or seeking a once-in-a-lifetime adventure. Whether it’s an Everest Base Camp landing, a Pokhara to Annapurna flight, or a Kathmandu Himalayan sightseeing ride, every journey is crafted for comfort and safety. Enjoy panoramic windows, expert pilots, and the closest possible view of Nepal’s majestic landscapes.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. SERVICE FEATURES BENTO */}
      <section className="py-12 lg:py-16 px-5 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Expertise You Can Trust</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mb-10">25 Years of Aerial Excellence</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
               {serviceFeatures.map((item, i) => (
                 <div key={i} className="group p-6 lg:p-8 bg-slate-50 rounded-2xl lg:rounded-[2.5rem] border border-slate-100 hover:border-orange-200 transition-all hover:bg-white text-left">
                    <div className="bg-white w-12 h-12 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                       {item.icon}
                    </div>
                    <h4 className="text-sm lg:text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-[10px] lg:text-sm text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>


      {/* 5. FUNCTIONAL COUNTER - REFINED SIZING */}
      <section className="bg-slate-900 py-12 lg:py-20 px-5">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                 <p className="text-2xl lg:text-5xl font-black text-orange-500 mb-2 tracking-tighter">
                   <CountUpNumber end={stat.val} suffix={stat.suffix} />
                 </p>
                 <div className="w-6 h-0.5 bg-white/10 mx-auto mb-3 group-hover:w-10 group-hover:bg-orange-500 transition-all duration-500"></div>
                 <p className="text-[8px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight max-w-[120px] mx-auto">
                   {stat.label}
                 </p>
              </div>
            ))}
         </div>
      </section>

      {/* 6. CALL TO ACTION - BRANDED STYLE */}
      <section className="py-16 lg:py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-8 lg:p-20 rounded-2xl lg:rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-48 lg:w-72 h-48 lg:h-72 bg-orange-600 blur-[100px] opacity-20"></div>
           <h2 className="text-2xl lg:text-6xl font-black mb-4 uppercase italic tracking-tighter">Want to hire our <br/><span className="text-orange-500">Helicopter?</span></h2>
           <p className="text-slate-400 text-[10px] lg:text-base mb-8 lg:mb-12 italic font-medium opacity-80 leading-relaxed max-w-2xl mx-auto">
             "For bookings, charters, or group inquiries, contact us 24/7! Safe and peaceful journeys beyond the trails."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[11px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
                 Book Now: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5 leading-none">Nepal Tour & Travels</p>
                 <p className="font-bold text-[10px] lg:text-xs text-slate-300 italic">Gorakhpur HQ</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default HelicopterToursPremium;