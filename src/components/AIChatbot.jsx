// import React, { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

// // IMPORTANT: Use environment variables for your API key in production!
// const API_KEY = 'YOUR_API_KEY_HERE'; 

// const AIChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: 'bot', text: 'Namaste! 🙏 Welcome to Nepal Tours & Travels. I am your virtual travel assistant. Are you looking for tour packages, trekking routes, or sightseeing information today?' }
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [useAI, setUseAI] = useState(true);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // --- COMPREHENSIVE FALLBACK KNOWLEDGE BASE ---
//   const getFallbackResponse = (msg) => {
//     const lower = msg.toLowerCase();
    
//     if (lower.match(/^(hi|hello|hey|namaste)₹/)) {
//       return 'Hello there! 👋 I can assist you with detailed information about:\n\n🎒 All Nepal Tour Packages\n🛕 Kathmandu & Pokhara Sightseeing\n🥾 Detailed Trekking Routes\n📅 Best Time to Visit\n✈️ Visa Information\n💰 Detailed Package Costs\n\nWhat would you like to explore?';
//     }
    
//     if (lower.includes('package') || lower.includes('tour')) return '🎒 **Our Complete Nepal Tour Packages:**\n\n1. **Best of Nepal (8 Days):** Covers Kathmandu, Pokhara, and Chitwan Wildlife Safari.\n2. **Cultural Kathmandu & Scenic Pokhara (5 Days):** Perfect short getaway focusing on heritage and lakes.\n3. **Muktinath Yatra (6 Days):** A spiritual journey starting from Gorakhpur/Kathmandu to the sacred Muktinath temple.\n4. **Chitwan Wildlife Safari (3 Days):** Elephant/Jeep safari, jungle walk, and Tharu culture.\n5. **Lumbini Pilgrimage (3 Days):** Visit the birthplace of Lord Buddha.\n\nLet me know if you want the itinerary for any specific package!';
    
//     if (lower.includes('sightseeing') || lower.includes('kathmandu') || lower.includes('pokhara')) return '🛕 **Kathmandu Sightseeing:**\n• **Pashupatinath Temple:** Sacred Hindu temple on the Bagmati River.\n• **Boudhanath Stupa:** Massive mandala and center of Tibetan Buddhism.\n• **Swayambhunath:** The famous Monkey Temple offering city views.\n• **Durbar Squares:** Ancient royal palaces in Kathmandu, Patan, and Bhaktapur.\n\n🏞️ **Pokhara Sightseeing:**\n• **Phewa Lake:** Boating and the island Tal Barahi Temple.\n• **Sarangkot:** Unbeatable sunrise views over the Annapurna range.\n• **Davis Falls & Gupteshwor Cave:** Stunning waterfall and underground Shiva shrine.\n• **World Peace Pagoda:** A beautiful white stupa on a hill overlooking the lake.';
    
//     if (lower.includes('trek') || lower.includes('hiking')) return '🥾 **Detailed Trekking Information:**\n\n1. **Everest Base Camp (EBC):** (12-14 Days) Reaches 5,364m. Experience Sherpa culture and stand at the foot of the world\'s highest peak.\n2. **Annapurna Base Camp (ABC):** (7-10 Days) Reaches 4,130m. Walk into a spectacular mountain amphitheater.\n3. **Ghorepani Poon Hill:** (3-5 Days) Max altitude 3,210m. Best short trek for beginners with incredible sunrise views.\n4. **Langtang Valley:** (7-9 Days) Known as the "Valley of Glaciers", offering rich Tamang culture near Kathmandu.\n\n*Note: All treks require TIMS and National Park permits.*';
    
//     if (lower.includes('best time') || lower.includes('when') || lower.includes('season')) return '📅 **Best Time to Visit Nepal:**\n\n🍂 **Autumn (Sept - Nov):** PEAK SEASON. Crystal clear skies, pleasant weather, perfect for trekking and sightseeing.\n🌸 **Spring (Mar - May):** SECOND BEST. Warm weather, blooming rhododendrons, great mountain visibility.\n❄️ **Winter (Dec - Feb):** Cold, especially in the mountains. Good for lower altitude cultural tours like Kathmandu and Chitwan.\n🌧️ **Monsoon (June - Aug):** Heavy rain and cloudy. Not recommended for trekking, but great for viewing lush green landscapes.';
    
//     if (lower.includes('visa')) return '✈️ **Nepal Visa Information:**\n\n• **On Arrival:** Available at Tribhuvan International Airport (Kathmandu) and land borders for most nationalities.\n• **Tourist Visa Fees:** 15 Days (₹30) | 30 Days (₹50) | 90 Days (₹125). Must be paid in cash (USD/EUR preferred).\n• **Requirements:** Valid passport (at least 6 months validity) and a passport-sized photo.\n• **Indian Nationals:** NO VISA REQUIRED. Just a valid Indian Passport or Voter ID card is sufficient.';
    
//     if (lower.includes('price') || lower.includes('cost') || lower.includes('budget')) return '💰 **Detailed Package Costs (Approximate):**\n\n• **Standard Cultural Tours (5-8 days):** ₹400 - ₹800 per person.\n• **Trekking Packages (7-14 days):** ₹800 - ₹1,500 per person (Includes guide, permits, teahouse accommodation, and meals).\n• **Daily Budget for Backpackers:** ₹30 - ₹50/day.\n• **Mid-range Budget:** ₹70 - ₹120/day.\n• **Luxury Budget:** ₹200+/day.\n\n*Add-ons:* Guide (₹25-₹30/day), Porter (₹20/day), Everest Flight (200).\nFor exact quotes, please contact us!';
    
//     if (lower.includes('contact') || lower.includes('book')) return '📞 **Ready to book or need a custom itinerary?**\n\n☎️ Phone: +91 9918001088\n📧 Email: info@nepaltours.com\n💬 WhatsApp: +91 9918001088\n🌐 Website: https://nepaltoursandtravels.in/ \n\nOur travel experts are available 24/7 to plan your dream trip!';
    
//     return '🙏 I am your virtual assistant. I have detailed information on:\n\n🎒 Tour Packages\n🛕 Kathmandu & Pokhara Sightseeing\n🥾 Trekking Details\n📅 Best Time to Visit\n✈️ Visa Information\n💰 Package Costs\n\nPlease ask me about any of these topics, or type "contact" to speak with a human agent.';
//   };

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     const userMessage = input.trim();
//     setInput('');
//     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
//     setLoading(true);

//     if (useAI) {
//       try {
//         const response = await fetch(
//           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
//           {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               contents: [{
//                 parts: [{
//                   text: `You are a professional travel assistant for "Nepal Tours and Travels". Always reply in English. Provide detailed, helpful, and concise answers using bullet points and emojis.

// USE THIS COMPREHENSIVE BUSINESS DATA:

// 1. ALL TOUR PACKAGES:
// - Best of Nepal (8 Days): Kathmandu, Pokhara, Chitwan Safari.
// - Cultural Kathmandu & Scenic Pokhara (5 Days).
// - Muktinath Yatra (6 Days): Spiritual journey from Gorakhpur/Kathmandu.
// - Chitwan Wildlife Safari (3 Days): Elephant/Jeep safari, Tharu culture.
// - Lumbini Pilgrimage (3 Days): Birthplace of Lord Buddha.

// 2. KATHMANDU & POKHARA SIGHTSEEING:
// - Kathmandu: Pashupatinath Temple (Hindu shrine), Boudhanath Stupa (Tibetan Buddhism), Swayambhunath (Monkey Temple), Patan & Bhaktapur Durbar Squares (Ancient palaces).
// - Pokhara: Phewa Lake (Boating & Tal Barahi), Sarangkot (Himalayan Sunrise), Davis Falls, Gupteshwor Cave, World Peace Pagoda.

// 3. TREKKING DETAILS:
// - Everest Base Camp (EBC): 12-14 Days, 5364m altitude, iconic views, Sherpa culture.
// - Annapurna Base Camp (ABC): 7-10 Days, 4130m altitude, mountain amphitheater.
// - Ghorepani Poon Hill: 3-5 Days, 3210m altitude, great for beginners, sunrise views.
// - Langtang Valley: 7-9 Days, Valley of Glaciers, close to Kathmandu.

// 4. BEST TIME TO VISIT:
// - Autumn (Sept-Nov): PEAK SEASON. Clear skies, ideal for trekking.
// - Spring (Mar-May): Warm, blooming rhododendrons, great visibility.
// - Winter (Dec-Feb): Cold. Good for cultural tours at low altitudes.
// - Monsoon (Jun-Aug): Heavy rain. Not for trekking, but lush landscapes.

// 5. VISA INFO:
// - On Arrival available at Kathmandu Airport and land borders.
// - Costs: 15 Days (₹30), 30 Days (₹50), 90 Days (₹125). Paid in cash.
// - Requirements: Passport (6 months validity), passport photo.
// - Indian Nationals: NO VISA REQUIRED (Need Voter ID or Passport).

// 6. PACKAGE COSTS:
// - Cultural Tours: ₹400 - ₹800 per person.
// - Trekking Packages: ₹800 - ₹1,500 per person (includes guide, permits, meals, tea-houses).
// - Daily Budget: Budget (₹30-₹50), Mid-range (₹70-₹120), Luxury ($200+).
// - Staff: Guide (₹25-₹30/day), Porter (₹20/day).

// 7. CONTACT:
// Phone/WhatsApp: +91 9918001088. Email: info@nepaltours.com.

// User question: "${userMessage}"`
//                 }]
//               }]
//             })
//           }
//         );

//         const data = await response.json();
        
//         if (data.candidates && data.candidates[0]) {
//           const text = data.candidates[0].content.parts[0].text;
//           setMessages(prev => [...prev, { role: 'bot', text }]);
//         } else {
//           throw new Error('API failed');
//         }
//       } catch (error) {
//         console.error('AI failed, using fallback');
//         setUseAI(false); // Switch to fallback mode permanently if API fails
//         const fallbackText = getFallbackResponse(userMessage);
//         setMessages(prev => [...prev, { role: 'bot', text: fallbackText }]);
//       }
//     } else {
//       setTimeout(() => {
//         const fallbackText = getFallbackResponse(userMessage);
//         setMessages(prev => [...prev, { role: 'bot', text: fallbackText }]);
//       }, 500);
//     }
    
//     setLoading(false);
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-all hover:scale-110"
//           aria-label="Open AI Chat"
//         >
//           <MessageCircle size={28} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-[350px] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
//           {/* Header */}
//           <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <div className="bg-white text-blue-600 p-1.5 rounded-full">
//                 <MessageCircle size={20} />
//               </div>
//               <div>
//                 <h3 className="font-bold text-sm">Nepal Travel AI</h3>
//                 <p className="text-[10px] text-blue-100 flex items-center gap-1">
//                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
//                 </p>
//               </div>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="text-blue-100 hover:text-white transition-colors">
//               <X size={20} />
//             </button>
//           </div>

//           {/* Message Area */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[90%] p-3 text-sm rounded-2xl shadow-sm ${
//                   msg.role === 'user' 
//                     ? 'bg-blue-600 text-white rounded-tr-none' 
//                     : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
//                 }`}>
//                   <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
//                 </div>
//               </div>
//             ))}
            
//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
//                   <Loader2 size={18} className="animate-spin text-blue-600" />
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 bg-white border-t border-gray-100">
//             <div className="flex gap-2 bg-gray-50 border border-gray-200 rounded-full p-1 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                 placeholder="Ask about packages, trekking, visa..."
//                 className="flex-1 px-4 py-2 bg-transparent text-sm outline-none text-gray-700"
//                 disabled={loading}
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={loading || !input.trim()}
//                 className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shrink-0"
//               >
//                 <Send size={16} className="ml-1" />
//               </button>
//             </div>
//           </div>
          
//         </div>
//       )}
//     </>
//   );
// };

// export default AIChatbot;























import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

// IMPORTANT: Use environment variables for your API key in production!
const API_KEY = 'YOUR_API_KEY_HERE'; 

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! 🙏 Welcome to Nepal Tours & Travels. I am your virtual travel assistant. Are you looking for tour packages, trekking routes, or sightseeing information today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- COMPREHENSIVE FALLBACK KNOWLEDGE BASE ---
  const getFallbackResponse = (msg) => {
    const lower = msg.toLowerCase();
    
    if (lower.match(/^(hi|hello|hey|namaste)₹/)) {
      return 'Hello there! 👋 I can assist you with detailed information about:\n\n🎒 All Nepal Tour Packages\n🛕 Kathmandu & Pokhara Sightseeing\n🥾 Detailed Trekking Routes\n📅 Best Time to Visit\n✈️ Visa Information\n💰 Detailed Package Costs\n\nWhat would you like to explore?';
    }
    
    if (lower.includes('gorakhpur')) {
      return '🚆 **Gorakhpur to Kathmandu Tour (5 Days / 4 Nights)**\n\n📍 **Locations:** Gorakhpur & Kathmandu\n✅ **Inclusions:** Flight, Hotel, All Meals, Sightseeing, Transfer, and Guide.\n\nWould you like to know the pricing or book this package?';
    }

    if (lower.includes('package') || lower.includes('tour')) return '🎒 **Our Complete Nepal Tour Packages:**\n\n1. **Gorakhpur to Kathmandu Tour (5D/4N):** Locations: Gorakhpur & Kathmandu. Inclusions: Flight, Hotel, All Meals, Sightseeing, Transfers, & Guide.\n2. **Best of Nepal (8 Days):** Covers Kathmandu, Pokhara, and Chitwan Wildlife Safari.\n3. **Cultural Kathmandu & Scenic Pokhara (5 Days):** Perfect short getaway focusing on heritage and lakes.\n4. **Muktinath Yatra (6 Days):** A spiritual journey starting from Gorakhpur/Kathmandu to the sacred Muktinath temple.\n5. **Chitwan Wildlife Safari (3 Days):** Elephant/Jeep safari, jungle walk, and Tharu culture.\n\nLet me know if you want the itinerary for any specific package!';
    
    if (lower.includes('sightseeing') || lower.includes('kathmandu') || lower.includes('pokhara')) return '🛕 **Kathmandu Sightseeing:**\n• **Pashupatinath Temple:** Sacred Hindu temple on the Bagmati River.\n• **Boudhanath Stupa:** Massive mandala and center of Tibetan Buddhism.\n• **Swayambhunath:** The famous Monkey Temple offering city views.\n• **Durbar Squares:** Ancient royal palaces in Kathmandu, Patan, and Bhaktapur.\n\n🏞️ **Pokhara Sightseeing:**\n• **Phewa Lake:** Boating and the island Tal Barahi Temple.\n• **Sarangkot:** Unbeatable sunrise views over the Annapurna range.\n• **Davis Falls & Gupteshwor Cave:** Stunning waterfall and underground Shiva shrine.\n• **World Peace Pagoda:** A beautiful white stupa on a hill overlooking the lake.';
    
    if (lower.includes('trek') || lower.includes('hiking')) return '🥾 **Detailed Trekking Information:**\n\n1. **Everest Base Camp (EBC):** (12-14 Days) Reaches 5,364m. Experience Sherpa culture and stand at the foot of the world\'s highest peak.\n2. **Annapurna Base Camp (ABC):** (7-10 Days) Reaches 4,130m. Walk into a spectacular mountain amphitheater.\n3. **Ghorepani Poon Hill:** (3-5 Days) Max altitude 3,210m. Best short trek for beginners with incredible sunrise views.\n4. **Langtang Valley:** (7-9 Days) Known as the "Valley of Glaciers", offering rich Tamang culture near Kathmandu.\n\n*Note: All treks require TIMS and National Park permits.*';
    
    if (lower.includes('best time') || lower.includes('when') || lower.includes('season')) return '📅 **Best Time to Visit Nepal:**\n\n🍂 **Autumn (Sept - Nov):** PEAK SEASON. Crystal clear skies, pleasant weather, perfect for trekking and sightseeing.\n🌸 **Spring (Mar - May):** SECOND BEST. Warm weather, blooming rhododendrons, great mountain visibility.\n❄️ **Winter (Dec - Feb):** Cold, especially in the mountains. Good for lower altitude cultural tours like Kathmandu and Chitwan.\n🌧️ **Monsoon (June - Aug):** Heavy rain and cloudy. Not recommended for trekking, but great for viewing lush green landscapes.';
    
    if (lower.includes('visa')) return '✈️ **Nepal Visa Information:**\n\n• **On Arrival:** Available at Tribhuvan International Airport (Kathmandu) and land borders for most nationalities.\n• **Tourist Visa Fees:** 15 Days (₹30) | 30 Days (₹50) | 90 Days (₹125). Must be paid in cash (USD/EUR preferred).\n• **Requirements:** Valid passport (at least 6 months validity) and a passport-sized photo.\n• **Indian Nationals:** NO VISA REQUIRED. Just a valid Indian Passport or Voter ID card is sufficient.';
    
    if (lower.includes('price') || lower.includes('cost') || lower.includes('budget')) return '💰 **Detailed Package Costs (Approximate):**\n\n• **Standard Cultural Tours (5-8 days):** ₹400 - ₹800 per person.\n• **Trekking Packages (7-14 days):** ₹800 - ₹1,500 per person (Includes guide, permits, teahouse accommodation, and meals).\n• **Daily Budget for Backpackers:** ₹30 - ₹50/day.\n• **Mid-range Budget:** ₹70 - ₹120/day.\n• **Luxury Budget:** ₹200+/day.\n\n*Add-ons:* Guide (₹25-₹30/day), Porter (₹20/day), Everest Flight (200).\nFor exact quotes, please contact us!';
    
    if (lower.includes('contact') || lower.includes('book')) return '📞 **Ready to book or need a custom itinerary?**\n\n☎️ Phone: +91 9918001088\n📧 Email: info@nepaltours.com\n💬 WhatsApp: +91 9918001088\n🌐 Website: https://nepaltoursandtravels.in/ \n\nOur travel experts are available 24/7 to plan your dream trip!';
    
    return '🙏 I am your virtual assistant. I have detailed information on:\n\n🎒 Tour Packages\n🛕 Kathmandu & Pokhara Sightseeing\n🥾 Trekking Details\n📅 Best Time to Visit\n✈️ Visa Information\n💰 Package Costs\n\nPlease ask me about any of these topics, or type "contact" to speak with a human agent.';
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    if (useAI) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `You are a professional travel assistant for "Nepal Tours and Travels". Always reply in English. Provide detailed, helpful, and concise answers using bullet points and emojis.

USE THIS COMPREHENSIVE BUSINESS DATA:

1. ALL TOUR PACKAGES:
- Gorakhpur to Kathmandu Tour (5 Days/4 Nights): Locations include Gorakhpur and Kathmandu. Inclusions: Flight, Hotel, All Meals, Sightseeing, Transfer, Guide.
- Best of Nepal (8 Days): Kathmandu, Pokhara, Chitwan Safari.
- Cultural Kathmandu & Scenic Pokhara (5 Days).
- Muktinath Yatra (6 Days): Spiritual journey from Gorakhpur/Kathmandu.
- Chitwan Wildlife Safari (3 Days): Elephant/Jeep safari, Tharu culture.
- Lumbini Pilgrimage (3 Days): Birthplace of Lord Buddha.

2. KATHMANDU & POKHARA SIGHTSEEING:
- Kathmandu: Pashupatinath Temple (Hindu shrine), Boudhanath Stupa (Tibetan Buddhism), Swayambhunath (Monkey Temple), Patan & Bhaktapur Durbar Squares (Ancient palaces).
- Pokhara: Phewa Lake (Boating & Tal Barahi), Sarangkot (Himalayan Sunrise), Davis Falls, Gupteshwor Cave, World Peace Pagoda.

3. TREKKING DETAILS:
- Everest Base Camp (EBC): 12-14 Days, 5364m altitude, iconic views, Sherpa culture.
- Annapurna Base Camp (ABC): 7-10 Days, 4130m altitude, mountain amphitheater.
- Ghorepani Poon Hill: 3-5 Days, 3210m altitude, great for beginners, sunrise views.
- Langtang Valley: 7-9 Days, Valley of Glaciers, close to Kathmandu.

4. BEST TIME TO VISIT:
- Autumn (Sept-Nov): PEAK SEASON. Clear skies, ideal for trekking.
- Spring (Mar-May): Warm, blooming rhododendrons, great visibility.
- Winter (Dec-Feb): Cold. Good for cultural tours at low altitudes.
- Monsoon (Jun-Aug): Heavy rain. Not for trekking, but lush landscapes.

5. VISA INFO:
- On Arrival available at Kathmandu Airport and land borders.
- Costs: 15 Days (₹30), 30 Days (₹50), 90 Days (₹125). Paid in cash.
- Requirements: Passport (6 months validity), passport photo.
- Indian Nationals: NO VISA REQUIRED (Need Voter ID or Passport).

6. PACKAGE COSTS:
- Cultural Tours: ₹400 - ₹800 per person.
- Trekking Packages: ₹800 - ₹1,500 per person (includes guide, permits, meals, tea-houses).
- Daily Budget: Budget (₹30-₹50), Mid-range (₹70-₹120), Luxury ($200+).
- Staff: Guide (₹25-₹30/day), Porter (₹20/day).

7. CONTACT:
Phone/WhatsApp: +91 9918001088. Email: info@nepaltours.com.

User question: "${userMessage}"`
                }]
              }]
            })
          }
        );

        const data = await response.json();
        
        if (data.candidates && data.candidates[0]) {
          const text = data.candidates[0].content.parts[0].text;
          setMessages(prev => [...prev, { role: 'bot', text }]);
        } else {
          throw new Error('API failed');
        }
      } catch (error) {
        console.error('AI failed, using fallback');
        setUseAI(false); // Switch to fallback mode permanently if API fails
        const fallbackText = getFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'bot', text: fallbackText }]);
      }
    } else {
      setTimeout(() => {
        const fallbackText = getFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'bot', text: fallbackText }]);
      }, 500);
    }
    
    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-all hover:scale-110"
          aria-label="Open AI Chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white text-blue-600 p-1.5 rounded-full">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Nepal Travel AI</h3>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-blue-100 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 text-sm rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                  <Loader2 size={18} className="animate-spin text-blue-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2 bg-gray-50 border border-gray-200 rounded-full p-1 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about packages, trekking, visa..."
                className="flex-1 px-4 py-2 bg-transparent text-sm outline-none text-gray-700"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shrink-0"
              >
                <Send size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default AIChatbot;