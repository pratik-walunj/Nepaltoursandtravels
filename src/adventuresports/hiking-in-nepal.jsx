import React, { useState } from 'react';
import Southeverest from "../images/South-everest.webp"
import Annapurna from "../images/Annapurna-1.webp"
import Mustang from "../images/Mustang.webp"
import hiking from "../images/hiking.jpg"
import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse,
  Compass, Navigation, Thermometer, Sunrise,
  Binoculars, PhoneCall
} from 'lucide-react';

const HikingInNepalPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const hikingPackages = [
    { 
      name: "South Everest Base Camp Hike", 
      height: "5,364 Meters", 
      desc: "One of the most popular hiking routes in the Nepal Himalayas, the South Everest Base Camp hike offers breathtaking views of the world's highest peaks.",
      img: Southeverest, 
      tag: "Top Choice"
    },
    { 
      name: "Annapurna Base Camp Hike", 
      height: "4,130 Meters", 
      desc: "The ABC Hike is one of Nepal's most popular routes (also known as ABC trail) surrounded by iconic peaks. Ideal for stunning mountain views and cultural village experience.",
      img: Annapurna,
      tag: "Scenic Trail"
    },
    { 
      name: "Mustang Hiking", 
      height: "3,840 Meters", 
      desc: "For those seeking a unique Himalayan adventure beyond the usual green valleys, Mustang Hiking offers a rare glimpse into a former 'forbidden kingdom' with distinct arid landscapes.",
      img: Mustang,
      tag: "Hidden Gem"
    }
  ];

  const seasons = [
    { name: "Spring", months: "March – May", desc: "Perfect season for hiking in Nepal with clear skies, colorful rhododendrons, and mild weather. Best for Everest Base Camp and Annapurna.", color: "bg-emerald-50 border-emerald-100" },
    { name: "Autumn", months: "Sept – Nov", desc: "The best time for hiking. Enjoy crystal clear mountain views, pleasant temperatures, and vibrant festivals. Ideal for all routes.", color: "bg-orange-50 border-orange-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Peaceful and less crowd. Fine season, great for short and lower-altitude hikes like Ghorepani Poon Hill.", color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "Lush green landscapes. Choose rain-shadow areas like Upper Mustang and Upper Dolpo for the best experience.", color: "bg-slate-50 border-slate-100" }
  ];

  const faqs = [
    { q: "What is the best time to hike to South Everest Base Camp in Nepal?", a: "The best time to hike to South Everest Base Camp is during spring (March–May) and autumn (September–November). These seasons offer clear skies, stable weather, and excellent views of Mount Everest." },
    { q: "How difficult is the Annapurna Base Camp hike?", a: "The Annapurna Base Camp (ABC) hike is considered moderate in difficulty. It involves daily walks of 5–6 hours through scenic mountain villages and forests." },
    { q: "Is a guide required for Mustang Hiking in Nepal?", a: "While independent trekking is possible, hiring a licensed guide for Mustang hiking is highly recommended for navigation, local permits, and cultural insights." },
    { q: "How long does it take to complete the South Everest Base Camp trek?", a: "The Everest Base Camp trek typically takes 10 to 14 days, depending on the route and acclimatization schedule." },
    { q: "What permits are needed for hiking in Nepal's Mustang and Annapurna regions?", a: "For Annapurna Base Camp, you need the TIMS card and ACAP permit. For Upper Mustang, trekkers must obtain a Restricted Area Permit." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. FULL WIDTH HERO BANNER */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={hiking} 
            className="w-full h-full object-cover" 
            alt="Hiking in Nepal"
          />
          {/* Dark Overlay for Text Pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 text-left">
          <div className="max-w-4xl">
            {/* <nav className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-6">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={10} />
              <span className="text-white">Short Adventures</span>
            </nav> */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tight">
              Discover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Himalayan Trails
              </span>
              <br /> Hiking in Nepal
            </h1>
            
            <p className="text-slate-200 text-sm md:text-lg mb-10 max-w-xl font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-6 opacity-90">
              "Nepal is a paradise for nature seekers. From lush green valleys to snow-capped peaks, experience a spiritual connection with the world's highest mountains."
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING INFO BOX */}
      <section className="relative z-20 px-6 -mt-12 md:-mt-20 mb-20">
        <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 text-left">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Day Expeditions & Scenic Routes</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                Whether you're a beginner looking for short scenic routes or an experienced trekker seeking high-altitude challenges, Nepal offers trails for every level. Every step in Nepal's mountains tells a story of nature, spirituality, and human endurance.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-emerald-300 w-full md:w-auto text-center">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Difficulty</p>
                 <p className="text-3xl font-black text-slate-900 tracking-tighter">Easy-Moderate</p>
                 <p className="text-[10px] font-bold text-emerald-600 uppercase mt-1">Himalayan Arc Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIKING DESTINATIONS GRID */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Top Hiking Destinations</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">Curated day trips & short routes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {hikingPackages.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col text-left">
              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg leading-none">{site.height}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-base lg:text-xl text-slate-800 mb-2 uppercase tracking-tight flex items-center justify-between">
                    {site.name}
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-emerald-600 transition-colors"/>
                  </h4>
                  <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic mb-6 leading-relaxed">{site.desc}</p>
                </div>
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-xl lg:rounded-2xl font-black text-[10px] tracking-widest transition-all duration-300 uppercase shadow-lg">
                  Book Now <ChevronRight size={14} className="inline ml-1"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEASON GUIDE */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Best Time To Visit</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2">Seasonal Guide for Day Hikes</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border ${season.color} text-left transition-transform hover:scale-[1.02]`}>
                  <h4 className="text-base lg:text-lg font-black text-slate-900 uppercase mb-1">{season.name}</h4>
                  <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-4">{season.months}</p>
                  <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed">{season.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-white px-5 text-left">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-emerald-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Common Questions</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2">Safety & Prep for Day Trips</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-5 lg:p-6 flex items-center justify-between transition-colors hover:bg-slate-100"
                >
                  <span className="text-[11px] lg:text-base font-black uppercase text-slate-800">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} size={18}/>
                </button>
                {activeFaq === i && (
                   <p className="px-5 lg:px-6 pb-6 text-slate-500 text-[10px] lg:text-sm font-medium leading-relaxed italic border-t border-slate-200/50 pt-4">
                     {faq.a}
                   </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 lg:py-24 px-5">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl text-center">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 blur-[120px] opacity-20"></div>
           <Sunrise className="mx-auto mb-6 text-emerald-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-tight">
             Ready for a <span className="text-emerald-500">Day Trip?</span>
           </h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Hiking in Nepal is the quickest way to find peace and witness the majesty of the Himalayas. Book your short adventure today!"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-emerald-600 text-slate-900 hover:text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl uppercase flex items-center gap-3">
                 <PhoneCall size={18}/> +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Nepal Tour & Travels</p>
                 <p className="font-bold text-xs text-slate-300 italic leading-none">Gorakhpur HQ</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default HikingInNepalPage;