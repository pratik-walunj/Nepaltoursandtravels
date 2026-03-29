import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Data passed from the previous page will be received here
  const bookingData = location.state;
  console.log("Received data:", bookingData);

  // Form States
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    additionalInfo: '',
    agreed: false // This controls the checkout button
  });

  // Redirect to home/previous page if someone opens /checkout directly without selecting a car
  useEffect(() => {
    if (!bookingData) {
      navigate(-1); 
    }
  }, [bookingData, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // --- FINAL CHECKOUT FUNCTION ---
  const handleProceedToCheckout = (e) => {
    e.preventDefault();
    
    // Validation check
    if (!formData.agreed) {
      alert("Please agree to the Terms & conditions before proceeding.");
      return;
    }
    if (!formData.firstName || !formData.phone) {
      alert("Please fill in your basic contact details.");
      return;
    }

    // Payment Gateway Logic Here
    console.log("Final Booking Details to be sent to server:", { carDetails: bookingData, customerDetails: formData });
    alert(`Redirecting to Payment Gateway for ₹${bookingData.totalAmount.toLocaleString('en-IN')}...`);
  };

  // Show nothing (or a loader) until redirection happens if data is missing
  if (!bookingData) return null;

  // --- DATE & TIME FORMATTING ---
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const dateObj = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options).toUpperCase();
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hoursStr, minutes] = timeString.split(':');
    let hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const formattedHours = hours < 10 ? '0' + hours : hours; 
    
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  const displayDate = formatDate(bookingData.date);
  const displayTime = formatTime(bookingData.time);

  // --- BILLING CALCULATIONS ---
  const driverCharge = 600; 
  const originalBasePrice = bookingData.basePrice || 0;
  const totalAmount = bookingData.totalAmount || 0;
  
  const displayBasePrice = originalBasePrice > driverCharge ? originalBasePrice - driverCharge : originalBasePrice;
  const depositAmount = originalBasePrice * 0.30;

  const extraKmsValue = parseInt(bookingData.extraKms) || 0;
  const extraHrsValue = parseInt(bookingData.extraHrs) || 0;
  const totalExtraCost = totalAmount - originalBasePrice;

  let extraKmCost = 0;
  let extraHrCost = 0;

  if (extraKmsValue > 0 && extraHrsValue === 0) {
    extraKmCost = totalExtraCost;
  } else if (extraHrsValue > 0 && extraKmsValue === 0) {
    extraHrCost = totalExtraCost;
  } else if (extraKmsValue > 0 && extraHrsValue > 0) {
    extraKmCost = extraKmsValue * (bookingData.extraKmRate || 320);
    extraHrCost = totalExtraCost - extraKmCost; 
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gray-700">

      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-24 md:pt-36 pb-12 md:pb-16">

        {/* 2-Column Grid (Stacks on mobile, Side-by-Side on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          
          {/* --- LEFT COLUMN: User Details Form --- */}
          <div className="order-2 lg:order-1"> {/* Push form down on mobile so summary is seen first */}
            <div className="mb-6 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-1">Customer Details</h2>
              <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">Where should we reach you?</p>
            </div>

            <form className="space-y-6 md:space-y-10" onSubmit={handleProceedToCheckout}>
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="FIRST NAME *" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 pb-2 md:pb-3 text-sm font-bold uppercase tracking-wider text-white placeholder-gray-400 outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="LAST NAME" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 pb-2 md:pb-3 text-sm font-bold uppercase tracking-wider text-white placeholder-gray-400 outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex items-end border-b border-gray-600 pb-2 md:pb-3 focus-within:border-white transition-colors">
                  <span className="mr-3 text-base md:text-lg select-none">🇮🇳</span>
                  <span className="mr-3 text-sm font-bold tracking-widest"> 91</span>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="PHONE *" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm font-bold uppercase tracking-wider text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  {/* FIX: Removed "uppercase" class from this input so email types normally */}
                  <input 
                    type="email" 
                    name="email"
                    placeholder="EMAIL" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 pb-2 md:pb-3 text-sm font-bold tracking-wider text-white placeholder-gray-400 outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Pickup Address */}
              <div className="relative flex items-end border-b border-gray-600 pb-2 md:pb-3 focus-within:border-white transition-colors">
                <Search size={16} className="text-gray-400 absolute left-0 bottom-2.5 md:bottom-3.5" />
                <input 
                  type="text" 
                  name="pickup"
                  placeholder="ENTER PICKUP ADDRESS" 
                  value={formData.pickup}
                  onChange={handleChange}
                  className="w-full bg-transparent pl-7 md:pl-8 text-sm font-bold uppercase tracking-wider text-white placeholder-gray-400 outline-none"
                />
              </div>

              {/* Dropoff Address */}
              <div className="relative flex items-end border-b border-gray-600 pb-2 md:pb-3 focus-within:border-white transition-colors">
                <Search size={16} className="text-gray-400 absolute left-0 bottom-2.5 md:bottom-3.5" />
                <input 
                  type="text" 
                  name="dropoff"
                  placeholder="ENTER DROPOFF ADDRESS (OPTIONAL)" 
                  value={formData.dropoff}
                  onChange={handleChange}
                  className="w-full bg-transparent pl-7 md:pl-8 text-sm font-bold uppercase tracking-wider text-white placeholder-gray-400 outline-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3 pt-2 md:pt-4">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    name="agreed"
                    id="terms"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="peer appearance-none w-4 h-4 md:w-5 md:h-5 border border-gray-500 rounded-sm bg-transparent checked:bg-white checked:border-white outline-none cursor-pointer transition-all"
                  />
                  <svg className="absolute w-3 h-3 md:w-4 md:h-4 text-black left-[2px] top-[2px] pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <label htmlFor="terms" className="text-xs text-gray-300 font-medium cursor-pointer select-none">
                  I agree to the <span className="underline hover:text-white transition-colors">Terms & conditions</span>
                </label>
              </div>

              {/* --- SMART PROCEED TO PAY BUTTON --- */}
              <div className="pt-4 md:pt-6">
                <button 
                  type="submit"
                  disabled={!formData.agreed} 
                  className={`w-full py-4 md:py-5 rounded-xl font-black uppercase tracking-[0.15em] text-xs md:text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 
                    ${formData.agreed 
                      ? 'bg-white text-black hover:bg-gray-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'}`}
                >
                  Proceed To Pay {formData.agreed ? '→' : '🔒'}
                </button>
              </div>

            </form>
          </div>

          {/* --- RIGHT COLUMN: Dynamic Summary Card --- */}
          <div className="order-1 lg:order-2"> {/* Summary appears first on mobile */}
            
            <div className="mb-4 block lg:hidden">
              <h2 className="text-xl font-bold uppercase tracking-widest mb-1">Review Booking</h2>
            </div>

            <div className="bg-[#181818] rounded-3xl p-5 md:p-8 shadow-2xl border border-white/5">
              
              {/* Card Header: Info & Image */}
              <div className="flex justify-between items-start mb-6 md:mb-10">
                <div className="flex flex-col pr-2 md:pr-4">
                  <h3 className="text-base md:text-xl font-bold uppercase tracking-widest mb-3 md:mb-4">
                    {bookingData.vehicle}
                  </h3>
                  
                  {/* FORMATTED DATE & TIME */}
                  <div className="space-y-1.5 text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase">
                    <p>{displayDate}</p>
                    <p>{displayTime}</p>
                    
                    <p className="mt-3 md:mt-4 pt-2 text-gray-300 text-[9px] md:text-[10px] leading-relaxed max-w-[140px] md:max-w-[200px]">
                      {bookingData.packageSelected}
                    </p>
                  </div>
                </div>
                
                <div className="w-[100px] h-[60px] md:w-[140px] md:h-[90px] bg-[#e0e0e0] rounded-xl flex items-center justify-center overflow-hidden shrink-0 p-1 md:p-2">
                  <img 
                    src={bookingData.image} 
                    alt={bookingData.vehicle || "Luxury Car"} 
                    className="w-full h-full object-contain drop-shadow-lg" 
                  />
                </div>
              </div>

              {/* DYNAMIC PRICE BREAKDOWN */}
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-5">
                
                <div className="flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span>Base Price <span className="lowercase normal-case text-[9px] md:text-[10px] ml-1">(incl. GST)</span></span>
                  <span className="text-white">₹ {displayBasePrice.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span>Driver Allowance <span className="lowercase normal-case text-[9px] md:text-[10px] ml-1">(TADA)</span></span>
                  <span className="text-white">₹ {driverCharge.toLocaleString('en-IN')}</span>
                </div>

                {extraKmsValue > 0 && (
                  <div className="flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-400">
                    <span>Extra Kms <span className="lowercase normal-case text-[9px] md:text-[10px] ml-1">({extraKmsValue} km)</span></span>
                    <span className="text-orange-400">₹ {extraKmCost.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {extraHrsValue > 0 && (
                  <div className="flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-400">
                    <span>Extra Hours <span className="lowercase normal-case text-[9px] md:text-[10px] ml-1">({extraHrsValue} hr)</span></span>
                    <span className="text-orange-400">₹ {extraHrCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <hr className="border-gray-700 my-4 md:my-5" />

              {/* GRAND TOTAL */}
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Total Amount</span>
                <span className="text-2xl md:text-3xl font-black tracking-wider text-white">
                  ₹ {totalAmount.toLocaleString('en-IN')}
                </span>
              </div>

              {/* REFUNDABLE DEPOSIT */}
              <div className="bg-[#242424] p-3 md:p-4 rounded-xl border border-gray-700/50 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Refundable Deposit</span>
                  <span className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Fully refundable after trip</span>
                </div>
                <span className="text-sm md:text-lg font-bold text-white">₹ {depositAmount.toLocaleString('en-IN')}</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 30px black inset !important;
            -webkit-text-fill-color: white !important;
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;