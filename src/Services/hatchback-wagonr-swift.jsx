import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Car } from 'lucide-react';

// Replace these with your actual local image paths
import wagonrView from "../images/Wagnor_swift.jpg"; 
import wagonrFront from "../images/WagonR_Swift_front.jpg";
import wagonrInterior from "../images/Wagonr_swift_back.jpg";

// Master Data configured for Hatchback (WagonR / Swift)
const masterFleetData = [
  { 
    id: 101, 
    path: "wagonr-swift", 
    type: "Hatchback", 
    models: "WagonR, Swift", 
    seats: "4 SEATS", 
    bags: "1 BAGS", 
    pricePerKm: 12, // Based on the ₹.../km placeholder in your image
    rating: 4.5, 
    isAc: true, 
    img: wagonrView,
    description: "Our Hatchback fleet, featuring the reliable Maruti Suzuki WagonR and Swift, is the perfect choice for budget-friendly urban travel and small families. These vehicles offer excellent fuel efficiency, compact dimensions for easy city navigation, and a surprisingly comfortable cabin. Whether it's a quick airport drop or a day-long city tour, the WagonR and Swift provide a smooth, air-conditioned ride with enough space for your essential luggage and up to four passengers."
  }
];

const WagonRSwiftDetails = () => {
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
    // Finds data based on path or defaults to the first hatchback entry
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
    return <div className="min-h-screen bg-black flex items-center justify-center font-bold text-white text-xs tracking-widest">LOADING VEHICLE...</div>;
  }

  const details = {
    brand: carData.type.toUpperCase(),
    model: carData.models.toUpperCase(),
    category: "ECONOMY HATCHBACK",
    driveType: "CHAUFFEUR DRIVEN",
    description: carData.description,
    images: [
      carData.img, 
      wagonrFront, 
      wagonrInterior 
    ],
    features: [
      `${carData.seats}`,
      carData.isAc ? "AIR CONDITIONED" : "NON-AC",
      "PETROL/CNG", 
      `${carData.bags}`
    ]
  };

  // Hatchback Specific Pricing (Example values)
  const packagesData = [
    {
      id: 'city',
      title: 'CITY RIDE — 8HR 80KM',
      basePrice: 2500,
      extraKmRate: 15,
      extraHrRate: 200,
      hasExtras: true
    },
    {
      id: 'outstation',
      title: 'OUTSTATION — MIN 250KM / DAY',
      basePrice: 3500,
      extraKmRate: 14,
      extraHrRate: 0,
      hasExtras: true
    },
    {
      id: 'airport',
      title: 'AIRPORT TRANSFER',
      basePrice: 800,
      extraKmRate: 0,
      extraHrRate: 0,
      hasExtras: false
    }
  ];

  return (
    <div className="font-sans bg-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative pb-20">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-6 left-6 text-gray-500 hover:text-white font-medium transition-colors text-xs uppercase tracking-widest flex items-center z-50"
      >
        <span className="mr-2">←</span> Back
      </button>

      {/* MAIN CARD */}
      <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl mb-12 mt-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="flex items-center text-white/80">
                {/* Replaced Audi rings with a Hatchback Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Car size={32} strokeWidth={1.5} />
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
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="bg-green-500/20 text-green-500 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                ★ {carData.rating}
            </span>
            <span className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]">
              {details.driveType}
            </span>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#f3f3f3] rounded-3xl flex items-center justify-center overflow-hidden mb-10 group">
          <img 
            src={details.images[activeImage]} 
            alt={`${details.model}`} 
            className="w-[80%] max-h-[75%] object-contain drop-shadow-2xl transition-opacity duration-500"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {details.images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeImage === index ? 'w-8 h-1.5 bg-gray-800' : 'w-1.5 h-1.5 bg-gray-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          {details.features.map((feature, index) => (
            <div 
              key={index}
              className="px-5 py-2 rounded-full border border-gray-600/40 bg-white/5 text-gray-300"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{feature}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="border-t border-gray-800 pt-8 mt-4">
          <h3 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Service Details</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {details.description}
          </p>
        </div>

      </div>

      {/* PACKAGES SECTION */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase mb-6 pl-2">
          Select Your Trip Package
        </h2>

        <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden shadow-xl">
          {packagesData.map((pkg, index) => {
            const isActive = activePackage === pkg.id;
            const kmsValue = parseInt(extraKms) || 0;
            const hrsValue = parseInt(extraHrs) || 0;
            const currentTotal = pkg.basePrice + (pkg.hasExtras ? (kmsValue * pkg.extraKmRate) + (hrsValue * pkg.extraHrRate) : 0);
            
            return (
              <div key={pkg.id} className={`border-b border-white/5 ${index === packagesData.length - 1 ? 'border-b-0' : ''}`}>
                <div 
                  className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-white/[0.02]"
                  onClick={() => {
                    setActivePackage(isActive ? null : pkg.id);
                    setExtraKms('');
                    setExtraHrs('');
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'border border-gray-600'}`} />
                    <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                      {pkg.title} — <span className="text-gray-400">₹{pkg.basePrice}</span>
                    </span>
                  </div>
                  {isActive ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-gray-500" />}
                </div>

                <div className={`px-6 md:px-14 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {/* Form fields same as Audi version */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
                    <div className="flex flex-col">
                      <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">Pick-up Date</label>
                      <input type="date" value={pkgDate} onChange={(e) => setPkgDate(e.target.value)} className="bg-transparent border-b border-gray-700 text-white pb-2 outline-none [color-scheme:dark]" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">Pick-up Time</label>
                      <input type="time" value={pkgTime} onChange={(e) => setPkgTime(e.target.value)} className="bg-transparent border-b border-gray-700 text-white pb-2 outline-none [color-scheme:dark]" />
                    </div>
                  </div>

                  {pkg.hasExtras && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="flex flex-col">
                        <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 flex justify-between">
                          <span>Extra Kms</span> <span className="text-blue-500">₹{pkg.extraKmRate}/km</span>
                        </label>
                        <input type="number" value={extraKms} onChange={(e) => setExtraKms(e.target.value)} placeholder="0" className="bg-transparent border-b border-gray-700 text-white pb-2 outline-none" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 flex justify-between">
                          <span>Extra Hrs</span> <span className="text-blue-500">₹{pkg.extraHrRate}/hr</span>
                        </label>
                        <input type="number" value={extraHrs} onChange={(e) => setExtraHrs(e.target.value)} placeholder="0" className="bg-transparent border-b border-gray-700 text-white pb-2 outline-none" />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-8">
                    <div>
                      <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Estimated Total</p>
                      <p className="text-3xl font-black text-white">₹ {currentTotal.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="w-full md:w-auto bg-white text-black font-black uppercase tracking-widest text-xs py-4 px-12 rounded-full hover:scale-105 transition-transform">
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WagonRSwiftDetails;