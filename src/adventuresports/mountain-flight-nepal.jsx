import React, { useState } from 'react';
import caption from "../images/caption.jpg";
// Note: Assuming you have a mountain flight video, replace this source. 
// If not, it will fall back to the poster image (caption.jpg).
import Everest_Video from "../images/Mountain_Flight_Nepal.mp4"; 

import { 
  Mountain, Clock, ShieldCheck, Star, 
  CheckCircle, Calendar, Plane,
  ChevronDown, Zap, MapPin, Award, Check,
  CloudSun, PhoneCall
} from 'lucide-react';

const MountainFlightNepalDetailed = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const flightFacts = [
    { label: "Duration", value: "50-60 Mins", icon: <Clock className="text-orange-500" size={20}/> },
    { label: "Best Time", value: "Early Morning", icon: <Calendar className="text-orange-500" size={20}/> },
    { label: "Seating", value: "Window Seats", icon: <ShieldCheck className="text-orange-500" size={20}/> },
    { label: "Service", value: "Hotel Pickup", icon: <MapPin className="text-orange-500" size={20}/> }
  ];

  const highlights = [
    "Experience a stunning 1-hour mountain flight across Himalayas.",
    "Witness Nepal’s breathtaking beauty from high above the clouds.",
    "Enjoy a smooth and scenic aerial journey over the mountains.",
    "Fly with expert pilots and enjoy wide panoramic window views."
  ];

  const advantages = [
    "Window seats assured for every passenger.",
    "Top safety measures with skilled, experienced pilots.",
    "Quick and easy booking with no complications.",
    "Airport assistance provided for a smooth experience."
  ];

  const faqs = [
    { q: "How long is the mountain flight?", a: "The flight time is approximately 50–60 minutes; total tour time including pickup is ~2 hours." },
    { q: "When is the best time to go?", a: "Early morning flights (clear skies) are best — September to April gives the most stable visibility." },
    { q: "Can I get a window seat?", a: "We request window seats for all guests, but seat assignment is subject to the airline’s final allocation." },
    { q: "What happens if the flight is canceled due to weather?", a: "You can reschedule or receive a full refund — we monitor weather and advise early if changes are needed." },
    { q: "Do I need travel insurance?", a: "Yes — we strongly recommend personal travel insurance covering flight cancellations and health." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. PREMIUM HERO BANNER (Styled like Paragliding Page) */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <video 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          // poster={caption}
        >
          <source src={Everest_Video} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-10">
          <div className="max-w-3xl">
            
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 lg:mb-6 uppercase">
              Face to Face with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Mount Everest
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-xl text-slate-200 mb-6 lg:mb-8 max-w-xl font-medium leading-relaxed italic">
              "Experience Nepal's Himalayas like never before with a one-hour panoramic flight from Kathmandu."
            </p>

            
          </div>
        </div>
      </section>

      {/* 2. FLOATING INFO BAR + LIVE STATUS */}
      <section className="relative z-30 px-4 -mt-12 md:-mt-16 lg:-mt-20">
         <div className="max-w-7xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl lg:rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-slate-100">
              {flightFacts.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 lg:gap-4 p-4 lg:p-8">
                  <div className="bg-orange-50 p-2 lg:p-3 rounded-lg lg:rounded-xl shrink-0">{stat.icon}</div>
                  <div>
                    <p className="text-[9px] lg:text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</p>
                    <p className="text-slate-900 font-extrabold text-xs lg:text-base">{stat.value}</p>
                  </div>
                </div>
              ))}
              
              {/* LIVE FLIGHT STATUS WIDGET */}
              <div className="col-span-2 md:col-span-1 lg:col-span-1 bg-slate-50/80 p-4 lg:p-8 flex items-center gap-4 border-l-4 border-orange-500">
                 <div className="p-2 bg-white rounded-full shadow-sm">
                    <CloudSun className="text-blue-500 animate-pulse" size={24}/>
                 </div>
                 <div>
                    <div className="flex items-center gap-2">
                       <p className="text-[10px] uppercase font-black text-slate-500">Flight Visibility</p>
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    </div>
                    <p className="text-slate-900 font-black text-sm lg:text-base">Clear Views</p>
                    <p className="text-[9px] font-bold text-orange-600 uppercase">Status: Operating</p>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* 3. HIGHLIGHTS & ADVANTAGES BENTO GRID */}
      <section className="py-16 lg:py-24 px-5 lg:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 text-left">
        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-center group hover:border-orange-200 transition-all">
          <div className="flex items-center gap-4 mb-8">
             <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-900/10">
                <Star size={24} fill="white"/>
             </div>
             <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter">Tour Highlights</h2>
          </div>
          <ul className="space-y-5">
            {highlights.map((item, i) => (
              <li key={i} className="flex gap-4 text-xs lg:text-base text-slate-600 font-bold italic leading-relaxed items-start">
                <CheckCircle size={20} className="text-orange-600 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 blur-[100px] opacity-20"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
             <div className="bg-white p-3 rounded-2xl text-slate-900 shadow-xl">
                <Award size={24}/>
             </div>
             <h2 className="text-xl lg:text-3xl font-black uppercase tracking-tighter italic">Booking Advantages</h2>
          </div>
          <ul className="space-y-5 relative z-10">
            {advantages.map((item, i) => (
              <li key={i} className="flex gap-4 text-xs lg:text-base opacity-90 font-bold italic leading-relaxed items-start">
                <ShieldCheck size={20} className="text-orange-500 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. CONTENT WITH IMAGE (Styled like Paragliding Why Choose section) */}
      <section className="py-12 lg:py-24 px-5 lg:px-6 max-w-7xl mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight uppercase leading-tight">
              Aerial Views of the <br/><span className="text-orange-600 italic font-serif lowercase">highest peaks</span>
            </h3>
            <p className="text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed mb-8 border-l-4 border-orange-100 pl-5">
              Enjoy unforgettable aerial sights of Mount Everest, Lhotse, Makalu, and more. It's an ideal choice for photographers seeking the best scenic views in Nepal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["50-60 Min Duration", "Guaranteed Seating", "Airport Assistance", "Professional Crew"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm group hover:border-orange-600 transition-colors">
                    <div className="bg-orange-50 p-1.5 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                       <Check size={16}/>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-slate-700 tracking-wide">{item}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 px-4">
            <div className="absolute inset-0 bg-orange-600 rounded-3xl rotate-3"></div>
            <img 
              src={caption} 
              className="relative rounded-3xl w-full h-[350px] lg:h-[500px] object-cover -rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl" 
              alt="Nepal Peaks" 
            />
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Need Help?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 italic uppercase">Flight Intelligence</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 lg:text-lg uppercase pr-4">{faq.q}</span>
                  <div className={`p-2 rounded-full bg-orange-50 text-orange-600 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {activeFaq === i && (
                   <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed italic border-t border-slate-50 pt-4">
                     {faq.a}
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - BRANDED STYLE */}
      <section className="py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-8 lg:p-24 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600 blur-[120px] rounded-full"></div>
           </div>

           <h2 className="relative z-10 text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
             Witness Everest <br />
             <span className="text-orange-500 italic font-serif">From the Clouds</span>
           </h2>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 relative z-10">
              <a href="tel:+918576000084" className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-lg lg:text-xl transition-all hover:bg-orange-600 hover:text-white shadow-xl hover:-translate-y-1">
                <PhoneCall size={24} className="group-hover:animate-bounce"/>
                +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-1">Nepal Tour & Travels</p>
                 <p className="text-slate-400 font-medium text-base lg:text-lg italic">Trusted Experts since 1999</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default MountainFlightNepalDetailed;