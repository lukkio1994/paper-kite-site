"use client";

export default function ContactPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* CONTACT HERO SECTION */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-background border-b border-border" aria-label="Contact Paper Kite Games">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Contact Paper Kite Games</h1>
          <p className="text-lg text-muted mb-6">We love hearing from players, collaborators, and fellow devs! Reach out to us for support, press, business, or just to say hi.</p>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-surface border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-lg font-bold text-primary mb-1">Email</div>
            <a href="mailto:paperkitegames@gmail.com" className="text-lg text-muted hover:text-primary transition-colors">paperkitegames@gmail.com</a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-background">
        <div className="max-w-xl mx-auto bg-surface rounded-xl shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Send Us a Message</h2>
          <form className="space-y-6" autoComplete="off" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button type="submit" className="w-full bg-primary text-onAccent font-bold py-3 rounded-md shadow text-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
