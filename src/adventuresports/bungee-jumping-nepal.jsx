import React, { useState } from 'react';
import TheLastResort from "../images/Bungee-Jumping-at-The-Last-Resort.jpg"
import KushmaBungee from "../images/caption (1).jpg"
import PokharaBungee from "../images/Bungee-jump.jpg"
import Bungeejumping from "../images/Bungee jumping.jpeg"

import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse,
  PhoneCall
} from 'lucide-react';

const BungeeJumpingNepal = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const jumpSites = [
    { 
      name: "The Last Resort", 
      height: "160 Meters", 
      desc: "Suspended 160 meters above the wild Bhote Koshi River near the Tibetan border. Nepal's original and most iconic natural jump site.", 
      img: TheLastResort,
      tag: "Highest Natural"
    },
    { 
      name: "Kushma Bungee", 
      height: "228 Meters", 
      desc: "Experience the world's second-highest bungee jump over the jaw-dropping Kali Gandaki Gorge surrounded by epic Himalayan views.", 
      img: KushmaBungee ,
      tag: "World Rank #2"
    },
    { 
      name: "Pokhara Bungee", 
      height: "Scenic Dive", 
      desc: "Leap above the stunning Phewa Lake with breathtaking views of the Annapurna range. Perfect for first-timers seeking scenic beauty.", 
      img: PokharaBungee,
      tag: "Scenic Thrill"
    }
  ];

  const seasons = [
    { name: "Spring", months: "March – May", desc: "Ideal time with clear skies, mild weather, and vibrant surroundings. Perfect for all sites.", color: "bg-orange-50 border-orange-100" },
    { name: "Autumn", months: "Sept – Nov", desc: "Best season with stable weather and crystal visibility. Enjoy jumps amid golden landscapes.", color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "Sites remain open but expect rain. Great time for lush greenery and fewer crowds.", color: "bg-slate-50 border-slate-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Cool temperatures and clear mountain views create dramatic backdrops for experienced jumpers.", color: "bg-orange-50 border-orange-100" }
  ];

  const faqs = [
    { q: "What is the best time for bungee jumping in Nepal?", a: "The best time is during spring (March–May) and autumn (September–November) when the weather is clear, stable, and ideal for outdoor adventures." },
    { q: "Which are the best places for bungee jumping?", a: "The top sites are The Last Resort (Bhote Koshi), Kushma Bungee Jump (world's 2nd highest), and Pokhara Bungee Jump." },
    { q: "Is bungee jumping in Nepal safe?", a: "Yes, bungee jumping in Nepal is very safe when done with licensed operators. All major sites follow international safety standards." },
    { q: "How much does bungee jumping cost in Nepal?", a: "The average bungee jumping price in Nepal ranges from NPR 7,000 to NPR 12,000 per jump, depending on the location." },
    { q: "Can beginners try bungee jumping in Nepal?", a: "Absolutely! Bungee jumping in Nepal is open to both beginners and experienced jumpers. Professional instructors guide you through every step." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. FULL WIDTH HERO BANNER */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={Bungeejumping} 
            className="w-full h-full object-cover" 
            alt="Bungee Jumping in Nepal"
          />
          {/* Dark Overlay for Text Pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12">
          <div className="max-w-4xl text-left">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tight">
              Bungee Jumping <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                The Ultimate Leap
              </span>
              <br /> in Nepal
            </h1>
            
            <p className="text-slate-200 text-sm md:text-lg mb-10 max-w-xl font-medium leading-relaxed italic border-l-4 border-orange-500 pl-6 opacity-90">
              "Experience the adrenaline of freefalling from dizzying heights surrounded by deep river gorges and the majestic Himalayas."
            </p>

          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING INFO BOX */}
      <section className="relative z-20 px-6 -mt-12 md:-mt-20 mb-20">
        <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 text-left">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">An Adrenaline Playground</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                Nepal isn't just a land of mountains — it's a playground for thrill seekers. Bungee jumping in Nepal stands out as one of the most daring and unforgettable experiences. Leap into the extraordinary with world-class safety standards.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-orange-300 w-full md:w-auto text-center">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Jump Height</p>
                 <p className="text-3xl font-black text-slate-900 tracking-tighter">228m Max</p>
                 <p className="text-[10px] font-bold text-orange-600 uppercase mt-1">International Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JUMP SITES GRID */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Top Bungee Destinations</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">World-class thrill spots in the Himalayas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {jumpSites.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col text-left">
              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">{site.height}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-base lg:text-xl text-slate-800 mb-2 uppercase tracking-tight flex items-center justify-between">
                    {site.name}
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-orange-600 transition-colors"/>
                  </h4>
                  <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic mb-6 leading-relaxed">{site.desc}</p>
                </div>
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-xl lg:rounded-2xl font-black text-[10px] tracking-widest transition-all duration-300 uppercase shadow-lg">
                  Book This Jump <ChevronRight size={14} className="inline ml-1"/>
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
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2">Seasonal Guide for Bungee Adventures</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border ${season.color} text-left transition-transform hover:scale-[1.02]`}>
                  <h4 className="text-base lg:text-lg font-black text-slate-900 uppercase mb-1">{season.name}</h4>
                  <p className="text-[9px] font-black text-orange-600 uppercase tracking-widest mb-4">{season.months}</p>
                  <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed">{season.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-white px-5 text-left">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-orange-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Common Questions</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2">Essential safety & knowledge</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-5 lg:p-6 flex items-center justify-between transition-colors hover:bg-slate-100"
                >
                  <span className="text-[11px] lg:text-base font-black uppercase text-slate-800">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} size={18}/>
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
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 blur-[120px] opacity-20"></div>
           <Wind className="mx-auto mb-6 text-orange-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-tight">
             Ready for the <span className="text-orange-500">Ultimate Leap?</span>
           </h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Bungee jumping in Nepal is a daring and unforgettable experience that blends excitement with natural beauty. Leap into the extraordinary!"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl uppercase flex items-center gap-3">
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

export default BungeeJumpingNepal;