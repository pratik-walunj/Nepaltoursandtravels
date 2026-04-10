import React, { useState } from 'react';
import Paraglidinginnepal from "../images/Paragliding-in-nepal.webp"
import Annapurna from "../images/Annapurna.jpeg"
import Nepal_Paragliding from "../images/Nepal_Paragliding_Video.mp4"
import { 
  Mountain, Clock, ShieldCheck, 
  CheckCircle, UserCheck, Calendar, 
  ChevronDown, Zap, MapPin, 
  Award, Camera, PhoneCall,
  Coffee, Sunset, Binoculars,
  CloudSun, Wind, Thermometer
} from 'lucide-react';

const ResponsiveParaglidingNepal = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const activityStats = [
    { label: "Age Limit", value: "5-60 Years", icon: <UserCheck className="text-orange-500" size={20}/> },
    { label: "Weight Max", value: "90 Kg", icon: <ShieldCheck className="text-orange-500" size={20}/> },
    { label: "Best Season", value: "Sept - May", icon: <Calendar className="text-orange-500" size={20}/> },
    { label: "Duration", value: "30-60 Min", icon: <Clock className="text-orange-500" size={20}/> }
  ];

  const itinerary = [
    {
      day: "Day 01",
      title: "Arrival & Lakeside Exploration",
      desc: "Arrive in Pokhara, check into your hotel, and spend the evening walking along the serene Phewa Lake. Enjoy a sunset boat ride with views of Mount Machhapuchhre.",
      icon: <Sunset className="text-orange-600" />
    },
    {
      day: "Day 02",
      title: "The Big Flight Day",
      desc: "Early morning drive to Sarangkot (1,592m). Experience your Tandem Paragliding flight over the valley. Afternoon visit to Davis Falls and Gupteshwor Mahadev Cave.",
      icon: <Zap className="text-orange-600" />
    },
    {
      day: "Day 03",
      title: "Sunrise & Departure",
      desc: "Wake up early for a sunrise view from the World Peace Pagoda. After a hearty breakfast at a lakeside café, prepare for your journey back or onward destination.",
      icon: <Coffee className="text-orange-600" />
    }
  ];

  const faqs = [
    { q: "What is the best time for paragliding in Nepal?", a: "Peak season is Sept-Dec and Feb-May for crystal clear Himalayan views." },
    { q: "Is it safe for beginners?", a: "Absolutely. All flights are 'Tandem,' meaning you fly with a world-class certified pilot." },
    { q: "What should I wear?", a: "Comfortable windproof jackets, long trousers, and sturdy closed-toe shoes are recommended." },
    { q: "Where is the take-off point?", a: "Most flights take off from Sarangkot (1,592m), offering the best thermals and views." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. PREMIUM HERO BANNER */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <video 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={Paraglidinginnepal}
        >
          <source src={Nepal_Paragliding} type="video/mp4" />
        </video>
        


        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-10">
          <div className="max-w-3xl">
            
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 lg:mb-6">
              Touch the Sky in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Majestic Pokhara
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-xl text-slate-200 mb-6 lg:mb-8 max-w-xl font-medium leading-relaxed">
              Experience the adrenaline of tandem paragliding with panoramic views of the Annapurna range and Phewa Lake.
            </p>

            
          </div>
        </div>
      </section>

      {/* 2. FLOATING INFO BAR + LIVE WEATHER WIDGET */}
      <section className="relative z-30 px-4 -mt-12 md:-mt-16 lg:-mt-20">
         <div className="max-w-7xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl lg:rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-slate-100">
              {/* Activity Stats */}
              {activityStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 lg:gap-4 p-4 lg:p-8">
                  <div className="bg-orange-50 p-2 lg:p-3 rounded-lg lg:rounded-xl shrink-0">{stat.icon}</div>
                  <div>
                    <p className="text-[9px] lg:text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</p>
                    <p className="text-slate-900 font-extrabold text-xs lg:text-base">{stat.value}</p>
                  </div>
                </div>
              ))}
              
              {/* LIVE WEATHER WIDGET */}
              <div className="col-span-2 md:col-span-1 lg:col-span-1 bg-slate-50/80 p-4 lg:p-8 flex items-center gap-4 border-l-4 border-orange-500">
                 <div className="p-2 bg-white rounded-full shadow-sm">
                    <CloudSun className="text-blue-500 animate-pulse" size={24}/>
                 </div>
                 <div>
                    <div className="flex items-center gap-2">
                       <p className="text-[10px] uppercase font-black text-slate-500">Live Pokhara Sky</p>
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    </div>
                    <p className="text-slate-900 font-black text-sm lg:text-base">13°C • Clear Sky</p>
                    <p className="text-[9px] font-bold text-orange-600 uppercase">Flyable Conditions: Excellent</p>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-50 rounded-full -z-10 animate-pulse"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Why Choose <br />
              <span className="text-orange-600 italic font-serif">Nepal Tour & Travels?</span>
            </h2>
            
            <div className="space-y-6 lg:space-y-8">
              {[
                { title: "APPI Certified Pilots", desc: "Safety first. Our pilots hold international tandem licenses with 10+ years of experience.", icon: <Award className="text-orange-600"/> },
                { title: "Premium Photo & Video", desc: "We provide professional GoPro 11/12 footage so you can relive your flight forever.", icon: <Camera className="text-orange-600"/> },
                { title: "Safety Protocol", desc: "Equipped with reserve parachutes and daily updated weather forecasting tools.", icon: <ShieldCheck className="text-orange-600"/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="mt-1 shrink-0 p-3 rounded-xl bg-orange-50 group-hover:bg-orange-600 transition-colors group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 px-4">
            <div className="absolute inset-0 bg-orange-600 rounded-3xl rotate-3"></div>
            <img 
              src={Annapurna} 
              className="relative rounded-3xl w-full h-[350px] lg:h-[550px] object-cover -rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl" 
              alt="Himalayan View" 
            />
          </div>
        </div>
      </section>

      {/* 4. ITINERARY SECTION */}
      <section className="py-20 bg-slate-900 text-white px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Plan Your Journey</span>
            <h2 className="text-3xl lg:text-5xl font-black mt-3">3 Days in Pokhara</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">A perfectly balanced itinerary combining relaxation, local culture, and the thrill of paragliding.</p>
          </div>

          <div className="space-y-12">
            {itinerary.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
                <div className="md:w-32 shrink-0">
                  <span className="text-4xl md:text-5xl font-black text-orange-600 opacity-50 group-hover:opacity-100 transition-opacity">{item.day}</span>
                </div>
                <div className="flex-1 pb-12 border-b border-slate-800 last:border-0 relative">
                  <div className="absolute -left-4 md:-left-8 top-2 p-2 bg-slate-800 rounded-full group-hover:bg-orange-600 transition-colors">
                    {React.cloneElement(item.icon, { size: 20, className: "group-hover:text-white" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 pl-4 md:pl-0">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed pl-4 md:pl-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Need Help?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2">Essential Information</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 lg:text-lg pr-4">{faq.q}</span>
                  <div className={`p-2 rounded-full bg-orange-50 text-orange-600 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {activeFaq === i && (
                   <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-50 pt-4 animate-in fade-in slide-in-from-top-2">
                     {faq.a}
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-8 lg:p-24 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600 blur-[120px] rounded-full"></div>
           </div>

           <h2 className="relative z-10 text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
             Adventure is Calling. <br />
             <span className="text-orange-500 uppercase">Are You Ready?</span>
           </h2>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 relative z-10">
              <a href="tel:+918576000084" className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-lg lg:text-xl transition-all hover:bg-orange-600 hover:text-white shadow-xl hover:-translate-y-1">
                <PhoneCall size={24} className="group-hover:animate-bounce"/>
                +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-1">Book Your Slot Today</p>
                 <p className="text-slate-400 font-medium text-base lg:text-lg">Limited flights available during peak season</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default ResponsiveParaglidingNepal;