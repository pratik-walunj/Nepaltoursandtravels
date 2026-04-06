import React, { useState } from 'react';
import annupamabasecamp from "../images/annupama-base-camp.jpg"
import AnnapurnaCircuit from "../images/Annapurna-Circuit.webp"
import vally from "../images/vally.webp"
import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse,
  Compass, Navigation, Thermometer, PhoneCall
} from 'lucide-react';

const TrekkingInNepal = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const trekSites = [
    { 
      name: "Everest Base Camp Trek", 
      height: "5,364 Meters", 
      desc: "The Everest Base Camp Trek takes you through Sherpa villages and Himalayan trails to Mount Everest's base, offering breathtaking views and rich culture.",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop", 
      tag: "Iconic Path"
    },
    { 
      name: "Annapurna Base Camp Trek", 
      height: "4,130 Meters", 
      desc: "The Annapurna Base Camp Trek combines scenic mountain views, Gurung villages, and serene landscapes — a perfect mix of adventure and cultural immersion in Nepal.",
      img: annupamabasecamp,
      tag: "Pure Serenity"
    },
    { 
      name: "Mustang Trek", 
      height: "3,840 Meters", 
      desc: "The Mustang Trek explores Nepal's ancient desert kingdom with Tibetan culture, colorful cliffs, and centuries-old monasteries in a unique Himalayan setting.",
      img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2070&auto=format&fit=crop",
      tag: "Hidden Kingdom"
    },
    { 
      name: "Annapurna Circuit Trek", 
      height: "5,416 Meters", 
      desc: "The Annapurna Circuit Trek circles the Annapurna range, crossing Thorong La Pass and showcasing stunning landscapes, local culture, and diverse Himalayan terrain.",
      img: AnnapurnaCircuit,
      tag: "The Classic"
    },
    { 
      name: "Langtang Valley Trek", 
      height: "3,870 Meters", 
      desc: "The Langtang Valley Trek offers peaceful trails, Tamang culture, and mountain views close to Kathmandu — ideal for short yet scenic Himalayan adventures.",
      img: vally,
      tag: "Cultural Valley"
    },
    { 
      name: "Khopra Ridge Trek", 
      height: "3,660 Meters", 
      desc: "The Khopra Ridge Trek provides quiet trails, stunning sunrise views, and authentic local hospitality in Nepal's beautiful Annapurna region.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      tag: "Off-Beat"
    }
  ];

  const seasons = [
    { name: "Autumn", months: "Sept – Nov", desc: "The 'Golden Season'. Crystal clear skies and stable weather provide the best mountain views. Ideal for high passes.", color: "bg-orange-50 border-orange-100" },
    { name: "Spring", months: "March – May", desc: "Nature in bloom. Giant rhododendrons color the hills. Mild temperatures make it perfect for higher altitude treks.", color: "bg-emerald-50 border-emerald-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Quiet trails and crisp air. Best for lower altitude treks like Ghorepani. Expect snow and fewer crowds.", color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "Lush greenery and waterfalls. The best time for rain-shadow areas like Upper Mustang.", color: "bg-slate-50 border-slate-100" }
  ];

  const faqs = [
    { q: "What is the best time for trekking in Nepal?", a: "The best time for trekking in Nepal is during spring (March–May) and autumn (September–November) when the weather is clear, trails are dry, and mountain views are spectacular." },
    { q: "Do I need a permit for trekking in Nepal?", a: "Yes, most treks require permits such as the TIMS Card and specific national park or conservation area permits. These can be arranged through trekking agencies in Kathmandu or Pokhara." },
    { q: "Which is the most popular trek in Nepal?", a: "The Everest Base Camp Trek and Annapurna Base Camp Trek are Nepal’s most famous trekking routes, known for stunning Himalayan scenery, local Sherpa culture, and well-marked trails." },
    { q: "Is trekking in Nepal suitable for beginners?", a: "Absolutely! Nepal offers easy to moderate treks like Langtang Valley Trek and Khopra Ridge Trek, perfect for beginners with basic fitness levels." },
    { q: "What should I pack for a trekking trip in Nepal?", a: "Pack comfortable hiking shoes, layered clothing, a down jacket, rain gear, sunscreen, water bottles, and essential medicines. Always travel light yet prepared for changing mountain weather." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. FULL WIDTH HERO BANNER */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Trekking in Nepal Himalayas"
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
              <span className="text-white">Himalayan Adventures</span>
            </nav> */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tight">
              Trekking <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Beyond Boundaries
              </span>
              <br /> in Nepal
            </h1>
            
            <p className="text-slate-200 text-sm md:text-lg mb-10 max-w-xl font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-6 opacity-90">
              "Every mountain top is within reach if you just keep climbing. Experience the heart of the Himalayas through ancient trails and vibrant cultures."
            </p>

          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING INFO BOX */}
      <section className="relative z-20 px-6 -mt-12 md:-mt-20 mb-20">
        <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 text-left">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">A Journey Beyond the Mountains</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                Nepal is a paradise for adventure lovers, offering some of the world's most breathtaking trails. Whether you're looking for iconic base camps or hidden ridges, our curated packages ensure a journey that blends heart-pounding exploration with genuine cultural immersion.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-emerald-300 w-full md:w-auto text-center">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Max Altitude</p>
                 <p className="text-3xl font-black text-slate-900 tracking-tighter">5,550m +</p>
                 <p className="text-[10px] font-bold text-emerald-600 uppercase mt-1">Certified Guides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREKKING ROUTES GRID */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Featured Trekking Routes</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">World-class trails in the Himalayas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {trekSites.map((site, i) => (
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
                  Explore Details <ChevronRight size={14} className="inline ml-1"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEASON GUIDE */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Best Time To Trek</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2">Seasonal Guide for Himalayan Adventures</p>
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
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Trekking Guide</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2">Essential mountain logistics</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden text-left">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-5 lg:p-6 flex items-center justify-between transition-colors hover:bg-slate-100"
                >
                  <span className="text-[11px] lg:text-base font-black uppercase text-slate-800 text-left">{faq.q}</span>
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
           <Mountain className="mx-auto mb-6 text-emerald-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-tight">
             Ready for the <span className="text-emerald-500">Peak?</span>
           </h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Join us for a spiritual and cultural experience that connects you with the heart of Nepal. Your Himalayan story starts here."
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

export default TrekkingInNepal;