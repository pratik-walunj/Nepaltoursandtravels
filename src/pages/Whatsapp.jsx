


















import React from 'react';
import { Phone } from 'lucide-react'; // Phone icon import kiya hai

const ContactButtons = () => {
    const whatsappNumber = "919918001088"; // WhatsApp ke liye (bina '+' ke)
    const callNumber = "+919918001088"; // Call ke liye ('+' ke sath)

    const message = "नमस्ते!\nNepal Tours and Travels में आपका स्वागत है। \n\nहम आपकी कैसे मदद कर सकते हैं? हमारे टूर पैकेजेस के बारे में अधिक जानने के लिए आप हमारी वेबसाइट देख सकते हैं:\nविजिट करें: https://nepaltoursandtravels.in/\n\nहम जल्द ही आपसे बात करेंगे! \nआपका दिन शुभ हो।\nहमसे संपर्क करने के लिए धन्यवाद!";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
       
        <div className="fixed bottom-24 right-6 flex flex-col gap-4 z-[60]">
            
            {/* --- CALL BUTTON --- */}
            <a
                href={`tel:${callNumber}`}
                aria-label="Call Us"
              
                className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-[0_10px_20px_rgba(59,130,246,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_15px_25px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
                <Phone size={24} fill="currentColor" />
            </a>

            {/* --- WHATSAPP BUTTON --- */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_15px_25px_rgba(37,211,102,0.5)] transition-all duration-300"
            >
                <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.914c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.947-5.386 11.945-11.918a11.813 11.813 0 0 0-3.53-8.401" />
                </svg>
            </a>
        </div>
    );
};

export default ContactButtons;