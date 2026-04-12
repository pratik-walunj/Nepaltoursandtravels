






import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Globe, PhoneCall, MapPin, ChevronDown, 
  Plane, Building2, Map, CreditCard, Palmtree, Bike, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // NEW STATE: Dropdown ko click karne ke baad hide karne ke liye
  const [hideDropdown, setHideDropdown] = useState(false);

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

  const navLinks = [
    { 
      name: 'Holidays', 
      icon: <Palmtree size={22} />,
      subItems: [
        { name: 'Nepal Tour Packages', path: 'nepalallpackages' },
        { name: 'Bhutan Tour Packages', path: 'bhutan-tour-packages' },
        { name: 'Ayodhya Tour Packages', path: 'ayodhya-packages' },
        { name: 'Kashi Tour Packages', path: 'kashi-tour-packages' },
        { name: 'Gorakhpur Tour Packages', path: 'gorakhpur-tour-packages' },
        { name: 'Prayagraj Tour Packages', path: 'prayagraj-tour-packages' },
        { name: 'BodhGaya Tour Packages', path: 'bodhGaya-tour-packages' },
        { name: 'School Trip Nepal', path: 'school-trip-nepal' }
      ] 
    },
    { 
      name: 'Flights', 
      icon: <Plane size={22} />,
      path: '/flight'
    },
    { 
      name: 'Hotels', 
      icon: <Building2 size={22} />,
      path: '/hotels'
    },
    { 
      name: 'Forex', 
      icon: <CreditCard size={22} />,
      subItems: [
        { name: 'Currency Exchange in Nepal', path: '/services/currency-exchange' },
        { name: 'Sim card in Nepal', path: '/services/sim-card' }
      ] 
    },
    { 
      name: 'Activities', 
      icon: <Bike size={22} />,
      subItems: [
        { name: 'Paragliding in Nepal', path: 'paragliding' },
        { name: 'Mountain flight', path: 'mountain-flight-nepal' },
        { name: 'Mountain Helicopter in Nepal', path: 'mountain-helicopter' },
        { name: 'Bungee jumping', path: 'bungee-jumping' },
        { name: 'Trekking in Nepal', path: 'trekking-in-nepal' },
        { name: 'Hiking in nepal',path: 'hiking-in-nepal'},
        { name: 'Mountain biking in nepal',path:'mountain-biking'},
        { name: 'nepal bike riding',path:'nepal-bike-riding'}
      ] 
    },
    { 
      name: 'Services', 
      icon: <Map size={22} />,
      subItems: [
        { name: 'Nepal taxi and cab services', path: '/cabservice' }
      ] 
    },
    { 
      name: 'Visa', 
      icon: <FileText size={22} />,
      path: '/visa'
    }
  ];

  const toggleMobileSubMenu = (menuName) => {
    if (activeMobileMenu === menuName) {
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu(menuName);
    }
  };

  // NEW FUNCTION: Jab bhi koi link click hoga, ye saare menus ko band kar dega
  const handleLinkClick = () => {
    // Mobile menu close karega
    setIsOpen(false);
    setActiveMobileMenu(null);
    
    // Desktop dropdown ka 'sticky hover' hata dega
    setHideDropdown(true);
    setTimeout(() => {
      setHideDropdown(false); // 300ms baad wapas normal state me le aayega
    }, 300);
  };

  const isSolid = isScrolled || isOpen;

  return (
    <header className="fixed w-full font-sans top-0 z-50 transition-all duration-300">
      
      {/* Top Utility Bar */}
      <div className={`hidden lg:flex justify-between items-center px-6 py-2 text-[11px] transition-colors duration-300 border-b ${
        isSolid ? 'bg-gray-100 text-gray-600 border-gray-200' :
        // bg-black/40
        '         backdrop-blur-sm text-gray-200 border-white/20'
      }`}>
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center hover:text-blue-600 transition-colors duration-200 font-medium">
            <PhoneCall size={12} className="mr-1.5" /> +91 9422799108
          </a>
          <a href="https://www.google.com/maps/place/Nepal+Tours+and+Travels/@26.7596357,83.3791606,778m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3991448adb440bcf:0x3728ff2d4d69281f!8m2!3d26.7596357!4d83.3817355!16s%2Fg%2F11bw3djl2n?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" className="flex items-center hover:text-blue-600 transition-colors duration-200 font-medium">
            <MapPin size={12} className="mr-1.5" /> Find Nearest Stores
          </a>
        </div>
        <div className="flex items-center space-x-4 font-medium">
          <button className="flex items-center hover:text-blue-600 transition-colors duration-200">
            <Globe size={12} className="mr-1.5" /> EN | English
          </button>
          <span className={isSolid ? "text-gray-300" : "text-white/30"}>|</span>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Customer Login</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Agent Login</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isSolid ? 'bg-white shadow-md border-b border-gray-200' :
        // from-black/60
        'bg-gradient-to-b  to-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer mr-8">
               <Link to="/"> 
                 <span className={`text-2xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${
                    isSolid ? 'text-blue-800' : 'text-white'
                  }`}>
                    Nepal<span className={isSolid ? "text-yellow-500" : "text-yellow-400"}>Tour</span>
                  </span>
               </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center justify-center flex-1 space-x-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group px-2 py-4 cursor-pointer">
                  {link.subItems ? (
                    <div className={`flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      isSolid ? 'text-gray-700 group-hover:text-blue-600' : 'text-white group-hover:text-yellow-400'
                    }`}>
                      <span className={`mb-1 transition-transform duration-200 group-hover:-translate-y-1 ${
                         isSolid ? 'text-gray-500 group-hover:text-blue-600' : 'text-gray-200 group-hover:text-yellow-400'
                      }`}>
                        {link.icon}
                      </span>
                      <div className="flex items-center mt-1">
                        {link.name}
                        <ChevronDown size={12} className="ml-1 opacity-70" />
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={handleLinkClick} // Added onClick here
                      className={`flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 ${
                        isSolid ? 'text-gray-700 group-hover:text-blue-600' : 'text-white group-hover:text-yellow-400'
                      }`}
                    >
                      <span className={`mb-1 transition-transform duration-200 group-hover:-translate-y-1 ${
                         isSolid ? 'text-gray-500 group-hover:text-blue-600' : 'text-gray-200 group-hover:text-yellow-400'
                      }`}>
                        {link.icon}
                      </span>
                      <div className="flex items-center mt-1">
                        {link.name}
                      </div>
                    </Link>
                  )}

                  {/* Active Underline Indicator */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isSolid ? 'bg-yellow-500' : 'bg-yellow-400'
                  }`}></div>

                  {/* Desktop Dropdown Menu (Fixed Sticky Hover Issue) */}
                  {link.subItems && (
                    <div className={`absolute left-1/2 -translate-x-1/2 top-[90%] w-64 bg-white border border-gray-200 shadow-2xl rounded-lg transition-all duration-300 z-50 pt-2 ${
                      // Condition: Agar hideDropdown true hai toh hover classes hata do
                      hideDropdown 
                        ? 'opacity-0 invisible pointer-events-none' 
                        : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full'
                    }`}>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>
                      <div className="py-2 relative bg-white rounded-lg z-10">
                        {link.subItems.map((subItem, index) => (
                          <Link 
                            key={index} 
                            to={subItem.path} 
                            onClick={handleLinkClick} // Trigger the hide function
                            className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center space-x-4 ml-8">
              {/* <button className={`p-2 rounded-full transition-colors ${
                isSolid ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100' : 'text-white hover:text-yellow-400 hover:bg-white/10'
              }`}>
                <Search size={22} />
              </button> */}
              
              <button className={`px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${
                isSolid 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                  : 'bg-white text-blue-800 hover:bg-yellow-400 hover:text-blue-900'
              }`}>
             Website Under Development
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden flex items-center space-x-4">
              {/* <button className={`transition-colors ${isSolid ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}>
                <Search size={24} />
              </button> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none p-2 rounded-md transition-colors ${
                  isSolid ? 'text-gray-800 bg-gray-100 hover:bg-gray-200' : 'text-white bg-white/20 hover:bg-white/30'
                }`}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`xl:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        <div className="max-h-[85vh] overflow-y-auto px-4 pt-2 pb-8">
          <div className="space-y-1 mt-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                {link.subItems ? (
                  <>
                    <button 
                      onClick={() => toggleMobileSubMenu(link.name)}
                      className="w-full flex items-center justify-between px-2 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors group"
                    >
                      <div className="flex items-center">
                        <span className="text-gray-400 group-hover:text-blue-600 transition-colors mr-4">
                          {link.icon}
                        </span>
                        {link.name}
                      </div>
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-400 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-blue-600' : ''}`} 
                      />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-b-lg ${activeMobileMenu === link.name ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col pl-11 pr-2 py-2 space-y-1">
                        {link.subItems.map((subItem, index) => (
                          <Link 
                            key={index} 
                            to={subItem.path} 
                            onClick={handleLinkClick} // Applied central handler
                            className="py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-200 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={handleLinkClick} // Applied central handler
                    className="w-full flex items-center px-2 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors group"
                  >
                    <span className="text-gray-400 group-hover:text-blue-600 transition-colors mr-4">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
            <button className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-3.5 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors">
              Login / Register
            </button>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
              <a href="#" className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200 group">
                <PhoneCall size={18} className="mr-2 text-gray-400 group-hover:text-blue-500"/> Call Us
              </a>
              <a href="#" className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200 group">
                <MapPin size={18} className="mr-2 text-gray-400 group-hover:text-blue-500"/> Find Stores
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TravelNavbar;






