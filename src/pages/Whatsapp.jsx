// import React from 'react';

// const WhatsAppButton = () => {
//   // FIX 1: Sirf numbers hone chahiye, koi '+' ya space nahi.
//   const phoneNumber = "919918001088"; 

//   // FIX 2: Ye message automatically type ho jayega jab user WhatsApp open karega
//   const message = "Hello! I want to know more about the tour packages.";

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       // FIX 3: 'top-146' ko hata diya hai taaki button hamesha bottom-right me fixed rahe
//       className="fixed bottom-6 right-6  top-146 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_15px_25px_rgba(37,211,102,0.5)] transition-all duration-300 z-50"
//     >
//       {/* Official WhatsApp SVG Icon */}
//       <svg 
//         className="w-8 h-8 fill-current" 
//         viewBox="0 0 24 24" 
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401"/>
//       </svg>
//     </a>
//   );
// };

// export default WhatsAppButton;













// import React from 'react';

// const WhatsAppButton = () => {
//   const phoneNumber = "919918001088"; 

//   // Multiline message ke liye backticks (`) ka use kiya gaya hai
//   // Aap yahan apni company ka naam aur link change kar sakte hain
//   const message = `नमस्ते! 😊
// Nepal Tours and Travels में आपका स्वागत है। 

// हम आपकी कैसे मदद कर सकते हैं? हमारे टूर पैकेजेस के बारे में अधिक जानने के लिए आप हमारी वेबसाइट देख सकते हैं:
// 🌐 विजिट करें: https://nepaltoursandtravels.in/

// हम जल्द ही आपसे बात करेंगे!
// आपका दिन शुभ हो।  
// हमसे संपर्क करने के लिए धन्यवाद! `;

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       // FIX: 'top-146' ko permanently hata diya gaya hai
//       className="fixed bottom-6 right-6 top-146 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_15px_25px_rgba(37,211,102,0.5)] transition-all duration-300 z-50"
//     >
//       {/* Official WhatsApp SVG Icon */}
//       <svg 
//         className="w-8 h-8 fill-current" 
//         viewBox="0 0 24 24" 
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401"/>
//       </svg>
//     </a>
//   );
// };

// export default WhatsAppButton;






















import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "919918001088";

    const message = "नमस्ते!\nNepal Tours and Travels में आपका स्वागत है। \n\nहम आपकी कैसे मदद कर सकते हैं? हमारे टूर पैकेजेस के बारे में अधिक जानने के लिए आप हमारी वेबसाइट देख सकते हैं:\nविजिट करें: https://nepaltoursandtravels.in/\n\nहम जल्द ही आपसे बात करेंगे! \nआपका दिन शुभ हो।\nहमसे संपर्क करने के लिए धन्यवाद!";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            // CHANGED: 'right-4' -> 'left-4' and 'md:right-6' -> 'md:left-6'
            className="fixed bottom-7 left-4 md:bottom-7 md:left-6 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_15px_25px_rgba(37,211,102,0.5)] transition-all duration-300 z-[60]"
        >
            {/* Official WhatsApp SVG Icon */}
            <svg
                className="w-7 h-7 md:w-8 md:h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;