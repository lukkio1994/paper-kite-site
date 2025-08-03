"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 🔁 Shared content for both floating and sticky versions
function PanelContent() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-3 px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto">

      {/* 📨 Indie-style Mailing List Button */}
      <a
        href="#"
        className="font-semibold py-3 px-6 rounded-xl shadow-md text-center text-lg transition w-full sm:w-auto
          bg-[var(--color-tinad-primary)] text-[var(--color-tinad-white)]
          hover:bg-[var(--color-tinad-primary-light)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-tinad-primary)]"
      >
        Get Dev Updates
      </a>

      {/* 🎥 Content Creator Button (uses same style as mailing list) */}
      <a
        href="#"
        className="font-semibold py-3 px-6 rounded-xl shadow-md text-center text-lg transition w-full sm:w-auto
          bg-[var(--color-tinad-primary)] text-[var(--color-tinad-white)]
          hover:bg-[var(--color-tinad-primary-light)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-tinad-primary)]"
      >
        For Content Creators
      </a>

      {/* 🕹️ Steam Wishlist Button */}
      <a href="#" className="block w-full sm:w-auto">
        <div className="h-[52px] px-6 bg-black rounded-xl flex items-center justify-center transition hover:opacity-90 mx-auto">
          <Image
            src="/images/icons/steam-wishlist.png"
            alt="Wishlist on Steam"
            width={130}
            height={40}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </a>
    </div>
  );
}


export default function HomePage() {
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  return (
    <main className="w-full bg-[var(--color-tinad-background)] text-[var(--color-tinad-foreground)] overflow-x-hidden font-body">

      {/* 🎮 HERO SECTION */}
      <section
        className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-[var(--color-tinad-background)] to-[var(--color-tinad-primary-dark)] text-[var(--color-tinad-surface)]"
        aria-label="Game key art section"
      >
        {/* 🖼️ Capsule image centered on top of gradient */}
        <div className="relative w-full max-w-screen-xl aspect-[1232/706] z-10">
          <Image
            src="/images/games/Tinad/store_capsule_main.png"
            alt="Key art from This Is Not A Dungeon"
            fill
            className="object-contain object-center"
            priority
          />

          {/* 💬 Floating CTA panel (before sticky) */}
          {!isSticky && (
            <div className="absolute bottom-6 left-0 z-40 w-full flex justify-center transition-all duration-300">
              <PanelContent />
            </div>
          )}

          {/* Sticky trigger */}
          <div ref={sentinelRef} className="absolute bottom-0 left-0 w-full h-[1px] pointer-events-none" />
        </div>
      </section>

      {/* 📌 Sticky version: always present, fixed to top when active */}
      <div
        className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 pointer-events-none ${
          isSticky
            ? "bg-[color:var(--color-tinad-background)/90] backdrop-blur-md shadow-md border-b border-[var(--color-tinad-border)] opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible"
        }`}
        style={{ willChange: "opacity, transform" }}
      >
        <PanelContent />
      </div>

      {/* 💬 GAME SUMMARY */}
      <section className="w-full bg-[var(--color-tinad-surface)] text-[var(--color-tinad-foreground)] py-24 px-4 border-t border-[var(--color-tinad-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-[var(--color-tinad-primary)]">
            Outsmart. Survive. Build the Worst Welcome Ever.
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-tinad-muted)]">
            You&apos;re not the hero. You&apos;re a tired, underpaid dark mage just trying to survive a dungeon raid. Place traps, trick heroes, and turn your base into the world&apos;s worst welcome party.
          </p>
        </div>
      </section>
    </main>
  );
}
