"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const cards = [
  { id: "projects", title: "Projects", desc: "5 enterprise apps built with MERN", href: "/projects", icon: "🧩" },
  { id: "resume", title: "Resume", desc: "Download my resume", href: "/resume", icon: "📄" },
  { id: "skills", title: "Skills", desc: "React, Node.js, MongoDB...", href: "/skills", icon: "⚙️" },
  { id: "contact", title: "Contact", desc: "Let's connect", href: "/contact", icon: "✉️" },
];

export default function OrbitHero() {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const radius = 180;
  const cardSize = { width: 256, height: 160 };

  useAnimationFrame((t, delta) => {
    if (!isHovering) {
      setRotation((prev) => prev + (delta / 10000) * 2 * Math.PI);
    }
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-3xl font-bold">
          Hi, I'm <span className="text-blue-400">Nishit Vankawala</span>
        </h1>
        <p className="text-slate-300 mt-2">
          Sr. Software Developer — SaaS, Cloud & Scalable Web Apps
        </p>
      </div>

      {/* Orbit container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: radius * 2 + cardSize.width,
          height: radius * 2 + cardSize.height,
          perspective: 1000,
          transform: "rotateX(15deg)",
        }}
      >
        {/* Glowing Ferris wheel circle */}
        <motion.div
          className="absolute rounded-full border border-blue-500/40 shadow-[0_0_60px_rgba(59,130,246,0.5)] pointer-events-none"
          style={{ width: radius * 2, height: radius * 2 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />

        {/* Orbit cards */}
        {cards.map((card, i) => {
          const baseAngle = (i / cards.length) * 2 * Math.PI;
          const angle = baseAngle + rotation;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const scale = 0.8 + 0.2 * ((y + radius) / (2 * radius));
          const opacity = 0.6 + 0.4 * ((y + radius) / (2 * radius));
          const zIndex = Math.round((y + radius) * 100);

          return (
            <motion.div
              key={card.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
                zIndex,
                opacity,
              }}
              animate={{
                x: x,
                y: y,
                scale: scale,
                rotate: -(angle * 180 / Math.PI),
              }}
              transition={{
                type: "tween",
                ease: "linear",
                duration: 0,
              }}
              whileHover={{ scale: scale * 1.05 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href={card.href}>
                <div className="w-56 md:w-64 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg backdrop-blur cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{card.icon}</div>
                    <div>
                      <div className="font-semibold text-lg">{card.title}</div>
                      <div className="text-sm text-slate-300">{card.desc}</div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          );
        })}

        {/* Central sphere */}
        <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#11366d] to-[#6a2bd9] shadow-[0_8px_40px_rgba(59,130,246,0.25)] flex items-center justify-center pointer-events-none">
          <div className="text-center text-white font-semibold">
            <div className="text-lg md:text-xl">Nishit</div>
            <div className="text-xs md:text-sm text-slate-200">MERN Stack Developer</div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-center mt-12 md:mt-16 flex gap-3 justify-center">
        <a 
          href="/projects" 
          className="group relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 inline-block"
        >
          <span className="relative z-10">See Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a 
          href="/resume.pdf" 
          className="group relative px-5 py-2.5 rounded-lg bg-white/5 border border-white/20 font-semibold text-white text-sm backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 inline-block"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>Download Resume</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </a>
      </div>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030417] via-[#071029] to-[#0b1224] -z-10"></div>
    </section>
  );
}