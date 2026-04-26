import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // simple validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  // submit (frontend only for now)
  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        user_name: form.name,
        user_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  }

  setLoading(false);
};

  return (
    <section id="contact" className="bg-[#020617] text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Let’s build something amazing together
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg space-y-6"
        >

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-medium transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
        </motion.form>

        {/* Quick Contact Links */}
        <div className="mt-10 text-center text-gray-400">
          <p>Email: <span className="text-white">natasha.chander2002@gmail.com</span></p>
          <p className="mt-2">
            GitHub:{" "}
            <a
              href="https://github.com/Natasha18-18"
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              Natasha18-18
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;