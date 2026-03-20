import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Replace with your actual Ertiga image paths
import ertigaView from "../images/Ertiga.jpg"; 
import ertigaFront from "../images/Ertiga_front.jpg";
import ertigaInterior from "../images/Ertiga_back.jpg";

// Master Data configured for Maruti Suzuki Ertiga
const masterFleetData = [
  { 
    id: 105, 
    path: "ertiga", 
    type: "Maruti Suzuki", 
    models: "ERTIGA", 
    seats: "6 SEATS", 
    bags: "3 BAGS", 
    pricePerKm: 18, 
    rating: 4.6, 
    isAc: true, 
    img: ertigaView,
    description: "The Maruti Suzuki Ertiga is the ultimate choice for family travel and group outings. Combining the comfort of a sedan with the space of an SUV, it features a flexible seating arrangement and ample luggage room. With its powerful yet fuel-efficient engine and high-spec safety features, the Ertiga provides a reliable and breezy travel experience for up to 6 passengers, making it the king of the MPV segment."
  }
];

const ErtigaDetails = () => {
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
        setActiveImage((prevIndex) => (prevIndex + 1) % 3);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [carData]);

  if (!carData) {
    return <div className="min-h-screen bg-black flex items-center justify-center font-bold text-white">Loading Vehicle Data...</div>;
  }

  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "SUV / MPV",
    driveType: "CHAUFFEUR DRIVEN",
    description: carData.description,
    images: [carData.img, ertigaFront, ertigaInterior],
    features: [
      `${carData.seats}`,
      carData.isAc ? "AUTOMATIC AC" : "MANUAL AC",
      "PETROL / CNG", 
      `${carData.bags}`
    ]
  };

  const packagesData = [
    {
      id: 'city',
      title: 'LOCAL RIDE — 8HR 80KM',
      basePrice: 3500,
      extraKmRate: 18,
      extraHrRate: 250,
      hasExtras: true
    },
    {
      id: 'outstation',
      title: 'OUTSTATION — MIN 300KM / DAY',
      basePrice: 5400,
      extraKmRate: 20,
      extraHrRate: 0,
      hasExtras: true
    },
    {
      id: 'airport',
      title: 'AIRPORT DROP/PICKUP',
      basePrice: 1500,
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

      {/* --- MAIN CAR CARD --- */}
      <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl mb-12 mt-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="flex items-center text-white/80">
                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
                    <span className="font-black text-[10px] tracking-tighter">SUV</span>
                </div>
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

        {/* --- CAROUSEL --- */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#252525] rounded-3xl flex items-center justify-center overflow-hidden mb-10 group">
          <img 
            src={details.images[activeImage]} 
            alt={details.model} 
            className="w-[85%] max-h-[80%] object-contain drop-shadow-[0_30px_15px_rgba(0,0,0,0.6)] transition-opacity duration-500 ease-in-out"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {details.images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeImage === index ? 'w-8 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          {details.features.map((feature, index) => (
            <div key={index} className="px-5 py-2 rounded-full border border-gray-700 bg-white/5 text-gray-300">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-4">
          <h3 className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Vehicle Description</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
            {details.description}
          </p>
        </div>
      </div>

      {/* --- PACKAGES --- */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-lg md:text-xl font-extrabold text-white tracking-widest uppercase mb-6 pl-2">
          Available Packages
        </h2>

        <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden flex flex-col">
          {packagesData.map((pkg, index) => {
            const isActive = activePackage === pkg.id;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? ((parseInt(extraKms) || 0) * pkg.extraKmRate) + ((parseInt(extraHrs) || 0) * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-black/50 ${index === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                <div 
                  className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-white/5"
                  onClick={() => { setActivePackage(isActive ? null : pkg.id); setExtraKms(''); setExtraHrs(''); }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3.5 h-3.5 rounded-full ${isActive ? 'bg-green-400' : 'border border-gray-500'}`} />
                    <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                      {pkg.title} — ₹ {pkg.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  {isActive ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-gray-500" />}
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

                  <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-6 border-t border-gray-800 pt-8">
                    <div>
                      <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Total Estimated Fare</p>
                      <p className="text-3xl md:text-4xl font-black text-white">₹ {currentTotal.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-black font-black uppercase text-xs py-4 px-12 rounded-full transition-all">
                      Confirm Ertiga Booking
                    </button>
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

export default ErtigaDetails;