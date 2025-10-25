export default function Skills(){
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'AWS', level: 70 }
  ]
  return (
    <section className="page max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s,i)=> (
          <div key={i} className="p-4 bg-white/3 rounded-xl border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <strong>{s.name}</strong>
              <span className="text-sm text-slate-300">{s.level}%</span>
            </div>
            <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
              <div className="h-3 rounded-full bg-gradient-to-r from-accent to-accent2" style={{width: `${s.level}%`}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
