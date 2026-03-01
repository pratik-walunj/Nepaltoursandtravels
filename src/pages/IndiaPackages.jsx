// import React, { useState } from 'react';
// import { 
//   MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
//   Star, Filter, ChevronRight, Bus 
// } from 'lucide-react';

// // Mock Data for Nepal Packages (Area Wise)
// const packagesData = [
//   {
//     id: 1,
//     title: "Classic Kathmandu Valley",
//     area: "Kathmandu Valley",
//     image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Kathmandu • Patan • Bhaktapur",
//     duration: "4 Days / 3 Nights",
//     originalPrice: "₹18,500",
//     discountedPrice: "₹14,999",
//     discount: "19% OFF",
//     rating: 4.8,
//     reviews: 124,
//     inclusions: ['Flight', '3 Star Hotel', 'Breakfast', 'Sightseeing'],
//     tag: "Bestseller"
//   },
//   {
//     id: 2,
//     title: "Everest Base Camp Trek",
//     area: "Everest Region",
//     image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Lukla • Namche Bazaar • EBC",
//     duration: "14 Days / 13 Nights",
//     originalPrice: "₹52,000",
//     discountedPrice: "₹45,500",
//     discount: "12% OFF",
//     rating: 4.9,
//     reviews: 89,
//     inclusions: ['Flight', 'Teahouse', 'All Meals', 'Guide'],
//     tag: "Adventure"
//   },
//   {
//     id: 3,
//     title: "Pokhara Lakes & Mountains",
//     area: "Annapurna Region",
//     image: "https://images.unsplash.com/photo-1605640840469-60ce8f05eeac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Kathmandu • Pokhara • Sarangkot",
//     duration: "6 Days / 5 Nights",
//     originalPrice: "₹24,500",
//     discountedPrice: "₹19,999",
//     discount: "18% OFF",
//     rating: 4.7,
//     reviews: 210,
//     inclusions: ['Bus Transfer', '4 Star Hotel', 'Breakfast', 'Boating'],
//     tag: "Family Favorite"
//   },
//   {
//     id: 4,
//     title: "Chitwan Wildlife Safari",
//     area: "Terai Region",
//     image: "https://images.unsplash.com/photo-1610423018151-61014e7aebaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Chitwan National Park",
//     duration: "3 Days / 2 Nights",
//     originalPrice: "₹15,000",
//     discountedPrice: "₹11,500",
//     discount: "23% OFF",
//     rating: 4.6,
//     reviews: 156,
//     inclusions: ['Hotel', 'All Meals', 'Jungle Safari', 'Transfers'],
//     tag: "Trending"
//   }
// ];

// const NepalPackagesPage = () => {
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Helper to render inclusion icons
//   const getInclusionIcon = (item) => {
//     if (item.toLowerCase().includes('flight')) return <Plane size={16} />;
//     if (item.toLowerCase().includes('bus') || item.toLowerCase().includes('transfer')) return <Bus size={16} />;
//     if (item.toLowerCase().includes('hotel') || item.toLowerCase().includes('teahouse')) return <BedDouble size={16} />;
//     if (item.toLowerCase().includes('meal') || item.toLowerCase().includes('breakfast')) return <Utensils size={16} />;
//     return <Camera size={16} />;
//   };

//   return (
//     <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
//       {/* 1. Page Header / Banner - ALIGNED LEFT AND SIZED DOWN */}
//       <div className="bg-indigo-950 text-white py-10 md:py-12 px-4 relative overflow-hidden">
//         {/* Subtle background pattern/gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-indigo-900 z-0"></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center px-2 sm:px-4 lg:px-6">
//           <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Nepal Tour Packages</h1>
//           <p className="text-indigo-200 text-base max-w-2xl">
//             Explore the majestic Himalayas. From the cultural heart of Kathmandu to the thrilling heights of Everest, find your perfect Nepal holiday.
//           </p>
//         </div>
//       </div>

//       {/* 2. Main Content Area */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col lg:flex-row gap-8">
        
//         {/* Mobile Filter Toggle */}
//         <button 
//           className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold"
//           onClick={() => setShowMobileFilters(!showMobileFilters)}
//         >
//           <Filter size={20} className="mr-2 text-orange-500" />
//           {showMobileFilters ? "Hide Filters" : "Show Filters"}
//         </button>

//         {/* 3. Sidebar (Filters) */}
//         <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
//           <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
//             <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
//               <h2 className="text-lg font-extrabold text-indigo-950 flex items-center">
//                 <Filter size={18} className="mr-2 text-orange-500" /> Filters
//               </h2>
//               <span className="text-sm text-orange-500 font-semibold cursor-pointer hover:underline">Reset All</span>
//             </div>

//             {/* Filter Group: Nepal Regions (Area Wise) */}
//             <div className="mb-6">
//               <h3 className="font-bold text-gray-800 mb-3">Filter by Region</h3>
//               <div className="space-y-2">
//                 {['Kathmandu Valley', 'Annapurna Region', 'Everest Region', 'Terai Region (Wildlife)', 'Lumbini (Pilgrimage)'].map((dest, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{dest}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Duration */}
//             <div className="mb-6 border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
//               <div className="space-y-2">
//                 {['1 - 3 Nights', '4 - 6 Nights', '7 - 10 Nights', '11+ Nights (Trekking)'].map((duration, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{duration}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Tour Style */}
//             <div className="border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
//               <div className="space-y-2">
//                 {['Leisure & Sightseeing', 'Trekking & Adventure', 'Wildlife Safari', 'Spiritual / Pilgrimage'].map((style, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{style}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </aside>

//         {/* 4. Package Grid Area */}
//         <div className="w-full lg:w-3/4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-gray-800">Found {packagesData.length} Nepal Packages</h2>
//             <select className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5 outline-none bg-white cursor-pointer shadow-sm">
//               <option>Sort by: Popularity</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Duration: Short to Long</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {packagesData.map((pkg) => (
//               // Package Card
//               <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                
//                 {/* Image & Badges */}
//                 <div className="relative h-56 overflow-hidden">
//                   <img 
//                     src={pkg.image} 
//                     alt={pkg.title} 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* Discount Badge */}
//                   <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
//                     {pkg.discount}
//                   </div>
//                   {/* Tag Badge */}
//                   <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
//                     {pkg.tag}
//                   </div>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-5 flex flex-col flex-grow">
                  
//                   {/* Title & Rating */}
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors pr-2">
//                       {pkg.title}
//                     </h3>
//                     <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 mt-1">
//                       {pkg.rating} <Star size={12} className="ml-1 fill-current" />
//                     </div>
//                   </div>

//                   {/* Area Badge (New for Nepal) */}
//                   <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-1 rounded mb-3 self-start">
//                     Region: {pkg.area}
//                   </div>

//                   {/* Destinations & Duration */}
//                   <div className="text-sm text-gray-500 font-medium space-y-2 mb-4">
//                     <div className="flex items-center">
//                       <MapPin size={16} className="text-orange-500 mr-2 shrink-0" />
//                       <span className="truncate">{pkg.destinations}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock size={16} className="text-orange-500 mr-2 shrink-0" />
//                       {pkg.duration}
//                     </div>
//                   </div>

//                   {/* Inclusions Row */}
//                   <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
//                     <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Inclusions</p>
//                     <div className="flex flex-wrap gap-4">
//                       {pkg.inclusions.map((inclusion, idx) => (
//                         <div key={idx} className="flex flex-col items-center justify-center text-gray-500">
//                           <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">
//                             {getInclusionIcon(inclusion)}
//                           </div>
//                           <span className="text-[10px] font-semibold text-center leading-tight w-12 truncate">{inclusion}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Pricing & Buttons */}
//                   <div className="flex items-end justify-between">
//                     <div>
//                       <p className="text-xs text-gray-400 font-semibold line-through mb-0.5">{pkg.originalPrice}</p>
//                       <div className="flex items-baseline">
//                         <span className="text-2xl font-black text-indigo-950">{pkg.discountedPrice}</span>
//                         <span className="text-xs text-gray-500 ml-1 font-medium">/ person</span>
//                       </div>
//                     </div>
//                     <button className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-colors duration-300 shadow-lg shadow-orange-500/20 text-sm flex items-center">
//                       View Details
//                       <ChevronRight size={16} className="ml-1" />
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Load More Button */}
//           <div className="mt-10 flex justify-center">
//             <button className="bg-white border-2 border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white px-8 py-3 rounded-full font-bold transition-colors duration-300">
//               Load More Packages
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default NepalPackagesPage;
































import React, { useState } from 'react';
import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, Bus 
} from 'lucide-react';

// Mock Data for Nepal Packages (Area Wise)
const packagesData = [
  {
    id: 1,
    title: "Classic Kathmandu Valley",
    area: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: "Kathmandu • Patan • Bhaktapur",
    duration: "4 Days / 3 Nights",
    originalPrice: "₹...",
    discountedPrice: "₹...",
    discount: "...",
    rating: 4.8,
    reviews: 124,
    inclusions: ['Flight', '3 Star Hotel', 'Breakfast', 'Sightseeing'],
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Everest Base Camp Trek",
    area: "Everest Region",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: "Lukla • Namche Bazaar • EBC",
    duration: "14 Days / 13 Nights",
    originalPrice: "₹...",
    discountedPrice: "₹...",
    discount: "...",
    rating: 4.9,
    reviews: 89,
    inclusions: ['Flight', 'Teahouse', 'All Meals', 'Guide'],
    tag: "Adventure"
  },
  {
    id: 3,
    title: "Pokhara Lakes & Mountains",
    area: "Annapurna Region",
    image: "https://images.unsplash.com/photo-1605640840469-60ce8f05eeac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: "Kathmandu • Pokhara • Sarangkot",
    duration: "6 Days / 5 Nights",
    originalPrice: "₹...",
    discountedPrice: "₹...",
    discount: "...",
    rating: 4.7,
    reviews: 210,
    inclusions: ['Bus Transfer', '4 Star Hotel', 'Breakfast', 'Boating'],
    tag: "Family Favorite"
  },
  {
    id: 4,
    title: "Chitwan Wildlife Safari",
    area: "Terai Region",
    image: "https://images.unsplash.com/photo-1610423018151-61014e7aebaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: "Chitwan National Park",
    duration: "3 Days / 2 Nights",
    originalPrice: "₹...",
    discountedPrice: "₹...",
    discount: "...",
    rating: 4.6,
    reviews: 156,
    inclusions: ['Hotel', 'All Meals', 'Jungle Safari', 'Transfers'],
    tag: "Trending"
  }
];

const NepalPackagesPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Helper to render inclusion icons
  const getInclusionIcon = (item) => {
    if (item.toLowerCase().includes('flight')) return <Plane size={16} />;
    if (item.toLowerCase().includes('bus') || item.toLowerCase().includes('transfer')) return <Bus size={16} />;
    if (item.toLowerCase().includes('hotel') || item.toLowerCase().includes('teahouse')) return <BedDouble size={16} />;
    if (item.toLowerCase().includes('meal') || item.toLowerCase().includes('breakfast')) return <Utensils size={16} />;
    return <Camera size={16} />;
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16 pt-10">
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter size={20} className="mr-2 text-orange-500" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* 1. Sidebar (Filters) */}
        <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-lg font-extrabold text-indigo-950 flex items-center">
                <Filter size={18} className="mr-2 text-orange-500" /> Filters
              </h2>
              <span className="text-sm text-orange-500 font-semibold cursor-pointer hover:underline">Reset All</span>
            </div>

            {/* Filter Group: Nepal Regions (Area Wise) */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Filter by Region</h3>
              <div className="space-y-2">
                {['Kathmandu Valley', 'Annapurna Region', 'Everest Region', 'Terai Region (Wildlife)', 'Lumbini (Pilgrimage)'].map((dest, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{dest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Duration */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
              <div className="space-y-2">
                {['1 - 3 Nights', '4 - 6 Nights', '7 - 10 Nights', '11+ Nights (Trekking)'].map((duration, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{duration}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Tour Style */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
              <div className="space-y-2">
                {['Leisure & Sightseeing', 'Trekking & Adventure', 'Wildlife Safari', 'Spiritual / Pilgrimage'].map((style, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{style}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* 2. Package Grid Area */}
        <div className="w-full lg:w-3/4">
          
          {/* Moved the Main Heading Here */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2">Nepal Tour Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl">
              Explore the majestic Himalayas. From the cultural heart of Kathmandu to the thrilling heights of Everest, find your perfect Nepal holiday.
            </p>
          </div>

          {/* Results Count & Sort Dropdown */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">Found {packagesData.length} Nepal Packages</h2>
            <select className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5 outline-none bg-white cursor-pointer shadow-sm">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Duration: Short to Long</option>
            </select>
          </div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packagesData.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
                    {pkg.discount}
                  </div>
                  {/* Tag Badge */}
                  <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {pkg.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Title & Rating */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors pr-2">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 mt-1">
                      {pkg.rating} <Star size={12} className="ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Area Badge */}
                  <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-1 rounded mb-3 self-start">
                    Region: {pkg.area}
                  </div>

                  {/* Destinations & Duration */}
                  <div className="text-sm text-gray-500 font-medium space-y-2 mb-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-orange-500 mr-2 shrink-0" />
                      <span className="truncate">{pkg.destinations}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="text-orange-500 mr-2 shrink-0" />
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Inclusions Row */}
                  <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Inclusions</p>
                    <div className="flex flex-wrap gap-4">
                      {pkg.inclusions.map((inclusion, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-gray-500">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">
                            {getInclusionIcon(inclusion)}
                          </div>
                          <span className="text-[10px] font-semibold text-center leading-tight w-12 truncate">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Buttons */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-semibold line-through mb-0.5">{pkg.originalPrice}</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-black text-indigo-950">{pkg.discountedPrice}</span>
                        <span className="text-xs text-gray-500 ml-1 font-medium">/ person</span>
                      </div>
                    </div>
                    <button className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-colors duration-300 shadow-lg shadow-orange-500/20 text-sm flex items-center">
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-white border-2 border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white px-8 py-3 rounded-full font-bold transition-colors duration-300">
              Load More Packages
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NepalPackagesPage;