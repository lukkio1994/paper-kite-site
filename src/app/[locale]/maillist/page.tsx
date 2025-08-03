'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* 🏢 ABOUT HERO SECTION */}
      <section
        className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-background"
        aria-label="About Paper Kite Games"
      >
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg bg-surface flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Paper Kite Games logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              About Paper Kite Games
            </h1>
            <p className="text-lg text-muted mb-4">
              We are an independent game studio passionate about crafting unique, memorable, and meaningful experiences. Our small but mighty team brings together artists, developers, and storytellers from around the world.
            </p>
            <p className="text-lg text-muted">
              At Paper Kite Games, we believe in creative freedom, player-first design, and the magic of interactive storytelling. We build worlds that invite exploration, challenge expectations, and celebrate the joy of play.
            </p>
          </div>
        </div>
      </section>

      {/* 👥 TEAM SECTION */}
      <section className="w-full bg-surface text-foreground py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example team members - replace with real data */}
            <div className="flex flex-col items-center">
              <Image src="/images/team/alex.png" alt="Alex - Creative Director" width={96} height={96} className="rounded-full mb-2" />
              <div className="font-semibold">Alex</div>
              <div className="text-sm text-muted">Creative Director</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/jordan.png" alt="Jordan - Lead Developer" width={96} height={96} className="rounded-full mb-2" />
              <div className="font-semibold">Jordan</div>
              <div className="text-sm text-muted">Lead Developer</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/sam.png" alt="Sam - Art & Animation" width={96} height={96} className="rounded-full mb-2" />
              <div className="font-semibold">Sam</div>
              <div className="text-sm text-muted">Art & Animation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌱 STUDIO VALUES SECTION */}
      <section className="w-full bg-background text-foreground py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Values</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-muted">
            <li>
              <span className="font-bold text-primary">Creativity:</span> We encourage bold ideas and original thinking in everything we do.
            </li>
            <li>
              <span className="font-bold text-primary">Community:</span> We build games for and with our players, valuing feedback and collaboration.
            </li>
            <li>
              <span className="font-bold text-primary">Diversity:</span> Our team and our games reflect a wide range of backgrounds, stories, and perspectives.
            </li>
            <li>
              <span className="font-bold text-primary">Quality:</span> We obsess over details and polish, delivering games we’re proud of.
            </li>
          </ul>
        </div>
      </section>

      {/* 🚀 CALL TO ACTION SECTION */}
      <section className="w-full bg-surface text-foreground py-16 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Want to connect or collaborate?</h2>
          <p className="text-lg text-muted mb-6">We love meeting fellow devs, artists, and players. Reach out to us on social or email!</p>
          <a
            href="mailto:contact@paperkitegames.com"
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
