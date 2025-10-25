import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

export default function AnimatedCard({ title, desc, href, icon }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set(e.clientX - cx)
    y.set(e.clientY - cy)
  }

  function reset() {
    x.set(0); y.set(0)
  }

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className="w-64 h-40 bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-white/5 rounded-xl shadow-2xl cursor-pointer p-4 flex flex-col justify-between"
        style={{ rotateX, rotateY, perspective: 800 }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{icon}</div>
          <div>
            <div className="font-semibold text-lg">{title}</div>
            <div className="text-sm text-slate-300">{desc}</div>
          </div>
        </div>

        <div className="text-xs text-slate-400">Click to view</div>
      </motion.div>
    </Link>
  )
}
