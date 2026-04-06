import React, { useState, useEffect, useRef } from 'react';
import MountainHelicopter from "../images/Mountain Helicopter.jpeg";
import { 
  Mountain, ShieldCheck, Star, 
  Users, Clock, Heart, Plane, Shield, 
  Zap, PhoneCall, ChevronRight 
} from 'lucide-react';

// Functional Counter Component 
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
    { title: "Expert Pilots", desc: "Our certified pilots ensure safe, smooth flights across Nepal. Their expert mountain skills make every journey reliable.", icon: <Users size={20}/> },
    { title: "Safety First", desc: "We follow strict aviation standards for complete flight security. Advanced systems keep you protected.", icon: <Shield size={20}/> },
    { title: "Panoramic Views", desc: "Experience stunning Himalayan peaks from a unique aerial angle. Every flight offers clear, panoramic scenery.", icon: <Mountain size={20}/> },
    { title: "Flexible Timing", desc: "Enjoy a smooth ride with flexible timing and premium comfort. Our service is designed for stress-free travel.", icon: <Clock size={20}/> },
    { title: "Rescue Support", icon: <Heart size={20}/>, desc: "Our rescue team reaches remote regions with fast response time. Dedicated crews ensure timely support." },
    { title: "Modern Fleet", icon: <Plane size={20}/>, desc: "We operate advanced helicopters inspected regularly for safety. Each aircraft delivers powerful performance." }
  ];

  const stats = [
    { label: "Flight Hours", val: 1000, suffix: "+" },
    { label: "Team Members", val: 30, suffix: "+" },
    { label: "Happy Travelers", val: 3500, suffix: "+" },
    { label: "Years Experience", val: 25, suffix: "+" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      
      
      {/* 1. FULL WIDTH HERO BANNER */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={MountainHelicopter} 
            className="w-full h-full object-cover" 
            alt="Mountain Helicopter Tour Nepal"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12">
          <div className="max-w-4xl">
  
            
            {/* REDUCED FONT SIZE HERE FOR PREMIUM LOOK */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tight">
              Mountain <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Helicopter
              </span>
              <br /> Tours Nepal
            </h1>
            
            <p className="text-slate-200 text-sm md:text-lg mb-10 max-w-xl font-medium leading-relaxed italic border-l-4 border-orange-500 pl-6 opacity-90">
              "Experience the Himalayas from a unique aerial perspective. Fast, luxurious, and safe expeditions to the world's highest peaks."
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING INFO BOX */}
      <section className="relative z-20 px-6 -mt-12 md:-mt-20 mb-20">
        <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Luxury Himalayan Expeditions</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                Nepal’s mountain helicopter tours offer a fast, luxurious, and safe way to explore the Himalayas. From soaring above Mount Everest and Annapurna to landing at sacred sites like Muktinath, these flights deliver unmatched aerial views. Perfect for those with limited time seeking a once-in-a-lifetime adventure.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-orange-300">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Starting from</p>
                 <p className="text-3xl font-black text-slate-900 tracking-tighter">Premium Class</p>
                 <p className="text-[10px] font-bold text-orange-600 uppercase mt-1">Authorized Heli Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE FEATURES BENTO (Updated Grid) */}
      <section className="py-12 px-6 lg:px-12">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">Expertise You Can Trust</h2>
              <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {serviceFeatures.map((item, i) => (
                 <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-orange-200 transition-all hover:bg-white hover:shadow-xl">
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                       {item.icon}
                    </div>
                    <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. STATS COUNTER */}
      <section className="bg-slate-900 py-20 px-6 mt-20">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                 <p className="text-4xl lg:text-6xl font-black text-orange-500 mb-2">
                   <CountUpNumber end={stat.val} suffix={stat.suffix} />
                 </p>
                 <div className="w-10 h-1 bg-white/20 mx-auto mb-4"></div>
                 <p className="text-[10px] lg:text-[12px] font-black text-slate-400 uppercase tracking-[0.2em]">
                   {stat.label}
                 </p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 md:p-24 rounded-[3rem] text-white relative overflow-hidden shadow-2xl text-center">
           <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600 blur-[120px] opacity-20"></div>
           <h2 className="text-3xl lg:text-6xl font-black mb-6 uppercase italic tracking-tighter leading-tight">
             Ready for the <br/><span className="text-orange-500">Ultimate View?</span>
           </h2>
           <p className="text-slate-400 text-sm md:text-lg mb-12 italic max-w-2xl mx-auto">
             For bookings, private charters, or group inquiries, our team is available 24/7 to assist your Himalayan journey.
           </p>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="tel:+918576000084" className="group bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl uppercase flex items-center gap-3">
                 <PhoneCall size={18} className="group-hover:animate-bounce"/> +91 8576000084
              </a>
              <div className="text-left hidden md:block border-l border-slate-700 pl-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Nepal Tour & Travels</p>
                 <p className="font-bold text-xs text-slate-300 italic">Official Expedition HQ</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HelicopterToursPremium;