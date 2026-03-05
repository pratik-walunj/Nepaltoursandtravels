import React from 'react';
import { 
  MapPin, Clock, BookOpen, Star, ShieldCheck, 
  ChevronRight, Landmark, ArrowUpRight, CheckCircle,
  Users, Bus, Headphones
} from 'lucide-react';

const SchoolTripNepal = () => {
  
  const educationalSpots = [
    { 
      name: "Lumbini, Nepal", 
      desc: "UNESCO Site & Birthplace of Lord Buddha. Focus on history and global heritage.", 
      img: "src/images/lumbin.jpeg",
      tag: "UNESCO Heritage"
    },
    { 
      name: "Balmiki Nagar", 
      desc: "Geography and eco-tourism learning near the Indo-Nepal border wildlife area.", 
      img: "src/images/GettyImages-1439040510.webp",
      tag: "Geography & Nature"
    },
    { 
      name: "Kushinagar", 
      desc: "Land of Mahaparinirvana. Students gain deep historical and spiritual knowledge.", 
      img: "src/images/kushinagar-banner2.webp",
      tag: "Historical Study"
    },
    { 
      name: "Ayodhya", 
      desc: "Sacred city for learning Indian culture, Ramayana history, and ancient traditions.", 
      img: "src/images/Ram-Mandir-Ayodhya-Tour.jpg",
      tag: "Cultural History"
    }
  ];

  const features = [
    { title: "Educational Learning", icon: <BookOpen size={24}/> },
    { title: "Safe Student Travel", icon: <ShieldCheck size={24}/> },
    { title: "Group Accommodations", icon: <Users size={24}/> },
    { title: "24/7 School Support", icon: <Headphones size={24}/> }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-28 font-sans overflow-x-hidden">
      
      {/* 1. TOP HEADING SECTION */}
      <section className="px-4 lg:px-8 mb-6 lg:mb-10">
        <div className="max-w-7xl mx-auto text-center md:text-left border-b border-slate-100 pb-6 lg:pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center justify-center md:justify-start gap-2 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 lg:mb-3">
                <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
                <span>/</span>
                <span className="text-slate-900 uppercase">Educational Tours</span>
              </nav>
              <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                School Trip <br className="hidden lg:block"/>
                <span className="text-orange-600 font-serif italic font-medium normal-case tracking-normal">Gorakhpur to Nepal</span>
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 lg:gap-4 bg-white p-2 lg:p-3 rounded-2xl shadow-sm border border-slate-50">
              <div className="text-right">
                <p className="text-[9px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 leading-none">Tour Specialists</p>
                <p className="text-xs lg:text-sm font-black text-slate-900 leading-none">Since 1999</p>
              </div>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-md">
                <Users size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM MULTI-IMAGE HERO SECTION */}
      <section className="px-2 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 lg:gap-4 h-auto lg:h-[60vh]">
          <div className="lg:w-2/3 h-[250px] lg:h-full relative overflow-hidden rounded-2xl lg:rounded-[3rem] group shadow-xl">
            <img 
              src="src\images\425-1.webp" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Students in Nepal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white pr-4">
              <span className="bg-orange-600 px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest mb-2 inline-block shadow-lg leading-none">Educational Excellence</span>
              <h2 className="text-lg lg:text-3xl font-bold italic tracking-tight uppercase leading-tight">"Safe, Well-Organized Student Excursions"</h2>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 lg:gap-4 h-[150px] lg:h-auto">
            <div className="w-1/2 lg:w-full h-full lg:h-1/2 relative overflow-hidden rounded-2xl lg:rounded-[3rem] shadow-md group border border-slate-100">
              <img src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Educational Bus" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center p-2 lg:p-4">
                <p className="text-white font-bold uppercase tracking-widest text-[10px] lg:text-lg">Reliable Fleet</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full h-full lg:h-1/2 bg-blue-900 rounded-2xl lg:rounded-[3rem] p-4 lg:p-8 flex flex-col justify-center text-white relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-24 lg:w-32 h-24 lg:h-32 bg-orange-600 blur-[80px] opacity-30"></div>
               <Bus size={24} className="mb-2 lg:mb-3 text-orange-400 lg:block hidden" />
               <h3 className="text-xs lg:text-xl font-black leading-tight mb-1 uppercase italic text-white text-left">24/7 On-Trip <br/> Support</h3>
               <p className="text-[7px] lg:text-[10px] font-bold text-blue-300 tracking-widest uppercase leading-none text-left">Security First</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE DESCRIPTION (REWRITTEN FROM SOURCE) */}
      <section className="py-12 lg:py-20 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="bg-white p-6 lg:p-16 rounded-2xl lg:rounded-[4rem] shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            <div className="lg:col-span-8">
              <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-4 lg:mb-6 uppercase tracking-tighter border-l-4 lg:border-l-8 border-orange-600 pl-4 lg:pl-6 leading-none">
                Empowering Students Through Travel
              </h2>
              <div className="space-y-4 lg:space-y-6 text-slate-600 font-medium italic leading-relaxed text-xs lg:text-base">
                <p>
                  This school trip from Gorakhpur to Nepal helps students explore historical, cultural, and educational destinations in a safe and well-organized environment. Ideal for school excursions and student study trips, we offer guided learning at every location.
                </p>
                <p>
                  With carefully planned routes covering Balmiki Nagar, Lumbini, Kushinagar, Ayodhya, and Butwal, students gain real-world knowledge, cultural exposure, and memorable experiences beyond the classroom.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:gap-4">
               {features.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-4 lg:p-6 rounded-xl lg:rounded-3xl border border-slate-100 flex items-center gap-3 lg:gap-4 group hover:bg-orange-600 transition-colors duration-300">
                    <div className="text-orange-600 group-hover:text-white shrink-0">{item.icon}</div>
                    <p className="text-[8px] lg:text-[10px] font-black uppercase text-slate-700 group-hover:text-white tracking-widest">{item.title}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATIONAL DESTINATIONS GRID (IMAGE TOP) */}
      <section className="py-12 lg:py-24 bg-slate-50 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto text-center mb-8 lg:mb-16">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2 lg:mb-3">Major Educational Stops</h2>
          <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest">Bridging Classrooms and History</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {educationalSpots.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col text-left">
              <div className="h-[180px] lg:h-[220px] relative overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <span className="bg-orange-600 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-lg text-[7px] lg:text-[9px] font-black uppercase tracking-widest shadow-lg leading-none">{item.tag}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1">
                <h4 className="font-black text-base lg:text-xl text-slate-800 mb-3 lg:mb-4 uppercase tracking-tight flex items-center justify-between">
                  {item.name}
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-orange-600 transition-colors hidden lg:block"/>
                </h4>
                <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed mb-6 lg:mb-8">
                  {item.desc}
                </p>

                {/* SLATE BY DEFAULT -> ORANGE ON HOVER (Opposite Logic) */}
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[8px] lg:text-[10px] tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 uppercase shadow-lg group-hover:shadow-orange-900/20">
                  Plan Trip <ChevronRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION FOOTER */}
      <section className="py-12 lg:py-24 px-4 lg:px-6 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-8 lg:p-24 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-48 lg:w-72 h-48 lg:h-72 bg-orange-600 blur-[100px] lg:blur-[150px] opacity-20"></div>
           <h2 className="text-2xl lg:text-6xl font-black mb-4 lg:mb-8 tracking-tighter uppercase leading-none italic">Organize Your <br/><span className="text-orange-500">School Excursion</span></h2>
           <p className="text-slate-400 text-xs lg:text-lg mb-8 lg:mb-14 italic font-medium opacity-80 leading-relaxed max-w-2xl mx-auto">
             "For bookings or school inquiries, contact us 24/7! We ensure a safe and memorable learning experience."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8">
              {/* WHITE BY DEFAULT -> ORANGE ON HOVER (Opposite Logic) */}
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-14 py-4 lg:py-6 rounded-2xl lg:rounded-3xl font-black text-[9px] lg:text-[11px] tracking-[0.2em] transition-all duration-300 hover:scale-105 shadow-2xl uppercase border-2 border-transparent">
                 Inquire: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-slate-500">Nepal Tour & Travels</p>
                 <p className="font-bold text-[10px] lg:text-xs text-slate-300 italic">Trusted Local Partner</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default SchoolTripNepal;