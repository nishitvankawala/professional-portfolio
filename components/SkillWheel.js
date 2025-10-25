import { motion } from 'framer-motion'

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '⬢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
]

export default function SkillWheel() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }} className="absolute inset-0">
        {skills.map((s, i) => {
          const angle = (i / skills.length) * Math.PI * 2
          const x = 120 * Math.cos(angle)
          const y = 120 * Math.sin(angle)
          return (
            <motion.div key={s.name} style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }} className="absolute -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-sm flex-col">
                <div>{s.icon}</div>
                <div className="text-xs mt-1">{s.name}</div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-semibold">Skills</div>
      </div>
    </div>
  )
}
