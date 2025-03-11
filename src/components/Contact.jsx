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
    }
  };

  return (
    <section id="contact" className="pt-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 max-w-lg mx-auto mb-10">
          Fill out the form below to send me a message. I'll get back to you as soon as possible!
        </p>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Message */}
            {message && (
              <p className={`text-center mt-4 font-medium ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className=" text-center py-6 mt-16">
        <p className="text-lg">&copy; {new Date().getFullYear()} Abdur Rahman. All rights reserved.</p>
      </footer>
    </section>
  );
}
