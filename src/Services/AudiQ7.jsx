import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Star, Users, Briefcase } from 'lucide-react';
// Placeholders: Aap apni actual Audi Q7 images yahan import karein
import audiq7view from "../images/audiq7view.png"; 
import audiq7frontview from "../images/audiq7frontview.png";
import audiq7backview from "../images/audiq7backview.png";

// Master Data specifically configured for Audi Q7
const masterFleetData = [
  { 
    id: 104, 
    path: "audi-q7", 
    type: "Audi", 
    models: "AUDI Q7", 
    seats: "7 SEATS", // 7-Seater capacity for Q7
    bags: "4 BAGS", 
    pricePerKm: 60, // Premium pricing for full-size SUV
    rating: 5.0, 
    isAc: true, 
    // High-quality placeholder image for testing
    img: audiq7view,
    description: "The Audi Q7 is the ultimate full-size luxury SUV, offering unmatched space, power, and prestige. With premium seating for up to seven passengers, it features a cavernous, whisper-quiet cabin adorned with top-tier materials, adaptive air suspension, and a massive panoramic sunroof. The Audi Q7 commands the road with its formidable presence while delivering a buttery-smooth ride thanks to the legendary Quattro all-wheel-drive system. It is the definitive choice for large families, VIP group travel, and luxury outstation touring where compromise is not an option."
  }
];

const CabDetails = () => {
  const navigate = useNavigate();
  const { carName } = useParams(); 
  
  // Slider State
  const [activeImage, setActiveImage] = useState(0);
  
  // Package Accordion State
  const [activePackage, setActivePackage] = useState('city');
  
  // Form States inside Packages
  const [pkgDate, setPkgDate] = useState('');
  const [pkgTime, setPkgTime] = useState('');
  
  // Extra Kms and Hrs States for Real-time Calculation
  const [extraKms, setExtraKms] = useState('');
  const [extraHrs, setExtraHrs] = useState('');

  const [carData, setCarData] = useState(null);

  // 1. Fetch Data UseEffect (Defaults to Audi Q7 if no path is given for testing)
  useEffect(() => {
    const foundCar = masterFleetData.find(car => car.path === carName) || masterFleetData.find(car => car.id === 104);
    setCarData(foundCar);
  }, [carName]);

  // 2. AUTO-CAROUSEL LOGIC
  useEffect(() => {
    if (carData) {
      const interval = setInterval(() => {
        setActiveImage((prevIndex) => (prevIndex + 1) % 3); // 3 images total
      }, 3000); 

      // Cleanup function
      return () => clearInterval(interval);
    }
  }, [carData]);

  if (!carData) {
    return <div className="min-h-screen bg-black flex items-center justify-center font-bold text-white">Loading Vehicle Data...</div>;
  }

  // Structuring data for Audi Q7
  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "FULL-SIZE LUXURY SUV", // Flagship Category
    driveType: "CHAUFFEUR DRIVEN",
    description: carData.description,
    images: [
      carData.img, // Side View
      audiq7frontview, // Placeholder: Front Angle View
       audiq7backview  // Placeholder: Back Angle View
    ],
    features: [
      `${carData.seats}`,
      carData.isAc ? "AUTOMATIC" : "MANUAL",
      "DIESEL/PETROL", 
      `${carData.bags}`
    ]
  };

  // Mock Packages Data (Premium pricing for a Flagship 7-Seater SUV)
  const packagesData = [
    {
      id: 'city',
      title: 'STANDARD / CITY RIDE — 8HR 80KM',
      basePrice: 38000,
      extraKmRate: 380,
      extraHrRate: 3800,
      hasExtras: true
    },
    {
      id: 'outstation',
      title: 'OUTSTATION — 300KM / 12AM—12AM',
      basePrice: 110000,
      extraKmRate: 400,
      extraHrRate: 4000,
      hasExtras: true
    },
    {
      id: 'airport',
      title: 'AIRPORT TRANSFER',
      basePrice: 45000,
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

                  {/* Extra KMS / Extra HRS Inputs */}
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