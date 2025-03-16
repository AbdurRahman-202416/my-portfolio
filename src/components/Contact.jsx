import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    // Create FormData object
    const formData = new FormData(event.target);
    formData.append("access_key", "53b38d76-ef06-43ab-86d4-34cc8a168115"); // Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Message sent successfully! ✅");
        event.target.reset(); // Clear the form after successful submission
      } else {
        setMessage("Something went wrong. Please try again ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting the form ❌");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage(""); // Clear the message after 5 seconds
      }, 5000);
    }
  };

  return (
    <section id="contact" className="pt-6 pb-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Let's Connect 🤝</h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Feel free to drop a message! I'll try my best to respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium">Your Message</label>
              <textarea
                name="message"
                placeholder="Type your message..."
                rows="5"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Message */}
            {message && (
              <p
                className={`text-center mt-4 font-medium ${message.includes("successfully") ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-gray-600 text-sm  mt-10">
        &copy; {new Date().getFullYear()} <span className="font-semibold">Abdur Rahman</span>. All rights reserved.
      </footer>
    </section>
  );
}
