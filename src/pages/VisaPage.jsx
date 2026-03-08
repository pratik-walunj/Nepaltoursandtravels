import React, { useState } from 'react';
import { 
  Globe, Plane, FileText, CheckCircle, ShieldCheck, 
  Clock, Headset, ChevronDown, Upload, Minus, Plus, 
  MapPin, Check, Send
} from 'lucide-react';
import visabanner from "../images/visabanner.png"
// --- MOCK DATA ---
const visaFAQs = [
  {
    id: 1,
    question: "Do Indians need a visa for Nepal?",
    answer: "No, Indian citizens do not require a visa to enter Nepal. However, they must carry a valid Indian Passport or Voter ID card to cross the border or fly into Kathmandu."
  },
  {
    id: 2,
    question: "How long does it take to process a tourist visa for other countries?",
    answer: "Processing times vary by destination. E-visas usually take 3-5 working days, while sticker visas (Schengen, US, UK) can take anywhere from 15 to 30 working days."
  },
  {
    id: 3,
    question: "Is my personal information and passport safe?",
    answer: "Absolutely. We follow strict data privacy protocols. Your documents are securely handled by our visa experts and submitted directly to the respective embassies."
  }
];

const requiredDocuments = [
  {
    id: 'basic',
    title: "Basic Documents",
    items: [
      "Original Passport with at least 6 months validity.",
      "2 Recent passport-size photographs (white background).",
      "Duly filled and signed Visa Application Form."
    ]
  },
  {
    id: 'financial',
    title: "Financial Documents",
    items: [
      "Original Bank Statements for the last 6 months (stamped & signed by bank).",
      "Income Tax Returns (ITR) for the last 3 years.",
      "Salary slips for the last 3 months (if employed)."
    ]
  },
  {
    id: 'travel',
    title: "Travel & Accommodation",
    items: [
      "Confirmed return flight tickets.",
      "Hotel accommodation proof for the entire stay.",
      "Detailed Day-wise Travel Itinerary."
    ]
  }
];

const VisaPage = () => {
  const [openDoc, setOpenDoc] = useState('basic');
  const [openFaq, setOpenFaq] = useState(1);

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', destination: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our Visa Expert will call you shortly.");
  };

  return (
    <div className="font-sans bg-[#f8f9fa] min-h-screen pb-20">
      
      {/* --- 1. HERO BANNER --- */}
      <div className="w-full h-[220px] md:h-[500px] relative">
        <img 
          src={visabanner}
          alt="Visa Services" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div> */}
        
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-[1200px] mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight">
            Global Visa Services
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-200 drop-shadow-md max-w-xl mb-6">
            Hassle-free visa processing with 99% success rate. Let our experts handle the paperwork while you pack your bags.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* BREADCRUMBS */}
        {/* <div className="text-xs text-blue-600 mb-6 font-medium cursor-pointer">
          Home <span className="text-gray-400 mx-1">&gt;</span> Services <span className="text-gray-400 mx-1">&gt;</span> <span className="text-gray-500 cursor-default">Visa Processing</span>
        </div> */}

        {/* --- MAIN LAYOUT (70-30 Split) --- */} 
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COLUMN (70%) */}
          <div className="w-full lg:w-[68%] space-y-10">
            
            {/* --- WHY CHOOSE US? --- */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Apply With Us?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 p-5 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Fast Processing</h3>
                  <p className="text-[11px] text-gray-500">Minimum turnaround time</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">99% Success</h3>
                  <p className="text-[11px] text-gray-500">Highest approval rate</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">100% Secure</h3>
                  <p className="text-[11px] text-gray-500">Data & docs protected</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3">
                    <Headset size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Expert Support</h3>
                  <p className="text-[11px] text-gray-500">24/7 dedicated assistance</p>
                </div>
              </div>
            </div>

            {/* --- HOW IT WORKS (Step-by-Step) --- */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">4 Simple Steps to Get Your Visa</h2>
              
              <div className="relative">
                {/* Vertical Line for Desktop */}
                <div className="hidden md:block absolute left-[27px] top-4 bottom-4 w-[2px] bg-gray-100"></div>
                
                <div className="space-y-6 relative">
                  {/* Step 1 */}
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 border-4 border-white shadow-sm">1</div>
                    <div className="ml-5 pt-2">
                      <h3 className="font-bold text-gray-800 text-lg">Submit Details</h3>
                      <p className="text-gray-500 text-sm mt-1">Fill out the basic inquiry form on the right or call our experts.</p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 border-4 border-white shadow-sm">2</div>
                    <div className="ml-5 pt-2">
                      <h3 className="font-bold text-gray-800 text-lg">Upload Documents</h3>
                      <p className="text-gray-500 text-sm mt-1">Securely upload your passport and required documents online.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 border-4 border-white shadow-sm">3</div>
                    <div className="ml-5 pt-2">
                      <h3 className="font-bold text-gray-800 text-lg">Verification & Processing</h3>
                      <p className="text-gray-500 text-sm mt-1">Our team verifies your documents and submits them to the embassy.</p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 border-4 border-white shadow-sm"><Check size={24} strokeWidth={3}/></div>
                    <div className="ml-5 pt-2">
                      <h3 className="font-bold text-gray-800 text-lg">Get Your Visa</h3>
                      <p className="text-gray-500 text-sm mt-1">Receive your approved visa directly on your email or WhatsApp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- REQUIRED DOCUMENTS (Accordion) --- */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Standard Required Documents</h2>
              <div className="space-y-3">
                {requiredDocuments.map((doc) => (
                  <div key={doc.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <button 
                      onClick={() => setOpenDoc(openDoc === doc.id ? null : doc.id)}
                      className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <h3 className={`font-semibold text-base ${openDoc === doc.id ? 'text-red-600' : 'text-gray-800'}`}>
                        {doc.title}
                      </h3>
                      <div className={`p-1 rounded-full ${openDoc === doc.id ? 'bg-red-50 text-red-600' : 'text-gray-400 bg-gray-100'}`}>
                        {openDoc === doc.id ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    {openDoc === doc.id && (
                      <div className="p-4 pt-2 border-t border-gray-100 animate-fadeIn bg-gray-50">
                        <ul className="space-y-2">
                          {doc.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 font-medium">
                              <div className="min-w-[6px] h-[6px] rounded-full bg-red-500 mt-2 mr-3"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* --- FAQs --- */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {visaFAQs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <button 
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown size={20} className={`text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180 text-red-600' : ''}`} />
                    </button>
                    {openFaq === faq.id && (
                      <div className="p-4 pt-2 border-t border-gray-100 animate-fadeIn text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: STICKY LEAD FORM (30%) --- */}
          <div className="w-full lg:w-[32%] sticky top-28">
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-red-600 p-5 text-center text-white">
                <h3 className="text-xl font-bold mb-1">Talk to a Visa Expert</h3>
                <p className="text-sm text-red-100">Get free consultation in 15 mins!</p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name" 
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-500 transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <span className="bg-gray-100 border border-gray-300 border-r-0 rounded-l px-3 py-2.5 text-sm text-gray-600 font-medium">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      required
                      placeholder="98765 43210" 
                      className="w-full border border-gray-300 rounded-r px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-500 transition-colors" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Email ID</label>
                  <input 
                    type="email" 
                    placeholder="example@email.com" 
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-500 transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Destination Country <span className="text-red-500">*</span></label>
                  <select required className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-500 transition-colors bg-white">
                    <option value="">Select Destination</option>
                    <option value="nepal">Nepal</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="dubai">Dubai (UAE)</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg shadow-md shadow-red-500/30 transition-colors text-base flex items-center justify-center">
                    Request Call Back <Send size={18} className="ml-2" />
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 text-center mt-3">
                  By submitting, you agree to our <a href="#" className="underline">Terms & Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Support Info below form */}
            <div className="mt-6 bg-[#fcfcfc] border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center text-gray-600 text-sm font-medium">
              <Headset className="text-blue-600 mr-2" size={20} />
              Need urgent help? <a href="tel:18002099100" className="text-blue-600 font-bold ml-1 hover:underline">1800-2099-100</a>
            </div>

          </div>
        </div>
      </div>
      
      {/* Animations CSS */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default VisaPage;