import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Star, Users, Briefcase } from 'lucide-react';
import audia6sideview from "../images/audia6sideview.png"
import audia6frontview from "../images/audia6frontview.png";
import audia6backview from "../images/audia6backview.png"

// Master Data
const masterFleetData = [
  { 
    id: 11, 
    path: "audi-a6", 
    type: "Audi", 
    models: "Audi A6", 
    seats: "4 SEATS", 
    bags: "2 BAGS", 
    pricePerKm: 50, 
    rating: 4.9, 
    isAc: true, 
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The Audi A6 offers a perfect blend of comfort and performance for your city rides and outstation trips. With its spacious interior, advanced safety features, and smooth handling, it ensures a premium travel experience."
  }
];

const CabDetails = () => {
  const navigate = useNavigate();
  const { carName } = useParams(); 
  
  // Slider State
  const [activeImage, setActiveImage] = useState(0);
  
  // Package Accordion State
  const [activePackage, setActivePackage] = useState(null);
  
  // Form States inside Packages
  const [pkgDate, setPkgDate] = useState('');
  const [pkgTime, setPkgTime] = useState('');
  
  // NAYE STATES: Extra Kms aur Hrs ke liye
  const [extraKms, setExtraKms] = useState('');
  const [extraHrs, setExtraHrs] = useState('');

  const [carData, setCarData] = useState(null);

  // 1. Fetch Data UseEffect
  useEffect(() => {
    const foundCar = masterFleetData.find(car => car.path === carName) || masterFleetData.find(car => car.id === 11);
    setCarData(foundCar);
  }, [carName]);

  // 2. AUTO-CAROUSEL LOGIC
  useEffect(() => {
    if (carData) {
      const interval = setInterval(() => {
        setActiveImage((prevIndex) => (prevIndex + 1) % 3); 
      }, 3000); 

      return () => clearInterval(interval);
    }
  }, [carData]);

  if (!carData) {
    return <div className="min-h-screen bg-black flex items-center justify-center font-bold text-white">Loading Vehicle Data...</div>;
  }

  // Structuring data
  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "LUXURY COLLECTION",
    driveType: "CHAUFFEUR DRIVEN",
    description: carData.description || "Experience premium comfort and luxury with our chauffeur-driven services.",
    images: [
      audia6sideview, // Side View
      audia6frontview, // Front Angle View
      audia6backview  // Back Angle View
    ],
    features: [
      `${carData.seats}`,
      carData.isAc ? "AUTOMATIC" : "MANUAL",
      "PETROL", 
      `${carData.bags}`
    ]
  };

  // Mock Packages Data (Numeric Values for Real-Time Calculation)
  const packagesData = [
    {
      id: 'city',
      title: 'STANDARD / CITY RIDE — 8HR 80KM',
      basePrice: 32000,
      extraKmRate: 320,
      extraHrRate: 3200,
      hasExtras: true
    },
    {
      id: 'outstation',
      title: 'OUTSTATION — 300KM / 12AM—12AM',
      basePrice: 95000,
      extraKmRate: 350,
      extraHrRate: 3500,
      hasExtras: true
    },
    {
      id: 'airport',
      title: 'AIRPORT TRANSFER',
      basePrice: 38000,
      extraKmRate: 0,
      extraHrRate: 0,
      hasExtras: false
    }
  ];

  return (
    <div className="font-sans bg-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative selection:bg-gray-800 pb-20">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-6 left-6 text-gray-500 hover:text-white font-medium transition-colors text-xs uppercase tracking-widest flex items-center z-50"
      >
        <span className="mr-2">←</span> Back
      </button>

      {/* --- 1. MAIN CAR DETAILS CARD --- */}
      <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl mb-12 mt-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="flex items-center text-white/80">
               {details.brand === 'AUDI' ? (
                 <svg width="60" height="30" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-90">
                   <circle cx="20" cy="20" r="14" />
                   <circle cx="40" cy="20" r="14" />
                   <circle cx="60" cy="20" r="14" />
                   <circle cx="80" cy="20" r="14" />
                 </svg>
               ) : (
                  <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center">
                    <span className="font-bold text-sm tracking-tighter">{details.brand.substring(0,3)}</span>
                  </div>
               )}
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-[28px] font-bold text-white tracking-wide leading-tight">
                {details.model}
              </h1>
              <p className="text-[10px] md:text-xs font-semibold text-gray-400 tracking-[0.15em] uppercase mt-1">
                {details.category}
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]">
              {details.driveType}
            </span>
          </div>
        </div>

        {/* --- 3-IMAGE AUTO-CAROUSEL --- */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#ebebeb] rounded-3xl flex items-center justify-center overflow-hidden mb-10 group">
          <img 
            src={details.images[activeImage]} 
            alt={`${details.model} View ${activeImage + 1}`} 
            className="w-[85%] max-h-[80%] object-contain drop-shadow-[0_40px_20px_rgba(0,0,0,0.5)] transition-opacity duration-500 ease-in-out"
            style={{ filter: "contrast(1.05) saturate(1.05)" }}
          />

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {details.images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeImage === index 
                    ? 'w-2 h-2 bg-gray-800 scale-125' 
                    : 'w-1.5 h-1.5 bg-gray-400/60 hover:bg-gray-600'
                }`}
                aria-label={`View angle ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          {details.features.map((feature, index) => (
            <div 
              key={index}
              className="px-5 py-2 rounded-full border border-gray-600/60 bg-transparent text-gray-200 hover:border-gray-400 transition-colors cursor-default"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{feature}</span>
            </div>
          ))}
        </div>

        {/* --- ABOUT THE VEHICLE (DESCRIPTION) --- */}
        <div className="border-t border-gray-800 pt-8 mt-4">
          <h3 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">About The Vehicle</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
            {details.description}
          </p>
        </div>

      </div>

      {/* --- 2. EXPLORE OUR LUXURY PACKAGES SECTION --- */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-lg md:text-xl font-extrabold text-white tracking-widest uppercase mb-6 pl-2">
          Explore Our Luxury Packages
        </h2>

        <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden flex flex-col">
          
          {packagesData.map((pkg, index) => {
            const isActive = activePackage === pkg.id;
            
            // --- REAL-TIME CALCULATION LOGIC ---
            const kmsValue = parseInt(extraKms) || 0;
            const hrsValue = parseInt(extraHrs) || 0;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? (kmsValue * pkg.extraKmRate) + (hrsValue * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-black/50 ${index === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                
                {/* Accordion Header (Clickable Area) */}
                <div 
                  className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => {
                    setActivePackage(isActive ? null : pkg.id);
                    // Package change par purane extra inputs reset kar do
                    setExtraKms('');
                    setExtraHrs('');
                  }}
                >
                  <div className="flex items-center gap-4 pointer-events-none">
                    <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-white' : 'border border-gray-500'}`} />
                    <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                      {pkg.title} — ₹ {pkg.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="pointer-events-none">
                    {isActive ? (
                      <ChevronUp size={20} className="text-white" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </div>
                </div>

                {/* Accordion Body (Form & Pricing) */}
                <div 
                  className={`px-6 md:px-14 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  
                  {/* Date & Time Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 mt-4">
                    <div className="flex flex-col relative">
                      <label className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">Choose Date</label>
                      <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="date" 
                          value={pkgDate}
                          onChange={(e) => setPkgDate(e.target.value)}
                          className="w-full bg-transparent border-b border-gray-600 text-white pb-2 outline-none font-bold text-sm [color-scheme:dark] focus:border-white transition-colors cursor-pointer relative z-10" 
                        />
                      </div>
                    </div>

                    <div className="flex flex-col relative">
                      <label className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">Choose Time</label>
                      <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="time" 
                          value={pkgTime}
                          onChange={(e) => setPkgTime(e.target.value)}
                          className="w-full bg-transparent border-b border-gray-600 text-white pb-2 outline-none font-bold text-sm [color-scheme:dark] focus:border-white transition-colors cursor-pointer relative z-10" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Extra KMS / Extra HRS Inputs (Replacing static text with Real-time Inputs) */}
                  {pkg.hasExtras && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
                      
                      {/* Extra KMs Input */}
                      <div className="flex flex-col relative">
                        <label className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 flex justify-between">
                          <span>Extra Kms</span>
                          <span className="text-blue-400">₹{pkg.extraKmRate} / KM</span>
                        </label>
                        <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                          <input 
                            type="number" 
                            min="0"
                            value={extraKms}
                            onChange={(e) => setExtraKms(e.target.value)}
                            placeholder="Enter Extra Kilometers"
                            className="w-full bg-transparent border-b border-gray-600 text-white pb-2 outline-none font-bold text-sm focus:border-white transition-colors relative z-10" 
                          />
                        </div>
                      </div>

                      {/* Extra Hrs Input */}
                      <div className="flex flex-col relative">
                        <label className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 flex justify-between">
                          <span>Extra Hrs</span>
                          <span className="text-blue-400">₹{pkg.extraHrRate.toLocaleString('en-IN')} / HR</span>
                        </label>
                        <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                          <input 
                            type="number" 
                            min="0"
                            value={extraHrs}
                            onChange={(e) => setExtraHrs(e.target.value)}
                            placeholder="Enter Extra Hours"
                            className="w-full bg-transparent border-b border-gray-600 text-white pb-2 outline-none font-bold text-sm focus:border-white transition-colors relative z-10" 
                          />
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Total & Checkout Button */}
                  <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-6 border-t border-gray-800 pt-8">
                    <div>
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Estimated Total</p>
                      {/* Displaying Real-Time Total */}
                      <p className="text-3xl md:text-4xl font-black text-white tracking-wide">
                        ₹ {currentTotal.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <button 
                      onClick={(e) => {
                         e.stopPropagation();
                         console.log("Proceeding to pay for:", pkg.title, "Total:", currentTotal);
                      }}
                      className="w-full md:w-auto bg-[#e8e8e8] hover:bg-white text-black font-black uppercase tracking-[0.2em] text-xs py-4 px-12 rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      Proceed To Pay
                    </button>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>

      <style>{`
        /* Hide Default Number Arrows (Spinners) in Chrome/Safari/Edge */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield; /* Firefox */
        }
        
        /* Minimalist Calendar and Time picker icons */
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
            opacity: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
      `}</style>
    </div>
  );
};

export default CabDetails;