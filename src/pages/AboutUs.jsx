import React from 'react';
import { Shield, Map, Users, Award, PhoneCall, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {




    const navigate =useNavigate()
  return (
    // Main container has overflow-hidden to prevent body scrolling
    <div className="font-sans text-gray-800 bg-white overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Nepal Mountains" 
            className="w-full h-full object-cover"
          />
          {/* Black overlay */}
        
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            About <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow">
            Discover the heart of the Himalayas with Nepal's most trusted travel agency.
          </p>
        </div>
      </section>

      {/* --- 2. OUR STORY SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          {/* Added pr-4 on mobile to give the badge room to breathe without causing overflow */}
          <div className="relative px-2 pr-6 md:px-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Trekking" 
              className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover relative z-0"
            />
            {/* FIX: Changed mobile positioning from right-2 to right-0 and translated it slightly, keeping it inside the padding. Desktop remains -right-10. */}
            <div className="absolute -bottom-6 right-0 md:-right-10 bg-orange-500 text-white p-4 md:p-6 rounded-xl shadow-2xl flex flex-col items-center justify-center border-4 border-white z-10 translate-x-[10%] md:translate-x-0">
              <span className="text-3xl md:text-4xl font-black">36+</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-center">Years<br/>Experience</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="mt-12 md:mt-0 md:pl-8">
            <h4 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              We Make Your Travel Dreams A Reality
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed text-lg text-justify md:text-left">
              At <strong>Nepal Tours and Travels</strong>, we believe that traveling is not just about visiting new places, but about creating lifelong memories. Founded with a passion for the Himalayas, we have been guiding travelers through the majestic landscapes of Nepal, Bhutan, and beyond for over a decade.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-justify md:text-left">
              Whether you are looking for a peaceful spiritual journey to Muktinath, a thrilling trek to Everest Base Camp, or a relaxing holiday in Pokhara, our expert team ensures your journey is safe, comfortable, and unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button   onClick={()=>{navigate("/nepalallpackages")}} className="bg-blue-600 cursor-pointer   hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all flex items-center justify-center w-full sm:w-auto">
                Our Packages <ArrowRight size={18} className="ml-2 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE US SECTION --- */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Travel With Nepal Tours?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Map size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Highly trained local guides who know every trail, story, and secret of the mountains.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Travel</h3>
              <p className="text-gray-600 text-sm">Your safety is our priority. We use well-maintained vehicles and follow strict safety protocols.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600 text-sm">Premium experiences without hidden costs. We guarantee the best value for your money.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Happy Clients</h3>
              <p className="text-gray-600 text-sm">Over 10,000+ satisfied travelers from India, Nepal, and across the globe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CTA SECTION --- */}
      <section className="bg-indigo-950 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Contact us today to customize your Nepal holiday package and get a free quote!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919918001088" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center justify-center">
              <PhoneCall size={20} className="mr-2 shrink-0" /> +91 99180 01088
            </a>
            <button onClick={()=>{navigate("/contact")}}  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-indigo-950 font-bold py-4 px-8 rounded-full shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;