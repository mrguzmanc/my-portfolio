"use client";

import Image from "next/image";
import Button from "../base/Button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  useEffect(() => {
    // Switch to real photo after 3 seconds
    const timer = setTimeout(() => {
      setShowRealPhoto(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
          <motion.div 
            className="w-64 h-64 rounded-full ring-4 ring-purple-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 mx-auto overflow-hidden relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: showRealPhoto ? 0 : 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/avatar-ai.png"
                  alt="AI Generated Avatar"
                  fill
                  className="object-cover"
                  priority
                  sizes="100%"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: showRealPhoto ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/avatar.jpeg"
                  alt="Developer Avatar"
                  fill
                  className="object-cover"
                  priority
                  sizes="100%"
                />
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold m-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate about creating innovative web solutions that solve real-world problems. Specialized in modern
              JavaScript frameworks and cloud technologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none" href="/cv.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white" href="https://github.com/mrguzmanc">
                    <Github className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white" href="https://www.linkedin.com/in/marcos-r-guzman-c/">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white" href="mailto:marcosgc1806@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
} 