// import React, { useState } from "react";

// const ContactForm = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(event.target);
//     formData.append("access_key", "f95bf968-a6ca-4d1a-ad90-d372af9060d4"); // 🔑 add your key

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("✅ Message Sent Successfully!");
//       event.target.reset();
//     } else {
//       setResult("❌ Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Travel Booking Form ✈️
//         </h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           required
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           required
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           required
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="text"
//           name="destination"
//           placeholder="Destination (e.g. Manali, Goa)"
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="date"
//           name="travel_date"
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <textarea
//           name="message"
//           placeholder="Additional Message"
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         ></textarea>

//         {/* Hidden Fields */}
//         <input type="hidden" name="subject" value="New Travel Booking" />
//         <input
//           type="hidden"
//           name="redirect"
//           value="https://yourwebsite.com/thank-you"
//         />
//         <input
//           type="checkbox"
//           name="botcheck"
//           style={{ display: "none" }}
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Submit Booking
//         </button>

//         <p className="text-center mt-4 text-sm text-gray-600">{result}</p>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;