
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or an email service like EmailJS
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Us - Nepal Tours" 
            className="w-full h-full object-cover"
          />
        
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
            Have questions about a tour package? We are here to help you plan your perfect Himalayan adventure.
          </p>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT AREA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT: Contact Information (Takes up 1 column on desktop) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h4 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Contact Info</h4>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">We'd Love to Hear From You</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us via phone, email, or visit our offices in Gorakhpur or Kathmandu.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* India Office */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Head Office (India)</h3>
                  <p className="text-sm text-gray-600">Opp. Gate No. -1, Railway Station, Gorakhpur (U.P) - 273001</p>
                </div>
              </div>

              {/* Nepal Office */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Branch Office (Nepal)</h3>
                  <p className="text-sm text-gray-600">9 Buddha Marg, Kathmandu, Nepal</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone Numbers</h3>
                  <p className="text-sm text-gray-600">🇮🇳 +91 85760 00084 / 83</p>
                  <p className="text-sm text-gray-600">🇳🇵 +977 98101 98000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                  <a href="mailto:info@nepaltoursandtravels.com" className="text-sm text-orange-500 hover:text-orange-600 break-all">
                    info@nepaltoursandtravels.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (Takes up 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-700"
                    >
                      <option value="">Select a subject...</option>
                      <option value="Tour Package Inquiry">Tour Package Inquiry</option>
                      <option value="Custom Itinerary">Custom Itinerary</option>
                      <option value="Flight/Hotel Booking">Flight/Hotel Booking</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message 
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. MAP SECTION --- */}
      <section className="w-full h-[400px] bg-gray-200 relative">
        <iframe 

          src="https://maps.google.com/maps?q=Gorakhpur%20Railway%20Station,%20Gorakhpur,%20UP,%20273001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Gorakhpur Office Map"
          className="absolute inset-0"
        ></iframe>
      </section>

    </div>
  );
};

export default ContactUs;