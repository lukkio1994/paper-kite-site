'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* 🎮 HERO SECTION */}
      <section
        className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-background"
        aria-label="Game key art section"
      >
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg bg-surface">
          <div className="relative w-full aspect-[1232/706]">
            <Image
              src="/images/games/Tinad/store_capsule_main.png"
              alt="This Is Not A Dungeon store capsule"
              fill
              className="object-contain object-top"
              priority
            />
          </div>
        </div>

        {/* 🎮 PLATFORM BUTTONS */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {[
            'Purchase Direct',
            'Purchase on PS4',
            'Purchase on Steam',
            'Purchase on Xbox',
            'Purchase on Nintendo',
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="bg-accent text-onAccent font-bold py-3 px-4 rounded-xl shadow text-center text-lg transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* 💬 GAME SUMMARY */}
      <section className="w-full bg-surface text-foreground py-24 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Outsmart. Survive. Build the Worst Welcome Ever.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            You&apos;re a weak dark mage in the middle of a hero invasion. Good news:
            you&apos;re also clever, sneaky, and the dungeon itself is your only weapon.
            Craft rooms, place traps, and manipulate the odds in your favor.
            They think this is a dungeon. They&apos;re wrong.
          </p>
        </div>
      </section>
    </main>
  );
}
