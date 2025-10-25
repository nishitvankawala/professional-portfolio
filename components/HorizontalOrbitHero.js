"use client";
import { motion, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

const cards = [
  { id: "projects", title: "Projects", desc: "5 enterprise apps built with MERN", href: "/projects", icon: "🧩" },
  { id: "resume", title: "Resume", desc: "Download my resume", href: "/resume", icon: "📄" },
  { id: "skills", title: "Skills", desc: "React, Node.js, MongoDB...", href: "/skills", icon: "⚙️" },
  { id: "contact", title: "Contact", desc: "Let's connect", href: "/contact", icon: "✉️" },
];

export default function OrbitHero() {
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0); // store rotation offset when paused

  const radius = 180; // orbit radius
  const cardSize = { width: 256, height: 160 };

  useAnimationFrame((t) => {
    if (!paused) {
      setRotation((t / 10000) * 2 * Math.PI + offsetRef.current);
    }
  });

  const handleMouseEnter = () => {
    setPaused(true);
    offsetRef.current = rotation; // store current rotation
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-3xl font-bold">
          Hi, I'm <span className="text-accent">Nishit Vankawala</span>
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
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-angle}rad) scale(${scale})`,
                zIndex,
                opacity,
              }}
              whileHover={{ scale: scale * 1.05 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={card.href}>
                <div className="w-56 md:w-64 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg backdrop-blur cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{card.icon}</div>
                    <div>
                      <div className="font-semibold text-lg">{card.title}</div>
                      <div className="text-sm text-slate-300">{card.desc}</div>
                    </div>
                  </div>
                </div>
              </Link>
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
      <div className="text-center mt-6 md:mt-8">
        <a href="/projects" className="px-5 py-3 rounded-md bg-accent font-semibold">
          See Projects
        </a>
        <a href="/resume.pdf" className="px-5 py-3 rounded-md bg-white/5 border border-white/5 ml-3">
          Download Resume
        </a>
      </div>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030417] via-[#071029] to-[#0b1224] -z-10"></div>
    </section>
  );
}
