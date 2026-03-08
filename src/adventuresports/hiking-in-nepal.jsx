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
  Binoculars
} from 'lucide-react';

const HikingInNepalPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Data scraped from the images
  const hikingPackages = [
    { 
      name: "South Everest Base Camp Hike", 
      height: "5,364 Meters", 
      desc: "One of the most popular hiking routes in the Nepal Himalayas, the South Everest Base Camp hike offers breathtaking views of the world's highest peaks.",
      // Using placeholder, replace with actual image path from image_1.png
      img: Southeverest, 
      tag: "Top Choice"
    },
    { 
      name: "Annapurna Base Camp Hike", 
      height: "4,130 Meters", 
      desc: "The ABC Hike is one of Nepal's most popular routes (also known as ABC trail) surrounded by iconic peaks. Ideal for stunning mountain views and cultural village experience.",
      // Using placeholder, replace with actual image path from image_1.png
      img: Annapurna,
      tag: "Scenic Trail"
    },
    { 
      name: "Mustang Hiking", 
      height: "3,840 Meters", 
      desc: "For those seeking a unique Himalayan adventure beyond the usual green valleys, Mustang Hiking offers a rare glimpse into a former 'forbidden kingdom' with distinct arid landscapes.",
      // Using placeholder, replace with actual image path from image_1.png
      img: Mustang,
      tag: "Hidden Gem"
    }
  ];

  const seasons = [
    { name: "Spring", months: "March – May", desc: "Perfect season for hiking in Nepal with clear skies, colorful rhododendrons, and mild weather. Best for Everest Base Camp, Annapurna, and Langtang trails.", color: "bg-emerald-50 border-emerald-100" },
    { name: "Autumn", months: "Sept – Nov", desc: "The best time for hiking. Enjoy crystal clear mountain views, pleasant temperatures, and vibrant festivals. Ideal for Mustang and Manaslu routes.", color: "bg-orange-50 border-orange-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Peaceful and less crowd. Fine season, great for short and lower-altitude hikes like Ghorepani Poon Hill or Kathmandu Valley trails. Cold air and snow-capped scenery.", color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "Lush green landscapes and fewer trekkers. Choose rain-shadow areas like Upper Mustang and Upper Dolpo. Carry waterproof gear and travel flexibly.", color: "bg-slate-50 border-slate-100" }
  ];

  const faqs = [
    { q: "What is the best time to hike to South Everest Base Camp in Nepal?", a: "The best time to hike to South Everest Base Camp is during spring (March–May) and autumn (September–November). These seasons offer clear skies, stable weather, and excellent views of Mount Everest and surrounding Himalayan peaks." },
    { q: "How difficult is the Annapurna Base Camp hike?", a: "The Annapurna Base Camp (ABC) hike is considered moderate in difficulty. It involves daily walks of 5–6 hours through scenic mountain villages, forests, and terraced fields. With proper fitness and acclimatization, most trekkers can complete it comfortably." },
    { q: "Is a guide required for Mustang Hiking in Nepal?", a: "While independent trekking is possible, hiring a licensed guide for Mustang hiking is highly recommended. Guides help with navigation, local permits, cultural insights, and safety — especially since the Upper Mustang region has restricted areas requiring special permits." },
    { q: "How long does it take to complete the South Everest Base Camp trek?", a: "The Everest Base Camp trek typically takes 10 to 14 days, depending on the route and acclimatization schedule. Some travelers choose to add a short Everest View trek for a lighter version of the experience." },
    { q: "What permits are needed for hiking in Nepal's Mustang and Annapurna regions?", a: "For Annapurna Base Camp, you need the TIMS card and Annapurna Conservation Area Permit (ACAP). For Upper Mustang hiking, trekkers must obtain a Restricted Area Permit issued through a registered Nepal trekking agency." }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-24 font-sans selection:bg-orange-100 overflow-x-hidden text-left">
      
      {/* 1. HEADER (Based on image_0.png style) */}
      <section className="px-5 lg:px-12 mb-8 lg:mb-12">
        <div className="max-w-7xl mx-auto border-l-4 border-emerald-600 pl-5">
          <nav className="flex items-center gap-2 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
            <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase">Short Adventures</span>
          </nav>
          <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Hiking <span className="text-emerald-600 font-serif italic normal-case tracking-normal">in Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO DESCRIPTION BOX (Text from image_1.png intro) */}
      <section className="px-4 lg:px-10 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto bg-slate-50 p-6 lg:p-14 rounded-2xl lg:rounded-[3.5rem] shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* IMAGE COLUMN */}
              <div className="lg:col-span-5 order-1">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[300px] lg:h-[450px]">
                    <img 
                      src={hiking} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="Hiking Nepal Intro"
                    />
                    <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="lg:col-span-7 order-2 text-left">
                 <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full mb-6">
                    <Binoculars size={14} className="fill-emerald-600"/>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Day Expeditions</span>
                 </div>
                 <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-6 border-l-4 border-emerald-600 pl-4 uppercase tracking-tight">
                    Discover the Himalayas
                 </h2>
                 <div className="space-y-4 text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed">
                    <p>
                      Nepal is a paradise for adventure lovers and nature seekers, offering some of the world's most breathtaking trails for hiking and trekking in the Himalayas. From lush green valleys to snow-capped peaks, hiking in Nepal is not just a journey through mountains — it's a spiritual and cultural experience that connects travelers with the country's serene beauty and warm local hospitality.
                    </p>
                    <p>
                      Whether you're a beginner looking for short scenic routes or an experienced trekker seeking high-altitude challenges, Nepal offers trails for every level. Every step in Nepal's mountains tells a story — of nature, spirituality, and human endurance.
                    </p>
                 </div>
                 <div className="mt-8 flex items-center gap-6 border-t border-slate-200 pt-8">
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Best View</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Himalayan Arc</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Difficulty</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Easy - Moderate</p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* 3. HIKING DESTINATIONS GRID (Based on image_1.png section) */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Top Hiking Destinations</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">Curated day trips & short routes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {hikingPackages.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg text-[8px] lg:text-[10px] font-black uppercase tracking-widest shadow-lg leading-none">{site.height}</span>
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
                
                {/* BUTTON: Keeps your required color logic (slate-900 to orange-600) */}
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[10px] tracking-widest transition-all duration-300 uppercase shadow-lg">
                  Book Now <ChevronRight size={14} className="inline ml-1"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEASON GUIDE (Updated with text from image_1.png) */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Best Time To Visit</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2 text-center">Seasonal Guide for Day Hikes</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border ${season.color} text-left transition-transform hover:scale-[1.02]`}>
                 <h4 className="text-base lg:text-lg font-black text-slate-900 uppercase mb-1">{season.name}</h4>
                 <p className="text-[8px] lg:text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-4 leading-none">{season.months}</p>
                 <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed">{season.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. FAQ SECTION (Text from image_1.png) */}
      <section className="py-16 lg:py-24 bg-white px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-emerald-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Common Questions</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2 text-center">Safety & Prep for Day Trips</p>
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

      {/* 6. CALL TO ACTION (Based on image_0.png style) */}
      <section className="py-16 lg:py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 blur-[120px] opacity-20"></div>
           <Sunrise className="mx-auto mb-6 text-emerald-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter">Ready for a <span className="text-emerald-500">Day Trip?</span></h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Hiking in Nepal is the quickest way to find peace and witness the majesty of the Himalayas. Book your short adventure today!"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[11px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
                 Book Hike: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5 leading-none">Nepal Tours & Travels</p>
                 <p className="font-bold text-[10px] lg:text-xs text-slate-300 italic leading-none">Gorakhpur HQ</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default HikingInNepalPage;