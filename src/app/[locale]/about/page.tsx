"use client";

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* 🪁 ABOUT / PHILOSOPHY HERO */}
      <section
        className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-background"
        aria-label="About Paper Kite Games"
      >
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg bg-surface flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Paper Kite Games
            </h1>

            <p className="text-lg text-muted mb-4">
              We believe a great game can begin with a{" "}
              <span className="font-semibold text-foreground">simple idea</span>
              . If it can evoke the feeling of{" "}
              <span className="font-semibold">flying a paper kite</span> when we
              were younger—light, playful, a little bit magical—then it’s a game
              worth making and a game worth playing.
            </p>

            <p className="text-lg text-muted">
              You don’t need the latest graphics or a maze of complex systems to
              have fun. You need a clean core loop, responsive controls, and
              moments that spark a smile. That’s our north star:{" "}
              <span className="font-semibold">feel-first fun</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ✨ ORIGIN STORY / QUOTE */}
      <section className="w-full bg-surface text-foreground py-14 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <blockquote className="rounded-xl border border-border bg-background/60 p-6 md:p-8 italic leading-relaxed">
            “On windy afternoons we’d run until the string hummed, watching a
            paper kite dance overhead. No tutorials. No specs. Just movement,
            tension, and joy. That’s the feeling we chase in every project.”
          </blockquote>
        </div>
      </section>

      {/* 👥 TEAM */}
      <section className="w-full bg-background text-foreground py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First row: David, Luis, Carlos */}
            <div className="flex flex-col items-center">
              <div className="font-semibold">David Leon</div>
              <div className="text-sm text-muted">Senior Software Developer</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold">Luis Sequeira</div>
              <div className="text-sm text-muted">Lead Developer</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold">Carlos Sequeira</div>
              <div className="text-sm text-muted">UX/UX Designer</div>
            </div>
            {/* Second row: empty, Logan, empty */}
            <div className="hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="font-semibold">B. Logan</div>
              <div className="text-sm text-muted">Social Media & Community Manager</div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 🌱 PRINCIPLES (VALUES) */}
      <section className="w-full bg-surface text-foreground py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Our Principles
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-lg text-muted">
            <li>
              <span className="font-bold text-primary">Simple Core:</span> One
              clear idea you can explain in a sentence—and feel in five seconds.
            </li>
            <li>
              <span className="font-bold text-primary">
                Feel Over Features:
              </span>{" "}
              If it doesn’t improve the moment-to-moment, it doesn’t ship.
            </li>
            <li>
              <span className="font-bold text-primary">Toy First:</span> Make it
              playful without the layers; systems come after the spark.
            </li>
            <li>
              <span className="font-bold text-primary">Readable Craft:</span>{" "}
              Clarity beats spectacle—clean art, snappy feedback, honest
              challenge.
            </li>
          </ul>
        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="w-full bg-background text-foreground py-16 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Want to connect or collaborate?
          </h2>
          <p className="text-lg text-muted mb-6">
            We love meeting fellow devs, artists, and players. If you share a
            passion for simple, feel-good games, let’s talk.
          </p>
          <a
            href="mailto:paperkitegames@gmail.com"
            className="bg-primary text-onAccent font-bold py-3 px-6 rounded-xl shadow text-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Contact Paper Kite Games"
          >
            📧 Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
