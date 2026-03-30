import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Assets - Replace with your actual Gypsy image paths
// Ensure these images are available in your assets folder
import gypsyMain from "../images/Gypsy.jpg"; 
import gypsySide from "../images/Gypsy_front.jpg";
import gypsyOpen from "../images/Gypsy_back.jpg";

const masterFleetData = [
  { 
    id: 109, 
    path: "gypsy", 
    type: "Maruti Suzuki", 
    models: "Gypsy", 
    seats: "4 SEATS", 
    bags: "2 BAGS", 
    pricePerKm: 25, 
    rating: 4.9, 
    isAc: true, 
    img: gypsyMain,
    description: "The Maruti Suzuki Gypsy is a legend of the off-road world, specifically engineered for the rugged terrains of Nepal. Known for its lightweight design and formidable 4x4 capabilities, it is the preferred choice for mountain expeditions, wildlife safaris, and adventure seekers. Experience raw power and unmatched reliability as you navigate the road less traveled."
  }
];

const GypsyDetails = () => {
  const navigate = useNavigate();
  const { carName } = useParams(); 
  
  const [activeImage, setActiveImage] = useState(0);
  const [activePackage, setActivePackage] = useState(null); 
  const [pkgDate, setPkgDate] = useState('');
  const [pkgTime, setPkgTime] = useState('');
  const [extraKms, setExtraKms] = useState('');
  const [extraHrs, setExtraHrs] = useState('');
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const foundCar = masterFleetData.find(car => car.path === carName) || masterFleetData[0];
    setCarData(foundCar);
  }, [carName]);

  useEffect(() => {
    if (carData) {
      const interval = setInterval(() => {
        setActiveImage((prevIndex) => (prevIndex + 1) % 3); 
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [carData]);

  if (!carData) {
    return <div className="min-h-screen bg-black flex items-center justify-center font-bold text-white uppercase tracking-tighter">Initializing Off-Road Legend...</div>;
  }

  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "COMPACT SUV / 4X4 OFF-ROAD",
    driveType: "CHAUFFEUR DRIVEN",
    description: carData.description,
    images: [carData.img, gypsySide, gypsyOpen],
    features: [ `${carData.seats}`, "4WD CAPABILITY", "HIGH GROUND CLEARANCE", `${carData.bags}` ]
  };

  const packagesData = [
    { id: 'city', title: 'ADVENTURE RIDE — 8HR 80KM', basePrice: 4500, extraKmRate: 25, extraHrRate: 400, hasExtras: true },
    { id: 'offroad', title: 'EXPEDITION — MIN 250KM / DAY', basePrice: 7500, extraKmRate: 30, extraHrRate: 0, hasExtras: true },
    { id: 'airport', title: 'AIRPORT RUGGED TRANSFER', basePrice: 2000, extraKmRate: 0, extraHrRate: 0, hasExtras: false }
  ];

  const handleProceedToPay = (e, pkg, totalAmount) => {
    e.stopPropagation();
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
      totalAmount: totalAmount,
      basePrice: pkg.basePrice,
       image: carData.img
    };
    navigate('/checkout', { state: bookingDetails }); 
  };

  return (
    <div className="font-sans bg-black min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative selection:bg-gray-700 selection:text-white">

      {/* --- 1. MAIN VEHICLE CARD (Dark Theme) --- */}
      <div className="w-full max-w-[1000px] mx-auto bg-[#181818] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl mb-8 border border-white/5">
        
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-400 hover:text-white font-bold transition-all text-[10px] md:text-xs uppercase tracking-widest flex items-center mb-6"
        >
          <span className="mr-1.5">←</span> BACK TO FLEET
        </button>

        <div className="flex flex-row items-center justify-between mb-8 px-1 md:px-2">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="flex items-center text-white">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] border-white flex items-center justify-center">
                  <span className="font-bold text-[10px] md:text-xs tracking-tighter text-white text-center px-1 leading-none">4X4</span>
                </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-lg md:text-2xl font-bold text-white tracking-wide uppercase leading-tight">
                {details.model}
              </h1>
              <p className="text-[9px] md:text-[11px] font-semibold text-gray-400 tracking-[0.1em] uppercase mt-1">
                {details.category}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {/* <span className="text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] bg-emerald-500/10 px-3 py-1 rounded-md mb-1">
              {carData.rating} ★
            </span> */}
            <span className="text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]">
              {details.driveType}
            </span>
          </div>
        </div>

        {/* --- IMAGE CONTAINER (Light Gray Studio Style) --- */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[420px] bg-[#e9e9e9] rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden mb-8">
          <img 
            src={details.images[activeImage]} 
            alt={details.model} 
            className="w-[85%] md:w-[75%] max-h-[85%] object-contain transition-opacity duration-700 ease-in-out mix-blend-multiply drop-shadow-xl"
          />

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {details.images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeImage === index ? 'w-2 h-2 bg-[#1a1a1a]' : 'w-1.5 h-1.5 bg-gray-400/60 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-2">
          {details.features.map((feature, index) => (
            <div 
              key={index}
              className="px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-gray-600/60 bg-[#181818] text-white shadow-sm"
            >
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{feature}</span>
            </div>
          ))}
        </div>
      </div> 

      {/* --- DESCRIPTION --- */}
      <div className="w-full max-w-[1000px] mx-auto mb-14 px-4 md:px-6">
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium text-center md:text-left">
          {details.description}
        </p>
      </div>

      {/* --- PACKAGE SELECTION (White Theme) --- */}
      <div className="w-full max-w-[1000px] mx-auto mt-12">
        <h2 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase mb-6 pl-2">
          Select Expedition Package
        </h2>

        <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
          {packagesData.map((pkg, index) => {
            const isActive = activePackage === pkg.id;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? ((parseInt(extraKms) || 0) * pkg.extraKmRate) + ((parseInt(extraHrs) || 0) * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-slate-200 ${index === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                <div 
                  className={`flex items-center justify-between p-6 md:p-8 cursor-pointer transition-colors ${isActive ? 'bg-gray-50' : 'hover:bg-slate-50'}`}
                  onClick={() => {
                    setActivePackage(isActive ? null : pkg.id);
                    setExtraKms(''); setExtraHrs(''); setPkgDate(''); setPkgTime('');
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${isActive ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300'}`}>
                        {isActive && <div className="w-1 h-1 bg-white rounded-full mx-auto mt-0.5"></div>}
                    </div>
                    <span className={`font-bold text-[11px] md:text-sm tracking-widest uppercase ${isActive ? 'text-black' : 'text-slate-800'}`}>
                      {pkg.title} <span className="mx-1 md:mx-3 text-slate-300">|</span> ₹ {pkg.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  {isActive ? <ChevronUp size={20} className="text-black" /> : <ChevronDown size={20} className="text-slate-400" />}
                </div>

                <div className={`px-6 md:px-12 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 mt-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="flex flex-col">
                      <label className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Expedition Date *</label>
                      <input type="date" value={pkgDate} onChange={(e) => setPkgDate(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-800 px-4 py-3 rounded-xl outline-none font-bold text-sm focus:border-black transition-all shadow-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Pickup Time *</label>
                      <input type="time" value={pkgTime} onChange={(e) => setPkgTime(e.target.value)} className="w-full bg-white border border-slate-300 text-slate-800 px-4 py-3 rounded-xl outline-none font-bold text-sm focus:border-black transition-all shadow-sm" />
                    </div>
                  </div>

                  {pkg.hasExtras && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 px-2">
                      <div className="flex flex-col">
                        <label className="text-slate-600 text-[10px] font-bold uppercase mb-2 flex justify-between">
                          <span>Additional Kms</span>
                          <span className="text-black bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">₹{pkg.extraKmRate}/KM</span>
                        </label>
                        <input type="number" value={extraKms} onChange={(e) => setExtraKms(e.target.value)} placeholder="0" className="bg-transparent border-b-2 border-slate-300 text-slate-800 pb-1.5 outline-none font-bold focus:border-black transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-slate-600 text-[10px] font-bold uppercase mb-2 flex justify-between">
                          <span>Additional Hrs</span>
                          <span className="text-black bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">₹{pkg.extraHrRate}/HR</span>
                        </label>
                        <input type="number" value={extraHrs} onChange={(e) => setExtraHrs(e.target.value)} placeholder="0" className="bg-transparent border-b-2 border-slate-300 text-slate-800 pb-1.5 outline-none font-bold focus:border-black transition-colors" />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mt-4 bg-[#181818] p-6 md:p-8 rounded-2xl shadow-lg border border-black">
                    <div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Estimated Journey Fare</p>
                      <p className="text-3xl md:text-4xl font-black text-white">₹ {currentTotal.toLocaleString('en-IN')}</p>
                      <p className="text-gray-500 text-[10px] mt-1 font-medium">Off-road permits extra as per actuals</p>
                    </div>
                    <button 
                      onClick={(e) => handleProceedToPay(e, pkg, currentTotal)}
                      className="w-full md:w-auto bg-white hover:bg-gray-200 text-black font-black uppercase tracking-[0.15em] text-[10px] py-4 px-10 rounded-xl transition-all shadow-md hover:-translate-y-1 active:translate-y-0"
                    >
                      Book Gypsy
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
        input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }
      `}</style>
    </div>
  );
};

export default GypsyDetails;