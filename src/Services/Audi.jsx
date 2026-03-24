import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Star, Users, Briefcase } from 'lucide-react';
// Placeholders: Aap apni actual Audi A6 images yahan import karein
import audia6sideview from "../images/audia6sideview.png"
import audia6frontview from "../images/audia6frontview.png";
import audia6backview from "../images/audia6backview.png"

// Master Data specifically configured for Audi A6
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
    img: audia6sideview,
    description: "The Audi A6 offers a perfect blend of comfort and performance for your city rides and outstation trips. With its spacious interior, advanced safety features, and smooth handling, it ensures a premium travel experience."
  }
];

const CabDetails = () => {
  const navigate = useNavigate();
  const { carName } = useParams(); 
  
  // Slider State
  const [activeImage, setActiveImage] = useState(0);
  
  // Package Accordion State - null set kiya hai taaki start me koi select na rahe
  const [activePackage, setActivePackage] = useState(null); 
  
  // Form States inside Packages
  const [pkgDate, setPkgDate] = useState('');
  const [pkgTime, setPkgTime] = useState('');
  
  // Extra Kms and Hrs States for Real-time Calculation
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

  // Structuring data for Audi A6
  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "LUXURY COLLECTION", 
    driveType: "CHAUFFEUR DRIVEN",
    description: carData.description,
    images: [
      carData.img, 
      audia6frontview, 
      audia6backview 
    ],
    features: [
      `${carData.seats}`,
      carData.isAc ? "AUTOMATIC" : "MANUAL",
      "PETROL", 
      `${carData.bags}`
    ]
  };

  // Mock Packages Data (Audi A6 Pricing)
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

  // --- WORKING PROCEED TO PAY FUNCTION ---
  const handleProceedToPay = (e, pkg, totalAmount) => {
    e.stopPropagation();

    // Basic Validation
    if (!pkgDate || !pkgTime) {
      alert("Please select both Date and Time before proceeding.");
      return;
    }

    const bookingDetails = {
      vehicle: details.model,
      category: details.category,
      packageSelected: pkg.title,
      date: pkgDate,
      time: pkgTime,
      extraKms: extraKms || 0,
      extraHrs: extraHrs || 0,
      totalAmount: totalAmount
    };

    console.log("Ready to Checkout:", bookingDetails);
    navigate('/checkout', { state: bookingDetails }); 
  };

  return (
    <div className="font-sans bg-black min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative selection:bg-gray-700 selection:text-white">

      {/* GLOBAL BACK BUTTON */}
    

      {/* --- 1. MAIN CAR DETAILS CARD (EXACT HYPE LUXURY SIZE & STYLE) --- */}
      <div className="w-full max-w-[1050px] mx-auto bg-[#1a1a1a] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-2xl mb-6 border border-white/5">
         <button 
          onClick={() => navigate(-1)} 
          className="text-gray-400 hover:text-white font-bold transition-all text-[10px] md:text-xs uppercase tracking-widest flex items-center mb-6"
        >
          <span className="mr-1.5">←</span> BACK TO FLEET
        </button>
        {/* Top Header Layout */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 px-2">
          <div className="flex items-center gap-5">
            <div className="flex items-center text-white">
                {/* Audi Rings SVG Logo */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center p-1">
                  <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-auto text-white opacity-90 px-1">
                    <circle cx="20" cy="20" r="14" />
                    <circle cx="40" cy="20" r="14" />
                    <circle cx="60" cy="20" r="14" />
                    <circle cx="80" cy="20" r="14" />
                  </svg>
                </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl md:text-[26px] font-bold text-white tracking-wide uppercase leading-tight">
                {details.model}
              </h1>
              <p className="text-[9px] md:text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase mt-1">
                {details.category}
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
              {details.driveType}
            </span>
          </div>
        </div>

        {/* --- HUGE IMAGE CONTAINER --- */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#ebebeb] rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden mb-10">
          <img 
            src={details.images[activeImage]} 
            alt={`${details.model} View ${activeImage + 1}`} 
            className="w-[90%] max-h-[85%] object-contain transition-opacity duration-700 ease-in-out mix-blend-multiply"
          />

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
            {details.images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeImage === index 
                    ? 'w-2.5 h-2.5 bg-[#222222]' 
                    : 'w-2 h-2 bg-gray-400/50 hover:bg-gray-600'
                }`}
                aria-label={`View angle ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features Pills (Dark theme with thin borders) */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {details.features.map((feature, index) => (
            <div 
              key={index}
              className="px-6 py-2 rounded-full border border-gray-600 bg-transparent text-gray-200 transition-all cursor-default"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{feature}</span>
            </div>
          ))}
        </div>

      </div> 
      {/* MAIN CARD ENDS HERE */}

      {/* --- ABOUT THE VEHICLE --- */}
      <div className="w-full max-w-[1050px] mx-auto mb-12 px-2 md:px-6">
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium text-center md:text-left">
          {details.description}
        </p>
      </div>

      {/* --- 2. EXPLORE OUR PACKAGES SECTION --- */}
      <div className="w-full max-w-[1050px] mx-auto mt-12">
        <h2 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase mb-6 pl-2">
          Explore Tour Packages
        </h2>

        <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
          
          {packagesData.map((pkg, index) => {
            const isActive = activePackage === pkg.id;
            
            // --- REAL-TIME CALCULATION LOGIC ---
            const kmsValue = parseInt(extraKms) || 0;
            const hrsValue = parseInt(extraHrs) || 0;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? (kmsValue * pkg.extraKmRate) + (hrsValue * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-slate-200 ${index === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                
                {/* Accordion Header */}
                <div 
                  className={`flex items-center justify-between p-6 md:p-8 cursor-pointer transition-colors ${isActive ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                  onClick={() => {
                    setActivePackage(isActive ? null : pkg.id);
                    setExtraKms('');
                    setExtraHrs('');
                    setPkgDate('');
                    setPkgTime('');
                  }}
                >
                  <div className="flex items-center gap-3 pointer-events-none">
                    <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 transition-colors duration-300 flex items-center justify-center ${isActive ? 'bg-blue-600 border-2 border-blue-600' : 'border-2 border-slate-300'}`}>
                        {isActive && <div className="w-1 h-1 bg-white rounded-full"></div>}
                    </div>
                    <span className={`font-bold text-[11px] md:text-sm tracking-widest uppercase ${isActive ? 'text-blue-700' : 'text-slate-800'}`}>
                      {pkg.title} <span className="mx-1.5 md:mx-3 text-slate-300">|</span> ₹ {pkg.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="pointer-events-none">
                    {isActive ? (
                      <ChevronUp size={20} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Accordion Body (Form & Pricing) */}
                <div 
                  className={`px-6 md:px-12 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  
                  {/* Date & Time Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 mt-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="flex flex-col relative">
                      <label className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Choose Date <span className="text-red-500">*</span></label>
                      <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="date" 
                          required
                          value={pkgDate}
                          onChange={(e) => setPkgDate(e.target.value)}
                          className="w-full bg-white border border-slate-300 text-slate-800 px-4 py-3 rounded-xl outline-none font-bold text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer shadow-sm" 
                        />
                      </div>
                    </div>

                    <div className="flex flex-col relative">
                      <label className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Choose Time <span className="text-red-500">*</span></label>
                      <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="time" 
                          required
                          value={pkgTime}
                          onChange={(e) => setPkgTime(e.target.value)}
                          className="w-full bg-white border border-slate-300 text-slate-800 px-4 py-3 rounded-xl outline-none font-bold text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer shadow-sm" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Extra KMS / Extra HRS Inputs */}
                  {pkg.hasExtras && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 px-2">
                      <div className="flex flex-col relative">
                        <label className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 flex justify-between">
                          <span>Extra Kms</span>
                          <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">₹{pkg.extraKmRate} / KM</span>
                        </label>
                        <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                          <input 
                            type="number" 
                            min="0"
                            value={extraKms}
                            onChange={(e) => setExtraKms(e.target.value)}
                            placeholder="e.g. 50"
                            className="w-full bg-transparent border-b-2 border-slate-300 text-slate-800 pb-1.5 outline-none font-bold text-sm md:text-base focus:border-blue-600 transition-colors" 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col relative">
                        <label className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 flex justify-between">
                          <span>Extra Hrs</span>
                          <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">₹{pkg.extraHrRate} / HR</span>
                        </label>
                        <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
                          <input 
                            type="number" 
                            min="0"
                            value={extraHrs}
                            onChange={(e) => setExtraHrs(e.target.value)}
                            placeholder="e.g. 2"
                            className="w-full bg-transparent border-b-2 border-slate-300 text-slate-800 pb-1.5 outline-none font-bold text-sm md:text-base focus:border-blue-600 transition-colors" 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Total & Checkout Button */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mt-4 bg-[#1a1a1a] p-6 md:p-8 rounded-2xl shadow-lg border border-black">
                    <div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Estimated Total</p>
                      <p className="text-3xl md:text-4xl font-black text-white tracking-wide">
                        ₹ {currentTotal.toLocaleString('en-IN')}
                      </p>
                      <p className="text-gray-500 text-[10px] mt-1 font-medium">Taxes & tolls may apply</p>
                    </div>
                    
                    {/* Working Proceed To Pay Button */}
                    <button 
                      onClick={(e) => handleProceedToPay(e, pkg, currentTotal)}
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.15em] text-[10px] md:text-xs py-4 px-10 rounded-xl transition-all shadow-[0_8px_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:translate-y-0"
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
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield; 
        }
      `}</style>
    </div>
  );
};

export default CabDetails;