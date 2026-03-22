import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Replace with your actual local WagonR image paths
import wagonRMain from "../images/wagonr.jpg"; 
import wagonRFront from "../images/wagonr_front.jpg";
import wagonRInterior from "../images/wagonr_back.jpg";

const masterFleetData = [
  { 
    id: 101, 
    path: "wagonr", 
    type: "Maruti Suzuki", 
    models: "WAGON R", 
    seats: "4 SEATS", 
    bags: "1 BAGS", 
    pricePerKm: 12, 
    rating: 4.5, 
    isAc: true, 
    img: wagonRMain,
    description: "The Maruti Suzuki WagonR is the iconic 'Tall Boy' hatchback designed for city efficiency and surprisingly spacious interiors. Perfect for solo travelers or small groups of up to four, it offers excellent visibility and easy ingress/egress. With its compact footprint and reliable AC, it is the most economical and practical choice for navigating busy urban streets and short-distance transfers."
  }
];

const WagonRDetails = () => {
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

  if (!carData) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-bold">Loading...</div>;

  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "CITY HATCHBACK",
    driveType: "CHAUFFEUR DRIVEN",
    images: [carData.img, wagonRFront, wagonRInterior],
    features: [carData.seats, "FULL AC", "PETROL/CNG", carData.bags]
  };

  const packagesData = [
    {
      id: 'city',
      title: 'LOCAL RIDE — 8HR 80KM',
      basePrice: 2200,
      extraKmRate: 12,
      extraHrRate: 150,
      hasExtras: true
    },
    {
      id: 'outstation',
      title: 'OUTSTATION — MIN 200KM / DAY',
      basePrice: 2800,
      extraKmRate: 13,
      extraHrRate: 0,
      hasExtras: true
    },
    {
      id: 'airport',
      title: 'AIRPORT PICKUP/DROP',
      basePrice: 800,
      extraKmRate: 0,
      extraHrRate: 0,
      hasExtras: false
    }
  ];

  return (
    <div className="font-sans bg-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative selection:bg-gray-800 pb-20">
      
      {/* Back Navigation */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-6 left-6 text-gray-500 hover:text-white font-medium transition-colors text-xs uppercase tracking-widest flex items-center z-50"
      >
        <span className="mr-2">←</span> Back
      </button>

      {/* Main WagonR Card */}
      <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl mb-12 mt-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
                <span className="font-black text-[10px] text-white">CITY</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-[28px] font-bold text-white tracking-wide">{details.model}</h1>
              <p className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest">{details.category}</p>
            </div>
          </div>
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-4 md:mt-0">{details.driveType}</span>
        </div>

        {/* Dynamic Image Carousel */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#222] rounded-3xl flex items-center justify-center overflow-hidden mb-10">
          <img 
            src={details.images[activeImage]} 
            alt="WagonR" 
            className="w-[85%] max-h-[80%] object-contain drop-shadow-[0_35px_20px_rgba(0,0,0,0.5)] transition-opacity duration-500"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {details.images.map((_, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`transition-all duration-300 rounded-full ${activeImage === i ? 'w-8 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-gray-600'}`} />
            ))}
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {details.features.map((f, i) => (
            <div key={i} className="px-5 py-2 rounded-full border border-gray-700 bg-white/5 text-gray-300 text-[10px] font-bold uppercase tracking-widest">{f}</div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Vehicle Description</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{carData.description}</p>
        </div>
      </div>

      {/* Package Selection Accordion */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-lg font-extrabold text-white tracking-widest uppercase mb-6 pl-2">Select Your Package</h2>
        <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden">
          {packagesData.map((pkg, idx) => {
            const isActive = activePackage === pkg.id;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? ((parseInt(extraKms) || 0) * pkg.extraKmRate) + ((parseInt(extraHrs) || 0) * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-black/50 ${idx === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                <div className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-white/5" onClick={() => { setActivePackage(isActive ? null : pkg.id); setExtraKms(''); setExtraHrs(''); }}>
                  <div className="flex items-center gap-4">
                    <div className={`w-3.5 h-3.5 rounded-full ${isActive ? 'bg-green-400' : 'border border-gray-500'}`} />
                    <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">{pkg.title} — ₹{pkg.basePrice}</span>
                  </div>
                  {isActive ? <ChevronUp className="text-white" /> : <ChevronDown className="text-gray-500" />}
                </div>

                <div className={`px-6 md:px-14 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  
                  {/* FIXED DATE/TIME INPUT SECTION */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
                    <div className="relative border-b border-gray-600">
                        <input 
                            type="date" 
                            value={pkgDate} 
                            onChange={(e) => setPkgDate(e.target.value)} 
                            className="w-full bg-transparent text-white pb-2 outline-none [color-scheme:dark] cursor-pointer" 
                        />
                    </div>
                    <div className="relative border-b border-gray-600">
                        <input 
                            type="time" 
                            value={pkgTime} 
                            onChange={(e) => setPkgTime(e.target.value)} 
                            className="w-full bg-transparent text-white pb-2 outline-none [color-scheme:dark] cursor-pointer" 
                        />
                    </div>
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
                      <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Total Estimated Fare</p>
                      <p className="text-3xl font-black text-white">₹ {currentTotal.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="w-full md:w-auto bg-white text-black font-black uppercase text-xs py-4 px-12 rounded-full mt-6 md:mt-0 active:scale-95 transition-transform">Book WagonR Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FIXED CSS BLOCK */}
      <style>{`
        /* Removes arrows from number inputs */
        input[type="number"]::-webkit-outer-spin-button, 
        input[type="number"]::-webkit-inner-spin-button { 
          -webkit-appearance: none; 
          margin: 0; 
        }

        /* Styling for date/time icons to make them clickable but not overlapping everything */
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(1); /* Makes the icon white */
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover,
        input[type="time"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default WagonRDetails;