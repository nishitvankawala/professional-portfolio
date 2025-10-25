export default function Projects(){
  const projects = [
    { title: 'ERP System', tech: ['React','Fastify','MySQL'], desc: 'Enterprise resource planning platform.' },
    { title: 'AI Knowledge Base', tech: ['NestJS','React','Postgres'], desc: 'AI-powered enterprise search.' },
    { title: 'Social Monetization App', tech: ['MERN','Stripe'], desc: 'Creator-first social platform.' }
  ]
  return (
    <section className="page max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p,i)=> (
          <article key={i} className="p-6 bg-white/3 rounded-xl border border-white/5 shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-300 my-2">{p.desc}</p>
            <div className="text-xs text-slate-400 mb-3">{p.tech.join(' • ')}</div>
            <div><a href="#" className="px-3 py-2 bg-accent rounded text-sm">GitHub</a></div>
          </article>
        ))}
      </div>
    </section>
  )
}
