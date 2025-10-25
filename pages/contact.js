export default function Contact(){
  return (
    <section className="page max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-slate-300 mb-4">Email: <a className="underline" href="mailto:nishitvankawala@gmail.com">nishitvankawala@gmail.com</a></p>
      <div className="max-w-xl">
        <form onSubmit={(e)=>{e.preventDefault(); alert('Replace with Formspree or API action');}} className="space-y-4">
          <input name="name" placeholder="Your name" className="w-full p-3 rounded bg-white/5 border border-white/5" required />
          <input name="email" type="email" placeholder="Your email" className="w-full p-3 rounded bg-white/5 border border-white/5" required />
          <textarea name="message" rows="6" placeholder="Message" className="w-full p-3 rounded bg-white/5 border border-white/5" required />
          <button className="px-4 py-3 bg-accent rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  )
}
