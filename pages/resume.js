export default function Resume(){
  return (
    <section className="page max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-4">Resume</h2>
      <p className="text-slate-300 mb-6">My latest resume (PDF). Download or preview below.</p>
      <div className="mb-6">
        <a href="/resume.pdf" download className="px-4 py-2 bg-accent rounded-md">📥 Download Resume</a>
      </div>
      <div className="border border-white/5 rounded-md overflow-hidden" style={{height: '75vh'}}>
        <iframe src="/resume.pdf" title="Resume" className="w-full h-full" />
      </div>
    </section>
  )
}

