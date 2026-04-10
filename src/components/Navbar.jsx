

// import React, { useState, useEffect } from 'react';
// import { 
//   Menu, X, Search, Globe, PhoneCall, MapPin, ChevronDown, 
//   Plane, Building2, Map, CreditCard, Palmtree, Bike, FileText
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const TravelNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMobileMenu, setActiveMobileMenu] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
  
//   // NEW STATE: Dropdown ko click karne ke baad hide karne ke liye
//   const [hideDropdown, setHideDropdown] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { 
//       name: 'Holidays', 
//       icon: <Palmtree size={22} />,
//       subItems: [
//         { name: 'Nepal Tour Packages', path: 'nepalallpackages' },
//         { name: 'Bhutan Tour Packages', path: 'bhutan-tour-packages' },
//         { name: 'Ayodhya Tour Packages', path: 'ayodhya-packages' },
//         { name: 'Kashi Tour Packages', path: 'kashi-tour-packages' },
//         { name: 'Gorakhpur Tour Packages', path: 'gorakhpur-tour-packages' },
//         { name: 'Prayagraj Tour Packages', path: 'prayagraj-tour-packages' },
//         { name: 'BodhGaya Tour Packages', path: 'bodhGaya-tour-packages' },
//         { name: 'School Trip Nepal', path: 'school-trip-nepal' }
//       ] 
//     },
//     { 
//       name: 'Flights', 
//       icon: <Plane size={22} />,
//       path: '/flight'
//     },
//     { 
//       name: 'Hotels', 
//       icon: <Building2 size={22} />,
//       path: '/hotels'
//     },
//     { 
//       name: 'Forex', 
//       icon: <CreditCard size={22} />,
//       subItems: [
//         { name: 'Currency Exchange in Nepal', path: '/services/currency-exchange' },
//         { name: 'Sim card in Nepal', path: '/services/sim-card' }
//       ] 
//     },
//     { 
//       name: 'Activities', 
//       icon: <Bike size={22} />,
//       subItems: [
//         { name: 'Paragliding in Nepal', path: 'paragliding' },
//         { name: 'Mountain flight', path: 'mountain-flight-nepal' },
//         { name: 'Mountain Helicopter in Nepal', path: 'mountain-helicopter' },
//         { name: 'Bungee jumping', path: 'bungee-jumping' },
//         { name: 'Trekking in Nepal', path: 'trekking-in-nepal' },
//         { name: 'Hiking in nepal',path: 'hiking-in-nepal'},
//         { name: 'Mountain biking in nepal',path:'mountain-biking'},
//         { name: 'nepal bike riding',path:'nepal-bike-riding'}
//       ] 
//     },
//     { 
//       name: 'Services', 
//       icon: <Map size={22} />,
//       subItems: [
//         { name: 'Nepal taxi and cab services', path: '/cabservice' }
//       ] 
//     },
//     { 
//       name: 'Visa', 
//       icon: <FileText size={22} />,
//       path: '/visa'
//     }
//   ];

//   const toggleMobileSubMenu = (menuName) => {
//     if (activeMobileMenu === menuName) {
//       setActiveMobileMenu(null);
//     } else {
//       setActiveMobileMenu(menuName);
//     }
//   };

//   // NEW FUNCTION: Jab bhi koi link click hoga, ye saare menus ko band kar dega
//   const handleLinkClick = () => {
//     // Mobile menu close karega
//     setIsOpen(false);
//     setActiveMobileMenu(null);
    
//     // Desktop dropdown ka 'sticky hover' hata dega
//     setHideDropdown(true);
//     setTimeout(() => {
//       setHideDropdown(false); // 300ms baad wapas normal state me le aayega
//     }, 300);
//   };

//   const isSolid = isScrolled || isOpen;

//   return (
//     <header className="fixed w-full font-sans top-0 z-50 transition-all duration-300">
      
//       {/* Top Utility Bar */}
//       <div className={`hidden lg:flex justify-between items-center px-6 py-2 text-[11px] transition-colors duration-300 border-b ${
//         isSolid ? 'bg-gray-100 text-gray-600 border-gray-200' :
//         // bg-black/40
//         '         backdrop-blur-sm text-gray-200 border-white/20'
//       }`}>
//         <div className="flex items-center space-x-6">
//           <a href="#" className="flex items-center hover:text-blue-600 transition-colors duration-200 font-medium">
//             <PhoneCall size={12} className="mr-1.5" /> +91 85760 00084
//           </a>
//           <a href="https://www.google.com/maps/place/Nepal+Tours+and+Travels/@26.7596357,83.3791606,778m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3991448adb440bcf:0x3728ff2d4d69281f!8m2!3d26.7596357!4d83.3817355!16s%2Fg%2F11bw3djl2n?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" className="flex items-center hover:text-blue-600 transition-colors duration-200 font-medium">
//             <MapPin size={12} className="mr-1.5" /> Find Nearest Stores
//           </a>
//         </div>
//         <div className="flex items-center space-x-4 font-medium">
//           <button className="flex items-center hover:text-blue-600 transition-colors duration-200">
//             <Globe size={12} className="mr-1.5" /> EN | English
//           </button>
//           <span className={isSolid ? "text-gray-300" : "text-white/30"}>|</span>
//           <a href="#" className="hover:text-blue-600 transition-colors duration-200">Customer Login</a>
//           <a href="#" className="hover:text-blue-600 transition-colors duration-200">Agent Login</a>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className={`transition-all duration-300 ${
//         isSolid ? 'bg-white shadow-md border-b border-gray-200' :
//         // from-black/60
//         'bg-gradient-to-b  to-transparent'
//       }`}>
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20 md:h-24">
            
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center cursor-pointer mr-8">
//                <Link to="/"> 
//                  <span className={`text-2xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${
//                     isSolid ? 'text-blue-800' : 'text-white'
//                   }`}>
//                     Nepal<span className={isSolid ? "text-yellow-500" : "text-yellow-400"}>Tour</span>
//                   </span>
//                </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden xl:flex items-center justify-center flex-1 space-x-2">
//               {navLinks.map((link) => (
//                 <div key={link.name} className="relative group px-2 py-4 cursor-pointer">
//                   {link.subItems ? (
//                     <div className={`flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 ${
//                       isSolid ? 'text-gray-700 group-hover:text-blue-600' : 'text-white group-hover:text-yellow-400'
//                     }`}>
//                       <span className={`mb-1 transition-transform duration-200 group-hover:-translate-y-1 ${
//                          isSolid ? 'text-gray-500 group-hover:text-blue-600' : 'text-gray-200 group-hover:text-yellow-400'
//                       }`}>
//                         {link.icon}
//                       </span>
//                       <div className="flex items-center mt-1">
//                         {link.name}
//                         <ChevronDown size={12} className="ml-1 opacity-70" />
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       to={link.path}
//                       onClick={handleLinkClick} // Added onClick here
//                       className={`flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 ${
//                         isSolid ? 'text-gray-700 group-hover:text-blue-600' : 'text-white group-hover:text-yellow-400'
//                       }`}
//                     >
//                       <span className={`mb-1 transition-transform duration-200 group-hover:-translate-y-1 ${
//                          isSolid ? 'text-gray-500 group-hover:text-blue-600' : 'text-gray-200 group-hover:text-yellow-400'
//                       }`}>
//                         {link.icon}
//                       </span>
//                       <div className="flex items-center mt-1">
//                         {link.name}
//                       </div>
//                     </Link>
//                   )}

//                   {/* Active Underline Indicator */}
//                   <div className={`absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
//                     isSolid ? 'bg-yellow-500' : 'bg-yellow-400'
//                   }`}></div>

//                   {/* Desktop Dropdown Menu (Fixed Sticky Hover Issue) */}
//                   {link.subItems && (
//                     <div className={`absolute left-1/2 -translate-x-1/2 top-[90%] w-64 bg-white border border-gray-200 shadow-2xl rounded-lg transition-all duration-300 z-50 pt-2 ${
//                       // Condition: Agar hideDropdown true hai toh hover classes hata do
//                       hideDropdown 
//                         ? 'opacity-0 invisible pointer-events-none' 
//                         : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full'
//                     }`}>
//                       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>
//                       <div className="py-2 relative bg-white rounded-lg z-10">
//                         {link.subItems.map((subItem, index) => (
//                           <Link 
//                             key={index} 
//                             to={subItem.path} 
//                             onClick={handleLinkClick} // Trigger the hide function
//                             className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Right Side Actions */}
//             <div className="hidden xl:flex items-center space-x-4 ml-8">
//               {/* <button className={`p-2 rounded-full transition-colors ${
//                 isSolid ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100' : 'text-white hover:text-yellow-400 hover:bg-white/10'
//               }`}>
//                 <Search size={22} />
//               </button> */}
              
//               <button className={`px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${
//                 isSolid 
//                   ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
//                   : 'bg-white text-blue-800 hover:bg-yellow-400 hover:text-blue-900'
//               }`}>
//                Login
//               </button>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <div className="xl:hidden flex items-center space-x-4">
//               {/* <button className={`transition-colors ${isSolid ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}>
//                 <Search size={24} />
//               </button> */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`focus:outline-none p-2 rounded-md transition-colors ${
//                   isSolid ? 'text-gray-800 bg-gray-100 hover:bg-gray-200' : 'text-white bg-white/20 hover:bg-white/30'
//                 }`}
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
//         <div className="max-h-[85vh] overflow-y-auto px-4 pt-2 pb-8">
//           <div className="space-y-1 mt-2">
//             {navLinks.map((link) => (
//               <div key={link.name} className="border-b border-gray-100 last:border-0">
//                 {link.subItems ? (
//                   <>
//                     <button 
//                       onClick={() => toggleMobileSubMenu(link.name)}
//                       className="w-full flex items-center justify-between px-2 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors group"
//                     >
//                       <div className="flex items-center">
//                         <span className="text-gray-400 group-hover:text-blue-600 transition-colors mr-4">
//                           {link.icon}
//                         </span>
//                         {link.name}
//                       </div>
//                       <ChevronDown 
//                         size={18} 
//                         className={`text-gray-400 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-blue-600' : ''}`} 
//                       />
//                     </button>
                    
//                     <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-b-lg ${activeMobileMenu === link.name ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
//                       <div className="flex flex-col pl-11 pr-2 py-2 space-y-1">
//                         {link.subItems.map((subItem, index) => (
//                           <Link 
//                             key={index} 
//                             to={subItem.path} 
//                             onClick={handleLinkClick} // Applied central handler
//                             className="py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-200 last:border-0"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     to={link.path}
//                     onClick={handleLinkClick} // Applied central handler
//                     className="w-full flex items-center px-2 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors group"
//                   >
//                     <span className="text-gray-400 group-hover:text-blue-600 transition-colors mr-4">
//                       {link.icon}
//                     </span>
//                     {link.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
//             <button className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-3.5 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors">
//               Login / Register
//             </button>
//             <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
//               <a href="#" className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200 group">
//                 <PhoneCall size={18} className="mr-2 text-gray-400 group-hover:text-blue-500"/> Call Us
//               </a>
//               <a href="#" className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200 group">
//                 <MapPin size={18} className="mr-2 text-gray-400 group-hover:text-blue-500"/> Find Stores
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
  Menu, X, Search, Globe, PhoneCall, MapPin, ChevronDown, 
  Plane, Building2, Map, CreditCard, Palmtree, Bike, FileText,
  Mail, Lock, Eye, EyeOff, ArrowRight, User, UserPlus // Added User and UserPlus icons
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. LOGIN MODAL COMPONENT ---
const LoginModal = ({ isOpen, onClose, onOpenRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", formData);
    alert("Login Successful! Welcome back.");
    onClose(); 
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose} 
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[95vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-800 hover:text-orange-500 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Nepal Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent flex flex-col justify-end p-10">
            <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome Back</h2>
            <p className="text-indigo-100 text-sm font-medium drop-shadow">Your next grand Himalayan adventure is just a click away.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
          <div className="mb-8 text-center md:text-left"> 
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Sign <span className="text-orange-500">In</span></h1>
            <p className="text-sm text-gray-500">Enter your details to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm text-gray-700"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm text-gray-700"
                  placeholder="Enter your password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded cursor-pointer" />
                <label htmlFor="remember" className="ml-2 block text-xs text-gray-600 cursor-pointer">Remember me</label>
              </div>
              <a href="#" className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group mt-6">
              Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              type="button"
              onClick={() => {
                onClose(); // Close Login
                onOpenRegister(); // Open Register
              }} 
              className="font-bold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- 2. REGISTER MODAL COMPONENT ---
const RegisterModal = ({ isOpen, onClose, onOpenLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({ 
    name: '', email: '', mobile: '', password: '', confirmPassword: '' 
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    console.log("Registration Attempt:", formData);
    alert("Registration Successful! Welcome to Nepal Tours.");
    onClose(); 
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose} 
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row-reverse overflow-hidden max-h-[95vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-800 hover:text-orange-500 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image Side (Reversed for Register) */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Trekking in Nepal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-transparent flex flex-col justify-end p-10">
            <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow-lg">Start Your Journey</h2>
            <p className="text-orange-100 text-sm font-medium drop-shadow">Create an account to book your dream Himalayan escape.</p>
          </div>
        </div>

        {/* Form Side (Scrollable for mobile screens) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center overflow-y-auto">
          <div className="mb-6 text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Sign <span className="text-orange-500">Up</span></h1>
            <p className="text-sm text-gray-500">Join us and start planning your adventure.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={16} className="text-gray-400" /></div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm text-gray-700" placeholder="John Doe" />
              </div>
            </div>

            {/* Email & Mobile (Grid on sm screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail size={16} className="text-gray-400" /></div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm text-gray-700" placeholder="mail@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><PhoneCall size={16} className="text-gray-400" /></div>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm text-gray-700" placeholder="+91 9876543210" />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock size={16} className="text-gray-400" /></div>
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required
                  className="w-full pl-9 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm text-gray-700" placeholder="Create password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-500">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock size={16} className="text-gray-400" /></div>
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required
                  className={`w-full pl-9 pr-9 py-2.5 bg-gray-50 border rounded-xl outline-none text-sm text-gray-700 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-orange-500'}`} placeholder="Confirm password" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-500">
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {error && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{error}</p>}
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group mt-2">
              Create Account <UserPlus size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600 pb-2">
            Already have an account?{' '}
            <button 
              type="button"
              onClick={() => {
                onClose(); // Close Register
                onOpenLogin(); // Open Login
              }} 
              className="font-bold text-indigo-950 hover:text-indigo-800 transition-colors"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN NAVBAR COMPONENT ---
const TravelNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);
  
  // Modal States
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
    { name: 'Flights', icon: <Plane size={22} />, path: '/flight' },
    { name: 'Hotels', icon: <Building2 size={22} />, path: '/hotels' },
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
        { name: 'Hiking in nepal', path: 'hiking-in-nepal'},
        { name: 'Mountain biking in nepal', path:'mountain-biking'},
        { name: 'nepal bike riding', path:'nepal-bike-riding'}
      ] 
    },
    { 
      name: 'Services', 
      icon: <Map size={22} />,
      subItems: [
        { name: 'Nepal taxi and cab services', path: '/cabservice' }
      ] 
    },
    { name: 'Visa', icon: <FileText size={22} />, path: '/visa' }
  ];

  const toggleMobileSubMenu = (menuName) => {
    setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveMobileMenu(null);
    setHideDropdown(true);
    setTimeout(() => setHideDropdown(false), 300);
  };

  const isSolid = isScrolled || isOpen;

  return (
    <>
      {/* INJECT MODALS */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onOpenRegister={() => setIsRegisterModalOpen(true)} // Passes function to open Register
      />
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
        onOpenLogin={() => setIsLoginModalOpen(true)} // Passes function to open Login
      />
      
      <header className="fixed w-full font-sans top-0 z-50 transition-all duration-300">
        
        {/* Top Utility Bar */}
        <div className={`hidden lg:flex justify-between items-center px-6 py-2 text-[11px] transition-colors duration-300 border-b ${
          isSolid ? 'bg-gray-100 text-gray-600 border-gray-200' : 'backdrop-blur-sm text-gray-200 border-white/20'
        }`}>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-blue-600 transition-colors duration-200 font-medium">
              <PhoneCall size={12} className="mr-1.5" /> +91 85760 00084
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
            <button  className="hover:text-blue-600 transition-colors duration-200">Customer Login</button>
            <button  className="hover:text-blue-600 transition-colors duration-200">Agent Login</button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 ${
          isSolid ? 'bg-white shadow-md border-b border-gray-200' : 'bg-gradient-to-b to-transparent'
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
                        onClick={handleLinkClick} 
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

                    <div className={`absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      isSolid ? 'bg-yellow-500' : 'bg-yellow-400'
                    }`}></div>

                    {/* Desktop Dropdown */}
                    {link.subItems && (
                      <div className={`absolute left-1/2 -translate-x-1/2 top-[90%] w-64 bg-white border border-gray-200 shadow-2xl rounded-lg transition-all duration-300 z-50 pt-2 ${
                        hideDropdown 
                          ? 'opacity-0 invisible pointer-events-none' 
                          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full'
                      }`}>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>
                        <div className="py-2 relative bg-white rounded-lg z-10">
                          {link.subItems.map((subItem, index) => (
                            <Link 
                              key={index} to={subItem.path} onClick={handleLinkClick} 
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

              {/* Right Side Actions - DESKTOP LOGIN BUTTON */}
              <div className="hidden xl:flex items-center space-x-4 ml-8">
                <button 
                  onClick={() => setIsLoginModalOpen(true)} 
                  className={`px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${
                  isSolid 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                    : 'bg-white text-blue-800 hover:bg-yellow-400 hover:text-blue-900'
                }`}>
                 Login
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="xl:hidden flex items-center space-x-4">
                <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none p-2 rounded-md transition-colors ${
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
        <div className={`xl:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="max-h-[85vh] overflow-y-auto px-4 pt-2 pb-8">
            <div className="space-y-1 mt-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 last:border-0">
                  {link.subItems ? (
                    <>
                      <button onClick={() => toggleMobileSubMenu(link.name)} className="w-full flex items-center justify-between px-2 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors group">
                        <div className="flex items-center"><span className="text-gray-400 group-hover:text-blue-600 transition-colors mr-4">{link.icon}</span>{link.name}</div>
                        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-b-lg ${activeMobileMenu === link.name ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col pl-11 pr-2 py-2 space-y-1">
                          {link.subItems.map((subItem, index) => (
                            <Link key={index} to={subItem.path} onClick={handleLinkClick} className="py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-200 last:border-0">{subItem.name}</Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={link.path} onClick={handleLinkClick} className="w-full flex items-center px-2 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors group">
                      <span className="text-gray-400 group-hover:text-blue-600 transition-colors mr-4">{link.icon}</span>{link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <button 
                onClick={() => { setIsOpen(false); setIsLoginModalOpen(true); }}
                className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-3.5 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors"
              >
                Login / Register
              </button>
              <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
                <a href="#" className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-blue-600 border border-gray-200 group"><PhoneCall size={18} className="mr-2 text-gray-400 group-hover:text-blue-500"/> Call Us</a>
                <a href="#" className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:text-blue-600 border border-gray-200 group"><MapPin size={18} className="mr-2 text-gray-400 group-hover:text-blue-500"/> Find Stores</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TravelNavbar;