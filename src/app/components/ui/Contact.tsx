"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formsubmit.co/marcosgc1806@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });
  
      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div 
        ref={ref}
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 font-mono">Let&apos;s connect</h2>
        <p className="max-w-2xl mx-auto text-lg text-purple-300 font-mono">
          Want to collaborate? Initialize connection...
        </p>
      </motion.div>

      <motion.div 
        className="w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-black border-2 border-purple-400 rounded-lg p-6 shadow-2xl shadow-purple-400/20">
          {/* Terminal Header */}
          <div className="flex items-center mb-4 pb-3 border-b border-purple-400/30">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-purple-400 font-mono text-sm">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-purple-400">
            {submitStatus === "success" ? (
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-purple-400">
                  <span className="text-pink-500">guest@portfolio:~$</span> send_message --status
                </div>
                <div className="text-purple-300 mt-2">
                  ✓ Message transmitted successfully!
                </div>
                <div className="text-purple-300">
                  ✓ Connection established with marcos
                </div>
              </motion.div>
            ) : submitStatus === "error" ? (
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-red-400">
                  <span className="text-pink-500">guest@portfolio:~$</span> send_message --status
                </div>
                <div className="text-red-400 mt-2">
                  ✗ Error: Connection failed. Please try again.
                </div>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-pink-500">guest@portfolio:~$</span>
                  <span className="ml-2 text-purple-400">enter_name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-purple-400 border border-purple-400/30 rounded px-3 py-2 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 font-mono placeholder-purple-400/50"
                  placeholder="Enter your name..."
                />
              </div>

              {/* Email Field */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-pink-500">guest@portfolio:~$</span>
                  <span className="ml-2 text-purple-400">enter_email</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-purple-400 border border-purple-400/30 rounded px-3 py-2 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 font-mono placeholder-purple-400/50"
                  placeholder="your.email@domain.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-pink-500">guest@portfolio:~$</span>
                  <span className="ml-2 text-purple-400">compose_message</span>
                </div>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-purple-400 border border-purple-400/30 rounded px-3 py-2 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 font-mono h-24 resize-none placeholder-purple-400/50"
                  placeholder="Type your message here..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <div className="flex items-center mb-2">
                  <span className="text-pink-500">guest@portfolio:~$</span>
                  <span className="ml-2 text-purple-400">./send_message.sh</span>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-mono px-6 py-2 rounded border border-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? "Transmitting..." : "Execute"}
                </motion.button>
              </div>
            </form>

            {/* Terminal Cursor */}
            <motion.div 
              className="mt-4 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-pink-500">guest@portfolio:~$</span>
              <motion.span
                className="ml-2 w-2 h-5 bg-purple-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 