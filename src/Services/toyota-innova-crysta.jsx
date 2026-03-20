import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Placeholders for your actual Innova Crysta images
import innovaMain from "../images/innova-crysta.jpg"; 
import innovaFront from "../images/innova-crysta-front.jpg";
import innovaInterior from "../images/innova-crysta-back.jpg";

const masterFleetData = [
  { 
    id: 104, 
    path: "innova-crysta", 
    type: "Toyota", 
    models: "INNOVA CRYSTA", 
    seats: "7 SEATS", 
    bags: "4 BAGS", 
    pricePerKm: 22, 
    rating: 4.9, 
    isAc: true, 
    img: innovaMain,
    description: "The Toyota Innova Crysta is the gold standard of luxury MPVs, offering unparalleled comfort, safety, and power. Designed for long-distance cruising and executive travel, it features a spacious 7-seater cabin with premium captain seats, advanced climate control, and superior noise insulation. With a massive 4-bag capacity, it is the ultimate choice for large families and luxury group tours."
  }
];

const InnovaCrystaDetails = () => {
  const navigate = useNavigate();
  const { carName } = useParams(); 
  
  const [activeImage, setActiveImage] = useState(0);
  const [activePackage, setActivePackage] = useState('city');
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
        setActiveImage((prev) => (prev + 1) % 3);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [carData]);

  if (!carData) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading Vehicle Data...</div>;

  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "PREMIUM LUXURY MPV",
    driveType: "CHAUFFEUR DRIVEN",
    images: [carData.img, innovaFront, innovaInterior],
    features: [carData.seats, "DUAL AC", "DIESEL/PETROL", carData.bags]
  };

  const packagesData = [
    {
      id: 'city',
      title: 'LOCAL RIDE — 8HR 80KM',
      basePrice: 4500,
      extraKmRate: 22,
      extraHrRate: 350,
      hasExtras: true
    },
    {
      id: 'outstation',
      title: 'OUTSTATION — MIN 300KM / DAY',
      basePrice: 6600,
      extraKmRate: 24,
      extraHrRate: 0,
      hasExtras: true
    },
    {
      id: 'airport',
      title: 'AIRPORT LUXURY TRANSFER',
      basePrice: 2200,
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

      {/* Main Card */}
      <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl mb-12 mt-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
                <span className="font-black text-[10px] text-white">7-STR</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-[28px] font-bold text-white tracking-wide leading-tight">{details.model}</h1>
              <p className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">{details.category}</p>
            </div>
          </div>
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-4 md:mt-0">{details.driveType}</span>
        </div>

        {/* 3-Image Carousel */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#222] rounded-3xl flex items-center justify-center overflow-hidden mb-10">
          <img 
            src={details.images[activeImage]} 
            alt="Innova Crysta" 
            className="w-[85%] max-h-[80%] object-contain drop-shadow-[0_35px_20px_rgba(0,0,0,0.5)] transition-opacity duration-500"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {details.images.map((_, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`transition-all duration-300 rounded-full ${activeImage === i ? 'w-8 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-gray-600'}`} />
            ))}
          </div>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          {details.features.map((f, i) => (
            <div key={i} className="px-5 py-2 rounded-full border border-gray-700 bg-white/5 text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">{f}</div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">About the Vehicle</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">{carData.description}</p>
        </div>
      </div>

      {/* Package Accordion */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-lg md:text-xl font-extrabold text-white tracking-widest uppercase mb-6 pl-2">Exclusive Luxury Packages</h2>
        <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden">
          {packagesData.map((pkg, idx) => {
            const isActive = activePackage === pkg.id;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? ((parseInt(extraKms) || 0) * pkg.extraKmRate) + ((parseInt(extraHrs) || 0) * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-black/50 ${idx === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                <div className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-white/5" onClick={() => { setActivePackage(isActive ? null : pkg.id); setExtraKms(''); setExtraHrs(''); }}>
                  <div className="flex items-center gap-4">
                    <div className={`w-3.5 h-3.5 rounded-full ${isActive ? 'bg-orange-500' : 'border border-gray-500'}`} />
                    <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">{pkg.title} — ₹{pkg.basePrice}</span>
                  </div>
                  {isActive ? <ChevronUp className="text-white" /> : <ChevronDown className="text-gray-500" />}
                </div>

                <div className={`px-6 md:px-14 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
                    <input type="date" value={pkgDate} onChange={(e) => setPkgDate(e.target.value)} className="bg-transparent border-b border-gray-600 text-white pb-2 outline-none [color-scheme:dark]" />
                    <input type="time" value={pkgTime} onChange={(e) => setPkgTime(e.target.value)} className="bg-transparent border-b border-gray-600 text-white pb-2 outline-none [color-scheme:dark]" />
                  </div>

                  {pkg.hasExtras && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <label className="text-gray-500 text-[10px] uppercase font-bold">Extra Kms (₹{pkg.extraKmRate}/km)</label>
                        <input type="number" value={extraKms} onChange={(e) => setExtraKms(e.target.value)} placeholder="0" className="w-full bg-transparent border-b border-gray-600 text-white pb-2 outline-none mt-2" />
                      </div>
                      <div>
                        <label className="text-gray-500 text-[10px] uppercase font-bold">Extra Hrs (₹{pkg.extraHrRate}/hr)</label>
                        <input type="number" value={extraHrs} onChange={(e) => setExtraHrs(e.target.value)} placeholder="0" className="w-full bg-transparent border-b border-gray-600 text-white pb-2 outline-none mt-2" />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-t border-gray-800 pt-8">
                    <div>
                      <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Luxury Suite Fare</p>
                      <p className="text-3xl font-black text-white">₹ {currentTotal.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="w-full md:w-auto bg-white text-black font-black uppercase text-xs py-4 px-12 rounded-full mt-6 md:mt-0 transition-all hover:bg-orange-500 hover:text-white">Book Crysta Luxury</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="date"]::-webkit-calendar-picker-indicator, input[type="time"]::-webkit-calendar-picker-indicator { opacity: 0; cursor: pointer; width: 100%; height: 100%; position: absolute; }
      `}</style>
    </div>
  );
};

export default InnovaCrystaDetails;