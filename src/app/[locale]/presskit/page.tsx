'use client';


import Link from 'next/link';

export default function PressKitPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* 🎮 GAME OVERVIEW SECTION */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-background" aria-label="Game Overview">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg bg-surface flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="flex items-center justify-center w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            {/* SVG kite logo (same as header/footer) */}
            <svg width="100%" height="100%" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'100%',maxHeight:'100%'}} aria-label="Paper Kite Games logo">
              <polygon points="11,2 20,11 11,20 2,11" stroke="var(--color-cstm-primary)" strokeWidth="2" fill="none" />
              <line x1="11" y1="2" x2="11" y2="20" stroke="var(--color-cstm-primary)" strokeWidth="1.5" />
              <line x1="2" y1="11" x2="20" y2="11" stroke="var(--color-cstm-primary)" strokeWidth="1.5" />
              {/* Improved tail: smoother, more natural curve */}
              <path d="M11 20 Q12 22 10 23 Q8 24 11 25" stroke="var(--color-cstm-primary)" strokeWidth="1.2" fill="none" />
              <circle cx="11" cy="25" r="0.7" fill="var(--color-cstm-primary)" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Press Kit – Paper Kite Games
            </h1>
            <p className="text-lg text-muted mb-4">
              Paper Kite Games is an independent studio crafting meaningful interactive experiences. Our upcoming title blends strategic dungeon defense with satirical fantasy in a fresh twist on tower defense gameplay.
            </p>
            <p className="text-lg text-muted">
              Below you’ll find everything you need to cover the game: descriptions, screenshots, logos, team info, and contact details. Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* 📝 FAST FACTS SECTION */}
      <section className="w-full bg-surface text-foreground py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">Fast Facts</h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-lg text-muted">
            <li><strong className="text-primary">Game Title:</strong> This Is Not A Dungeon (TINAD)</li>
            <li><strong className="text-primary">Developer:</strong> Paper Kite Games</li>
            <li><strong className="text-primary">Genre:</strong> Strategy / Tower Defense / Satire</li>
            <li><strong className="text-primary">Platform:</strong> PC (Steam)</li>
            <li><strong className="text-primary">Release Date:</strong> TBD (Demo Available Q4 2025)</li>
            <li><strong className="text-primary">Price:</strong> TBD</li>
            <li><strong className="text-primary">Press Contact:</strong> paperkitegames@gmail.com</li>
            <li><strong className="text-primary">Website:</strong> paperkite.games</li>
          </ul>
        </div>
      </section>

      {/* 🖼️ MEDIA ASSETS SECTION */}
      <section className="w-full bg-background text-foreground py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Media Kit</h2>
          <p className="text-lg text-muted mb-6">
            All logos, screenshots, and trailer clips are free to use for press and content creators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <a href="/assets/presskit/logo.png" download className="underline text-primary hover:text-primary-light">
              🖼️ Download Logo
            </a>
            <a href="/assets/presskit/screenshots.zip" download className="underline text-primary hover:text-primary-light">
              🖼️ Download Screenshots
            </a>
            <a href="https://youtu.be/yourtrailerlink" target="_blank" rel="noopener" className="underline text-primary hover:text-primary-light">
              🎬 Watch Trailer
            </a>
            <a href="/assets/presskit/presskit.zip" download className="underline text-primary hover:text-primary-light">
              📦 Download Full Press Kit (.zip)
            </a>
          </div>
        </div>
      </section>

      {/* 🏢 STUDIO INFO (SHORT) */}
      <section className="w-full bg-surface text-foreground py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">About Paper Kite Games</h2>
          <p className="text-lg text-muted mb-6">
            We’re a small indie studio focused on narrative-rich, expressive strategy games with humor and heart.
            <Link
              href="/about"
              className="text-primary underline hover:text-primary-light font-medium"
            >
              👉 Read our full story
            </Link>
          </p>
        </div>
      </section>

      {/* 📩 CONTACT SECTION */}
      <section className="w-full bg-background text-foreground py-16 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need anything else?</h2>
          <p className="text-lg text-muted mb-6">We’re happy to help with interviews, codes, or exclusive content. Just reach out!</p>
          <a
            href="mailto:paperkitegames@gmail.com"
            className="bg-primary text-onAccent font-bold py-3 px-6 rounded-xl shadow text-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Email Paper Kite Games"
          >
            📧 Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
