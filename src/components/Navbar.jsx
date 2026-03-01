// import React, { useState } from 'react';
// import { 
//   Menu, X, Search, Globe, PhoneCall, MapPin, ChevronDown 
// } from 'lucide-react';

// const TravelNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMobileMenu, setActiveMobileMenu] = useState(null);

//   // Define navigation links with your exact sub-items for dropdowns
//   const navLinks = [
//     { name: 'About' },
//     { 
//       name: 'Packages', 
//       subItems: [
//         'Nepal tour packages', 'Bhutan tour packages', 'Ayodhya tour packages', 
//         'Kashi tour packages', 'Prayagraj tour packages', 'Bodhgaya tour packages', 
//         'Gorakhpur tour packages', 'School trip Gorakhpur to Nepal'
//       ] 
//     },
//     { 
//       name: 'Services', 
//       subItems: [
//         'Nepal taxi and cab services', 'Hotel booking in Nepal', 
//         'Sim card in Nepal', 'Currency exchange in Nepal'
//       ] 
//     },
//     { 
//       name: 'Adventures/Sports', 
//       subItems: [
//         'Paragliding in Nepal', 'Mountain flight', 'Mountain helicopter', 
//         'Bungee jumping', 'Trekking in Nepal', 'Hiking in Nepal', 
//         'Mountain biking', 'Nepal bike riding'
//       ] 
//     },
//     { name: 'Contact' },
//     { name: 'Enquiry' },
//   ];

//   // Function to toggle mobile accordion dropdowns
//   const toggleMobileSubMenu = (menuName) => {
//     if (activeMobileMenu === menuName) {
//       setActiveMobileMenu(null);
//     } else {
//       setActiveMobileMenu(menuName);
//     }
//   };

//   return (
//     <header className="w-full font-sans sticky top-0 z-50">
      
//       {/* Top Utility Bar - Dark & Premium */}
//       <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-indigo-950 text-xs text-indigo-100">
//         <div className="flex items-center space-x-6">
//           <a href="#" className="flex items-center hover:text-orange-400 transition-colors duration-200">
//             <PhoneCall size={14} className="mr-1.5" /> Toll Free: 1800-200-XXXX
//           </a>
//           <a href="#" className="flex items-center hover:text-orange-400 transition-colors duration-200">
//             <MapPin size={14} className="mr-1.5" /> Locate Us
//           </a>
//         </div>
        
//         <div className="flex items-center space-x-4 font-medium">
//           <button className="flex items-center hover:text-orange-400 transition-colors duration-200">
//             <Globe size={14} className="mr-1.5" /> EN | ₹ INR
//           </button>
//           <span className="text-indigo-400">|</span>
//           <a href="#" className="hover:text-orange-400 transition-colors duration-200">Agent Login</a>
//           <a href="#" className="hover:text-orange-400 transition-colors duration-200">Corporate (MICE)</a>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="bg-white shadow-md border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
            
//             {/* Logo Area */}
//             <div className="flex-shrink-0 flex items-center cursor-pointer group">
//               <div className="flex flex-col justify-center">
//                 <span className="text-2xl font-extrabold text-indigo-950 tracking-tight leading-none">
//                   Nepal <span className="text-orange-500">Tour</span>
//                 </span>
//                 <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mt-1">
//                   Holidays & Forex
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden xl:flex items-center space-x-2 relative">
//               {navLinks.map((link) => (
//                 <div key={link.name} className="relative group">
//                   <a
//                     href="#"
//                     className="flex items-center px-3 py-6 text-gray-700 font-bold hover:text-orange-500 transition duration-200"
//                   >
//                     {link.name}
//                     {link.subItems && (
//                       <ChevronDown size={14} className="ml-1 text-gray-400 group-hover:text-orange-500 transition-transform duration-200 group-hover:rotate-180" />
//                     )}
//                   </a>

//                   {/* Desktop Dropdown Menu */}
//                   {link.subItems && (
//                     <div className="absolute left-0 top-full w-64 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
//                       <div className="py-2">
//                         {link.subItems.map((subItem, index) => (
//                           <a 
//                             key={index} 
//                             href="#" 
//                             className="block px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:pl-6 transition-all duration-200 border-b border-gray-50 last:border-0 capitalize"
//                           >
//                             {subItem}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Right Side Actions */}
//             <div className="hidden xl:flex items-center space-x-5">
//               <button className="text-gray-500 hover:text-indigo-700 transition-colors p-2 bg-gray-50 rounded-full hover:bg-gray-100">
//                 <Search size={20} />
//               </button>
              
//               {/* Plan My Tour Button (Styled) */}
//               <button className="bg-orange-500 text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-indigo-950 hover:shadow-indigo-950/30 hover:-translate-y-0.5 transition-all duration-300">
//                 Plan My Tour
//               </button>
//             </div>

//             {/* Mobile Menu Toggle & Actions */}
//             <div className="xl:hidden flex items-center space-x-3">
//               <button className="text-gray-500 hover:text-indigo-700">
//                 <Search size={24} />
//               </button>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-indigo-950 focus:outline-none bg-indigo-50 p-2 rounded-md hover:bg-indigo-100 transition-colors"
//               >
//                 {isOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div 
//         className={`xl:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
//       >
//         <div className="max-h-[80vh] overflow-y-auto px-4 pt-4 pb-6">
//           <div className="space-y-2">
//             {navLinks.map((link) => (
//               <div key={link.name} className="border-b border-gray-50 last:border-0 pb-1">
//                 {link.subItems ? (
//                   // Mobile Accordion for Links with Dropdowns
//                   <>
//                     <button 
//                       onClick={() => toggleMobileSubMenu(link.name)}
//                       className="w-full flex items-center justify-between px-2 py-3 text-base font-bold text-gray-800 hover:text-orange-500 transition-colors"
//                     >
//                       {link.name}
//                       <ChevronDown 
//                         size={18} 
//                         className={`text-gray-400 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-orange-500' : ''}`} 
//                       />
//                     </button>
//                     {/* Mobile Submenu Items */}
//                     <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === link.name ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
//                       <div className="flex flex-col pl-4 border-l-2 border-orange-100 ml-2 space-y-1">
//                         {link.subItems.map((subItem, index) => (
//                           <a 
//                             key={index} 
//                             href="#" 
//                             className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-orange-500 bg-gray-50 hover:bg-orange-50 rounded-lg transition-colors capitalize"
//                           >
//                             {subItem}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   // Normal Links for Mobile
//                   <a
//                     href="#"
//                     className="block px-2 py-3 text-base font-bold text-gray-800 hover:text-orange-500 transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
//             {/* Mobile Plan My Tour Button */}
//             <button className="w-full flex items-center justify-center bg-orange-500 text-white px-4 py-4 rounded-xl font-bold shadow-md shadow-orange-500/30 hover:bg-indigo-950 transition-colors">
//               Plan My Tour
//             </button>
            
//             <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
//               <a href="#" className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-indigo-600 hover:bg-indigo-50">
//                 <PhoneCall size={20} className="mb-1 text-indigo-400"/> Call Us
//               </a>
//               <a href="#" className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-indigo-600 hover:bg-indigo-50">
//                 <MapPin size={20} className="mb-1 text-indigo-400"/> Find Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TravelNavbar;















import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Globe, PhoneCall, MapPin, ChevronDown 
} from 'lucide-react';

const TravelNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll to change Navbar from Transparent to Solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation links
  const navLinks = [
    { name: 'About' },
    { 
      name: 'Packages', 
      subItems: [
        'Nepal tour packages', 'Bhutan tour packages', 'Ayodhya tour packages', 
        'Kashi tour packages', 'Prayagraj tour packages', 'Bodhgaya tour packages', 
        'Gorakhpur tour packages', 'School trip Gorakhpur to Nepal'
      ] 
    },
    { 
      name: 'Services', 
      subItems: [
        'Nepal taxi and cab services', 'Hotel booking in Nepal', 
        'Sim card in Nepal', 'Currency exchange in Nepal'
      ] 
    },
    { 
      name: 'Adventures/Sports', 
      subItems: [
        'Paragliding in Nepal', 'Mountain flight', 'Mountain helicopter', 
        'Bungee jumping', 'Trekking in Nepal', 'Hiking in Nepal', 
        'Mountain biking', 'Nepal bike riding'
      ] 
    },
    { name: 'Contact' },
    { name: 'Enquiry' },
  ];

  const toggleMobileSubMenu = (menuName) => {
    if (activeMobileMenu === menuName) {
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu(menuName);
    }
  };

  // Determine if navbar should look solid (either scrolled down or mobile menu is open)
  const isSolid = isScrolled || isOpen;

  return (
    // Changed to 'fixed' to overlay on top of the hero video
    <header className="fixed w-full font-sans top-0 z-50 transition-all duration-300">
      
      {/* Top Utility Bar - Transparent Glass -> Solid Indigo */}
      <div className={`hidden lg:flex justify-between items-center px-6 py-2 text-xs transition-colors duration-300 ${
        isSolid ? 'bg-indigo-950 text-indigo-100' : 'bg-black/20 backdrop-blur-sm text-white border-b border-white/20'
      }`}>
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center hover:text-orange-400 transition-colors duration-200">
            <PhoneCall size={14} className="mr-1.5" /> Toll Free: 1800-200-XXXX
          </a>
          <a href="#" className="flex items-center hover:text-orange-400 transition-colors duration-200">
            <MapPin size={14} className="mr-1.5" /> Locate Us
          </a>
        </div>
        
        <div className="flex items-center space-x-4 font-medium">
          <button className="flex items-center hover:text-orange-400 transition-colors duration-200">
            <Globe size={14} className="mr-1.5" /> EN | ₹ INR
          </button>
          <span className={isSolid ? "text-indigo-400" : "text-white/50"}>|</span>
          <a href="#" className="hover:text-orange-400 transition-colors duration-200">Agent Login</a>
          <a href="#" className="hover:text-orange-400 transition-colors duration-200">Corporate (MICE)</a>
        </div>
      </div>

      {/* Main Navbar - Transparent -> Solid White */}
      <div className={`transition-all duration-300 ${
        isSolid ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
           <span className={`text-2xl font-extrabold tracking-tight leading-none transition-colors duration-300 ${
                  isSolid ? 'text-indigo-950' : 'text-white'
                }`}>
                  Nepal Tour And Travel 
                </span>
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className="flex flex-col justify-center">
                <span className={`text-2xl font-extrabold tracking-tight leading-none transition-colors duration-300 ${
                  isSolid ? 'text-indigo-950' : 'text-white'
                }`}>
                  {/* Nepal Tour And Travel <span className="text-orange-500">Tour</span> */}
                </span>
                {/* <span className={`text-[10px] font-bold tracking-widest uppercase mt-1 transition-colors duration-300 ${
                  isSolid ? 'text-gray-500' : 'text-white/80'
                }`}>
                  Holidays & Forex
                </span> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-2 relative">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href="#"
                    className={`flex items-center px-3 py-6 font-bold transition duration-200 ${
                      isSolid ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-400'
                    }`}
                  >
                    {link.name}
                    {link.subItems && (
                      <ChevronDown size={14} className={`ml-1 transition-transform duration-200 group-hover:rotate-180 ${
                        isSolid ? 'text-gray-400 group-hover:text-orange-500' : 'text-white/70 group-hover:text-orange-400'
                      }`} />
                    )}
                  </a>

                  {/* Desktop Dropdown Menu (Always solid white for readability) */}
                  {link.subItems && (
                    <div className="absolute left-0 top-full w-64 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {link.subItems.map((subItem, index) => (
                          <a 
                            key={index} 
                            href="#" 
                            className="block px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:pl-6 transition-all duration-200 border-b border-gray-50 last:border-0 capitalize"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center space-x-5">
              <button className={`p-2 rounded-full transition-colors ${
                isSolid ? 'text-gray-500 hover:text-indigo-700 hover:bg-gray-100' : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}>
                <Search size={20} />
              </button>
              
              <button className="bg-orange-500 text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300">
                Plan My Tour
              </button>
            </div>

            {/* Mobile Menu Toggle & Actions */}
            <div className="xl:hidden flex items-center space-x-3">
              <button className={`transition-colors ${isSolid ? 'text-gray-500 hover:text-indigo-700' : 'text-white hover:text-orange-400'}`}>
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none p-2 rounded-md transition-colors ${
                  isSolid ? 'text-indigo-950 bg-indigo-50 hover:bg-indigo-100' : 'text-white bg-white/10 hover:bg-white/20'
                }`}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Solid White) */}
      <div 
        className={`xl:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        <div className="max-h-[80vh] overflow-y-auto px-4 pt-4 pb-6">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-50 last:border-0 pb-1">
                {link.subItems ? (
                  <>
                    <button 
                      onClick={() => toggleMobileSubMenu(link.name)}
                      className="w-full flex items-center justify-between px-2 py-3 text-base font-bold text-gray-800 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-400 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-orange-500' : ''}`} 
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === link.name ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col pl-4 border-l-2 border-orange-100 ml-2 space-y-1">
                        {link.subItems.map((subItem, index) => (
                          <a 
                            key={index} 
                            href="#" 
                            className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-orange-500 bg-gray-50 hover:bg-orange-50 rounded-lg transition-colors capitalize"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href="#"
                    className="block px-2 py-3 text-base font-bold text-gray-800 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
            <button className="w-full flex items-center justify-center bg-orange-500 text-white px-4 py-4 rounded-xl font-bold shadow-md shadow-orange-500/30 hover:bg-indigo-950 transition-colors">
              Plan My Tour
            </button>
            
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
              <a href="#" className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-indigo-600 hover:bg-indigo-50">
                <PhoneCall size={20} className="mb-1 text-indigo-400"/> Call Us
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-indigo-600 hover:bg-indigo-50">
                <MapPin size={20} className="mb-1 text-indigo-400"/> Find Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TravelNavbar;









