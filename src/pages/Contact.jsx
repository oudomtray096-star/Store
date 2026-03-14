import React, { useState } from "react";

const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BOT_TOKEN = "8493172164:AAEnQZXbJPGLjuEBvjzu4nlcmMeu1FdlZVQ";
    const CHAT_ID = "6916806419";

    const text = `
📩 New Message From Website

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        alert("Message sent to Telegram ✅");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }

    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Have questions about our anime figures? Feel free to contact us anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <p className="text-gray-600 mb-4">
              We are happy to help anime collectors and fans. If you have any
              questions about products, orders, or recommendations, send us a message.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>📍 Location: Phnom Penh, Cambodia</p>
              <p>📧 Email: animefigurestore@gmail.com</p>
              <p>📞 Phone: +855 12 345 678</p>
              <p>🕒 Open: Monday - Sunday</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow space-y-4"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;